/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.28em',
        cta: '0.18em',
      },
      keyframes: {
        'slide-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-fade-in': 'slide-fade-in 2s ease-in-out forwards',
        'slide-fade-out': 'slide-fade-out 1.5s ease-in-out forwards',
        'rise-in': 'rise-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
