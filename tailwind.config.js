const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  theme: {
    fontFamily: {
      'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
    },
    screens: {
      xs: '512px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.rose['500'],
        },
      },
      textColor: {
        lighten: colors.gray['500'],
        normal: colors.gray['800'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
