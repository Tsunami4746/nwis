/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nwis: {
          bg: '#090E11',
          surface: '#0D1418',
          elevated: '#111A1F',
          text: '#F2F3F3',
          muted: '#8B8F91',
          border: '#30373A',
          primary: '#E5A055',
          red: '#FF1F1F',
          amber: '#FFB454',
          green: '#16D968',
          info: '#3B91A5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

