/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths if necessary
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        blockShadow: '0px 2px 4px 0px #0000000D',
      },
    },
  },
  plugins: [],
};