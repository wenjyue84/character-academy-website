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
    },
  },
  plugins: [],
};

export default config;
