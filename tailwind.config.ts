import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: {
          DEFAULT: '#0b0b0b',
          raised: '#151311',
          card: '#090909',
          border: '#33302c',
        },
        ink: {
          DEFAULT: '#f1eee8',
          muted: '#aaa9a4',
          subtle: '#666460',
        },
        accent: {
          orange: '#ff8c59',
          amber: '#e5a43b',
          yellow: '#f0d76b',
        },
        line: 'rgba(204, 220, 245, 0.14)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Instrument Serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'DM Sans', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
        ultra: '0.25em',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
};

export default config;

