import { plugins } from './11ty/plugins/index.js'

export default function (eleventyConfig) {
  plugins(eleventyConfig)

  // Static files
  eleventyConfig.addPassthroughCopy('src/assets/fonts')
  eleventyConfig.addPassthroughCopy('src/assets/images/bg-preference.svg')

  eleventyConfig.setServerOptions({
    showAllHosts: true,
    watch: [
      './dist/**/*',
    ],
  })

  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      htmlTemplateEngine: ['njk', 'html'],
      includes: 'includes',
      data: 'data',
      input: 'src',
      output: 'dist',
      layouts: 'includes/layouts',
    },
    pathPrefix: '/',
  }
}
