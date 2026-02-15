/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredericka: ['"Fredericka the Great"', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
};