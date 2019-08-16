// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Zachary Brooks: Full Stack Developer",
  siteUrl: "https://zacharybrooks.io",
  icon: "src/logo.svg",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/content/video-presentations/*.md",
        typeName: "VideoPresentation",
        route: "/work/:slug",
        remark: {
          plugins: [["gridsome-plugin-remark-youtube", { width: "500px" }]]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/content/projects/*.md",
        typeName: "Project"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/content/pages/*.md",
        typeName: "ContentPage"
      }
    }
  ],
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/scss/main.scss"`
      }
    }
  }
};
