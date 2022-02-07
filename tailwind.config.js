const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ea363b',
        'primary-light': '#fd5d61',
        'primary-lightest': '#fe8689',
        secondary: '#cd6613',
        'secondary-light': '#fae6d6',
        neutral: colors.gray,
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('~@/assets/images/bg_flower.png')",
        'hero-pattern2': "url('~@/assets/images/bg_flower2.png')",
        'back-img': "url('~@/assets/images/bg_1.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
