const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.blueGray,
      green: colors.emerald,
      teal: colors.teal,
      red: colors.red,
      blue: colors.blue,
      black: colors.black,
      white: colors.white
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
