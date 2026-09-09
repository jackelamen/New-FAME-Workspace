/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.tsx', './App.tsx', './constants.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        ink: '#101211',
        paper: '#F6F5F2',
        chalk: '#FFFFFF',
        haze: '#EAE8E2',
        turq: '#40E0D0',
        deep: '#0A5F58',
        muted: '#5A5F5C',
      },
      fontFamily: {
        display: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        read: ['Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
