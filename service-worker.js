// Fidelyoo Service Worker - PWA + Web Push
const CACHE_NAME = 'fidelyoo-v1';
const CORE_ASSETS = [
  '/fidelyoo/',
  '/fidelyoo/card.html',
  '/fidelyoo/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS).catch(() => {}))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Network-first for API calls (Supabase) and HTML pages
  if (url.hostname.includes('supabase.co') || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req).catch(() => caches.match(req).then((r) => r || caches.match('/fidelyoo/card.html')))
    );
    return;
  }
  // Cache-first for static assets
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => cached))
  );
});

// Web Push receiver
self.addEventListener('push', (event) => {
  let data = { title: 'Fidelyoo', body: 'Nouveau message' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {
    if (event.data) data.body = event.data.text();
  }
  const options = {
    body: data.body || '',
    icon: data.icon || 'https://api.dicebear.com/7.x/shapes/png?seed=fidelyoo&backgroundColor=0b0b0c&size=192',
    badge: 'https://api.dicebear.com/7.x/shapes/png?seed=fidelyoo&backgroundColor=0b0b0c&size=96',
    tag: data.tag || 'fidelyoo-msg',
    data: { url: data.url || '/fidelyoo/card.html' },
    vibrate: [80, 40, 80]
  };
  event.waitUntil(self.registration.showNotification(data.title || 'Fidelyoo', options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/fidelyoo/card.html';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.includes(url) && 'focus' in c) return c.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});

