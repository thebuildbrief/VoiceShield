/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#171326',
        plum: {
          950: '#0d0a17',
          900: '#110d1e',
          850: '#171326',
          800: '#1d1832',
          700: '#262042',
          600: '#342b58',
          500: '#483c79',
          400: '#6857ad',
        },
        lavender: {
          DEFAULT: '#BFA2FF',
          300: '#E5D8FF',
          400: '#D2BCFF',
          500: '#BFA2FF',
          600: '#9C75FF',
          700: '#7B4AE8',
        },
        lime: {
          DEFAULT: '#DFFF75',
          300: '#ECFF9E',
          400: '#E6FF85',
          500: '#DFFF75',
          600: '#C7ED50',
          700: '#9EBF28',
        },
        cream: {
          DEFAULT: '#F7F3ED',
          100: '#FFFFFF',
          200: '#F7F3ED',
          300: '#DFD9CE',
          400: '#A7A0BA',
          500: '#78718E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave-bar': 'waveBar 1.2s ease-in-out infinite alternate',
        'scanline': 'scanline 4s linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        waveBar: {
          '0%': { height: '15%' },
          '100%': { height: '100%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px -3px rgba(191, 162, 255, 0.25)' },
          '100%': { boxShadow: '0 0 25px 2px rgba(223, 255, 117, 0.35)' },
        }
      }
    },
  },
  plugins: [],
}
