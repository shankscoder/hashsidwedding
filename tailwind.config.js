const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        lime: colors.lime,
        cyan: colors.cyan,
        amber: colors.amber,
        lightblue: colors.lightBlue
      },
      fontFamily: {
        sans: ['Inter',...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
