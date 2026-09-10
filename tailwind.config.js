/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.tsx', './App.tsx', './constants.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        void: '#0D0D0D',   // brand near-black, the page ground
        pitch: '#080808',  // recessed panels
        raise: '#151413',  // lifted surfaces, warm-tinted so it reads as film, not UI grey
        cream: '#F5F0E8',  // brand warm off-white
        ember: '#C4622D',  // brand burnt orange. 4.75:1 on void. Used sparingly.
        dim: '#98958F',    // cream at 60%, flattened. Secondary copy.
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Figtree', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
