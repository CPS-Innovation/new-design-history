module.exports = function (eleventyConfig) {
  const pathPrefix = "/design-history"; // ✅ Set once here

  // Browser Sync
  eleventyConfig.setBrowserSyncConfig({
    rewriteRules: [{
      match: /\/image\/(\d+)(x)?(\d+)?/g,
      replace: '/images'
    }],
    serveStatic: ['public'],
    serveStaticOptions: {
      extensions: ['html']
    }
  });

  // Expose pathPrefix globally so {{ pathPrefix }} works in templates
  eleventyConfig.addGlobalData("pathPrefix", pathPrefix);

  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/libraries/nunjucks'));
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown'));

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'));
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Filters
  eleventyConfig.addFilter('date', require('./lib/filters/date'));
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown'));
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty'));
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize'));
  eleventyConfig.addFilter('widont', require('./lib/filters/widont'));

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' });
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' });

  // Config
  return {
    pathPrefix, // ✅ Used here for Eleventy routing
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    },
    templateFormats: ['njk', 'md', '11ty.js']
  };
};