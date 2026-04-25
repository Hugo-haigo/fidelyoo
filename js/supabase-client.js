// =========================================
// FIDELYOO — SUPABASE CLIENT (shared)
// =========================================
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SUPABASE_URL = 'https://unxedrfzdnqurgmmujke.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_jYq6vIYSFZ_z8qVSCiBo0A_fK8_mC45';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

// Helpers
export async function getCurrentMerchant() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: merchant } = await supabase
    .from('merchants')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle();
  return merchant;
}

export async function requireAuth(redirectTo = 'login.html') {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    window.location.href = redirectTo;
    return null;
  }
  return session;
}

export function slugify(str) {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}
