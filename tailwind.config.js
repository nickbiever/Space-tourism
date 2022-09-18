/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'dark-blue': '#0B0D17',
        'light-blue': '#D0D6F9',
      },
      fontFamily: {
        sans: ['barlow-regular', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
