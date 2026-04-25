// Fidelyoo design tokens — v3 (paper/ink/oxblood)
window.fidelyooTailwindConfig = {
  theme: {
    extend: {
      colors: {
        // Surfaces — warm near-whites
        paper: { DEFAULT:'#FAFAF7', 2:'#F2F1EC', 3:'#E8E6DE' },
        // Ink — full-bleed black sections, CTAs, nav
        ink: { DEFAULT:'#0E0E10', 2:'#1A1A1D', soft:'#2A2A2E' },
        // Text hierarchy
        mute: { DEFAULT:'#6B6A66', 2:'#A29F97' },
        // Accent — oxblood, used sparingly
        ox: { DEFAULT:'#9A2232', hot:'#B02A3E', deep:'#6E141F', soft:'#D06A7A' },
        // Subtle gain tag (used on calculator only)
        moss: { DEFAULT:'#2F5D3A', soft:'#1F3D27' },
        line: 'rgba(14,14,16,0.10)',
        'line-2': 'rgba(14,14,16,0.18)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Times New Roman', 'serif'],
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: { eyebrow:'0.14em', tightx:'-0.02em', tightxx:'-0.045em' },
      borderRadius: { sm:'6px', md:'10px', lg:'14px', xl:'20px', '2xl':'28px' },
      boxShadow: {
        card: '0 1px 2px rgba(14,14,16,.04), 0 8px 24px rgba(14,14,16,.06)',
        phone: '0 40px 80px -20px rgba(14,14,16,.35), 0 20px 40px -10px rgba(14,14,16,.2)',
        pill: '0 1px 2px rgba(14,14,16,.08)',
      },
      keyframes: {
        'fade-up': { '0%':{ opacity:'0', transform:'translateY(20px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
        float: { '0%,100%':{ transform:'translateY(0) rotateX(8deg) rotateY(-12deg)' }, '50%':{ transform:'translateY(-8px) rotateX(8deg) rotateY(-12deg)' } },
        tick: { '0%,100%':{ opacity:'1' }, '50%':{ opacity:'0.35' } },
        'spin-slow': { '0%':{ transform:'rotate(0)' }, '100%':{ transform:'rotate(360deg)' } },
        'smile-draw': { '0%':{ strokeDasharray:'0 100' }, '100%':{ strokeDasharray:'100 0' } },
      },
      animation: {
        'fade-up': 'fade-up .8s cubic-bezier(0.16,1,0.3,1) both',
        float: 'float 8s ease-in-out infinite',
        tick: 'tick 1.8s ease-in-out infinite',
        'spin-slow':'spin-slow 40s linear infinite',
        'smile-draw':'smile-draw 1.2s ease-out both',
      },
    },
  },
};
