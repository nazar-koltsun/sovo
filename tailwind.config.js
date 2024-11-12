/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths if necessary
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'Arial', 'sans-serif'], // 'custom' is the name you'll use in your classes
      },
    },
  },
  plugins: [],
};