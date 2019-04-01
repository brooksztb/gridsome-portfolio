// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss');

const postcssPlugins = [
  tailwind('./tailwind.js')
]

module.exports = {
  siteName: 'Zachary Brooks: Full Stack Developer',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}