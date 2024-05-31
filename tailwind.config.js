const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html"
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      "off-black": colors.neutral[800],
      "off-white": colors.neutral[100],
      black: colors.black,
      white: colors.white,
      red: {
        light: colors.red[400],
        DEFAULT: colors.red[800]
      },
      cyan: colors.teal[300],
      purple: colors.fuchsia[700],
      green: {
        light: colors.lime[300],
        DEFAULT: colors.lime[600]
      },
      blue: {
        light: colors.indigo[400],
        DEFAULT: colors.indigo[800]
      },
      yellow: colors.yellow[200],
      orange: colors.amber[600],
      brown: colors.yellow[900],
      grey: {
        light: colors.neutral[400],
        DEFAULT: colors.neutral[500],
        dark: colors.neutral[700]
      }
    },
    spacing: {
      0: "0",
      0.25: "0.4375rem",
      0.5: "0.875rem",
      0.75: "1.3125rem",
      1: "1.75rem",
      1.25: "2.1875rem",
      1.5: "2.625rem",
      1.75: "3.0625rem",
      2: "3.5rem",
      2.5: "4.375rem",
      3: "5.25rem",
      4: "7rem",
      5: "8.75rem",
      6: "10.5rem",
      7: "12.25rem",
      8: "14rem",
      9: "15.75rem"
    },
    fontFamily: {
      sans: ["Rubik", ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      xs: ["0.8125rem", "1.375rem"],
      sm: ["0.9375rem", "1.5rem"],
      base: ["1.125rem", "1.75rem"],
      lg: ["1.375rem", "1.75rem"],
      xl: ["1.625rem", "2rem"],
      "2xl": ["1.9375rem", "2.375rem"],
      "3xl": ["2.3125rem", "2.75rem"],
      "4xl": ["2.8125rem", "3.125rem"],
      "5xl": ["3.375rem", "3.75rem"]
    },
    lineHeight: {
      "sm-tight": "1.375rem",
      "sm-normal": "1.5rem",
      "sm-loose": "1.75rem"
    }
  },
  plugins: []
};
