export const theme = {
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
        '50': '#757385',
        '100': '#4C4A5E',
        '200': '#413E52',
        '300': '#353345',
        '400': '#2A2739',
        '500': '#1E1C2D',
        '600': '#131020',
        '700': '#0D0B1A',
        '800': '#070514'
      },
      light: {
        'gray-02': '#CBD6E2',
        'gray-01': '#F2F5FC'
      }
    },
    white: '#FFFFFF',
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    card: {
      DEFAULT: 'var(--card)',
      foreground: 'var(--card-foreground)'
    },
    popover: {
      DEFAULT: 'var(--popover)',
      foreground: 'var(--popover-foreground)'
    },
    primary: {
      DEFAULT: 'var(--primary)',
      foreground: 'var(--primary-foreground)'
    },
    secondary: {
      DEFAULT: 'var(--secondary)',
      foreground: 'var(--secondary-foreground)'
    },
    muted: {
      DEFAULT: 'var(--muted)',
      foreground: 'var(--muted-foreground)'
    },
    accent: {
      DEFAULT: 'var(--accent)',
      foreground: 'var(--accent-foreground)'
    },
    destructive: {
      DEFAULT: 'var(--destructive)',
      foreground: 'var(--destructive-foreground)'
    },
    border: 'var(--border)',
    input: 'var(--input)',
    ring: 'var(--ring)',
    chart: {
      '1': 'var(--chart-1)',
      '2': 'var(--chart-2)',
      '3': 'var(--chart-3)',
      '4': 'var(--chart-4)',
      '5': 'var(--chart-5)'
    }
  },
  fontSizes: {
    sm: '0.875rem',
    base: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.5rem'
  },
  space: {
    2: '0.5rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
    24: '6rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)'
  }
} as const

export type Theme = typeof theme
