// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const Blogs = require('./src/data/data.json')
module.exports = {
  siteName: Blogs[0].webInfo.name,
  siteUrl: process.env.DEPLOY_URL || Blogs[0].webInfo.url,
  siteDescription: Blogs[0].webInfo.description,
  titleTemplate: '%s - ' + Blogs[0].webInfo.name,
  metadata: {
    twitter: {
      site: '@' + Blogs[0].webInfo.twitter,
      creator: '@' + Blogs[0].webInfo.twitter,
    },
  },
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/privacy', '/legal'],
      },
    },
  ],
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
