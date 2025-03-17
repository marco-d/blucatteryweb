module.exports = function (eleventyConfig) {
  markdownTemplateEngine: "njk";
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");  
  return {
      
      dir: {
        input: "src",
        output: "public"
      },
    };
  }