module.exports = {
  content: [
    "./index.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/vue-tailwind-datepicker/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'header': '#333',
        'content': '#666'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
}
