const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ["src/**/*.vue"],
      whitelist: [
        "body",
        "html",
        "img",
        "a",
        "g-image",
        "g-image--lazy",
        "g-image--loaded",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "table",
        "tr",
        "td",
        "th",
        "tbody",
        "thead"
      ]
    })
  ]
};
