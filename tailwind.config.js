const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: {
        ish: colors.neutral[800],
        DEFAULT: colors.black,
      },
      white: {
        DEFAULT: colors.white,
        ish: colors.neutral[100],
      },
      red: {
        light: colors.red[400],
        DEFAULT: colors.red[800],
      },
      cyan: colors.teal[300],
      purple: colors.fuchsia[700],
      green: {
        light: colors.lime[300],
        DEFAULT: colors.lime[600],
      },
      blue: {
        light: colors.indigo[400],
        DEFAULT: colors.indigo[800],
      },
      yellow: colors.yellow[200],
      orange: colors.amber[600],
      brown: colors.yellow[900],
      grey: {
        light: colors.neutral[400],
        DEFAULT: colors.neutral[500],
        dark: colors.neutral[700],
      }
    },
    fontFamily: {
      sans: ["Rubik", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: []
}
