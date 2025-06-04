/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="light"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      advent: ['Advent Pro', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}

