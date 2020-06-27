const production = process.env.NODE_ENV === "production";
const cssnano = require('cssnano');

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(production ? [purgecss] : []),
    require('autoprefixer'),
    cssnano({
      autoprefixer: false,
      preset: ['default'],
   }),
  ]
};