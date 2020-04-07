// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss');
const config = require('./src/content/data/config.json');

module.exports = {
  siteName: config.title,
  metadata: {
    siteName: config.title,
    siteDescription: config.description,
  },
  siteUrl: 'https://zacharybrooks.io',
  titleTemplate: `%s - ${config.title}`,
  icon: '/src/static/favicon.ico',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  plugins: [
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: '318db82393a7a79ca8556f7aff0238', // required move to a env file
        previewMode: true,
        apiUrl: 'https://graphql.datocms.com/preview',
        typeName: 'DatoCms',
      },
    },
  ],
};
