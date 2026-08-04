/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#06070d',
          900: '#0b0d17',
          850: '#111528',
          800: '#181d36',
          700: '#232a4d',
        },
        neon: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          pink: '#f72585',
          purple: '#7928ca',
          magenta: '#ff007f',
          glow: '#38ef7d',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
        ultra: '24px',
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.6), inset 0 1px 2px 0 rgba(255, 255, 255, 0.2)',
        'neon-cyan': '0 0 25px rgba(0, 242, 254, 0.5)',
        'neon-purple': '0 0 25px rgba(121, 40, 202, 0.5)',
        'neon-pink': '0 0 25px rgba(247, 37, 133, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'typing-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
