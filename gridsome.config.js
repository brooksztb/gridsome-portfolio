// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//Add this line of code back in if we want to go back to tailwind
// const tailwind = require('tailwindcss');

// const postcssPlugins = [
//   tailwind('./tailwind.js')
// ];

module.exports = {
  siteName: 'Zachary Brooks: Full Stack Developer',
  siteUrl: 'https://zacharybrooks.io',
  icon: 'src/logo.svg',
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: postcssPlugins
  //     },
  //   },
  // },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/projects/*.md',
        typeName: 'Project'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/content/pages/*.md',
        typeName: 'ContentPage'
      }
    }
  ]
}