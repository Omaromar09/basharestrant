/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basha: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        crispy: {
          gold: '#F59E0B',
          amber: '#D97706',
          red: '#DC2626',
          fire: '#B91C1C',
          dark: '#0D0F12',
          card: '#16191F',
          border: '#262B35',
          light: '#F8FAFC'
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
        'glow-red': '0 0 25px -5px rgba(220, 38, 38, 0.4)',
      }
    },
  },
  plugins: [],
}
