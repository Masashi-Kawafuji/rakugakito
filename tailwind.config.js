const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      notoSansJP: ['Noto Sans JP', 'sans-serif'],
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
