// tailwind.config.js — Fidelyoo Design Tokens
// Chargé via CDN sur chaque page : <script src="tailwind.config.js">

tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Palette principale Fidelyoo
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        // Surfaces sombres
        surface: {
          DEFAULT: '#0f0f13',
          paper:   '#1a1a24',
          card:    '#22222e',
          muted:   '#2e2e3e',
        },
        // Texte
        content: {
          DEFAULT: '#f0ede8',
          muted:   '#9694a0',
          subtle:  '#5c5a68',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl':  '1rem',
        '3xl':  '1.5rem',
        '4xl':  '2rem',
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(124, 58, 237, 0.2)',
        'brand':    '0 4px 24px rgba(124, 58, 237, 0.3)',
        'brand-lg': '0 8px 48px rgba(124, 58, 237, 0.4)',
        'glass':    '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #a78bfa, #38bdf8)',
        'card-gradient':  'linear-gradient(135deg, #7c3aed, #4f46e5)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':    'fadeIn 0.3s ease-out',
        'slide-up':   'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
