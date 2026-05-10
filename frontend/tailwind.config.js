/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        nutrition:   '#E8A87C',
        hydration:   '#6DB3F2',
        walking:     '#7BC67E',
        flexibility: '#C39BD3',
        workouts:    '#F1948A',
        recovery:    '#76D7C4',
        ai:          '#F7DC6F',
      },
    },
  },
  plugins: [],
}

