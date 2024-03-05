/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'new-font': ['Open Sans', 'sans-serif'],
        'new-2-font': ['Satisfy' , 'cursive'],
        'lato': ['Lato', 'sans-serif'],
        'Roboto': ['Roboto Serif' , 'serif'],
        'Freehand': ['Freehand' , 'cursive'],
        'Poppins': ['Poppins' , 'sans-serif'],
        'Abril': ['Abril Fatface' , 'cursive'],
        'Rouge': ['Rouge Script','cursive'],
        'Dancing': ['Dancing Script', 'cursive'],
      },
      colors:{
        'ser-color': '#ffe4b0',
        'gold': '#ffd700'
      },
      backgroundImage: {
        'pageb': "url('/src/img/book.png')",
        'pageb1' : "url('/src/img/book1.png')"
      }
    },
  },
}
