// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
module.exports = {
  siteName: 'Multan Aesthetics',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
}
