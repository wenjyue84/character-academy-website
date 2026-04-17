import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F2A44',
          dark: '#141C30',
          ink: '#0F172A',
        },
        gold: {
          DEFAULT: '#B8894A',
          dark: '#946A34',
          light: '#D4A86A',
        },
        sand: {
          DEFAULT: '#EFE6D6',
          warm: '#E5D7BD',
        },
        cream: '#FBF8F1',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)',
        lift: '0 2px 4px rgba(15, 23, 42, 0.05), 0 24px 48px -24px rgba(15, 23, 42, 0.22)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.08  0 0 0 0 0.11  0 0 0 0 0.18  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        'faint-grid':
          "linear-gradient(rgba(184,137,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,137,74,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      letterSpacing: {
        'display': '-0.015em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
