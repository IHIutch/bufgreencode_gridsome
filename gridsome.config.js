// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");

module.exports = {
  siteName: "BufGreenCode",
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/**/*.md",
        typeName: "Post",
        route: "/content/sections/:article/:slug"
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()]
      }
    }
  }
};
