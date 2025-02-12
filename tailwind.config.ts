import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            light: '#2E7AFF',
            DEFAULT: '#1D63FF',
            dark: '#0043D9'
          },
          auxiliary: {
            green: '#35D9A8',
            yellow: '#FFD76F'
          }
        },
        neutral: {
          dark: {
            800: '#070514',
            700: '#0D0B1A',
            600: '#131020',
            500: '#1E1C2D',
            400: '#2A2739',
            300: '#353345',
            200: '#413E52',
            100: '#4C4A5E',
            50: '#757385'
          },
          light: {
            'gray-02': '#CBD6E2',
            'gray-01': '#F2F5FC'
          }
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        archivo: ['var(--font-archivo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
