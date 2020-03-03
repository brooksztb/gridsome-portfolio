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
    cloudinaryUrl: config.cloudinary_url
  },
  siteUrl: 'https://zacharybrooks.io',
  titleTemplate: `%s - ${config.title}`,
  icon: '/src/static/favicon.ico',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss]
      }
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        baseDir: './src/content/',
        path: 'blog/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Content',
        baseDir: './src/content/pages/',
        path: '*.md'
      }
    }
  ]
};
