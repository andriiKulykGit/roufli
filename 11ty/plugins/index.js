// import eleventyHTMLValidate from 'eleventy-plugin-html-validate'
import eleventyRev from 'eleventy-plugin-rev'

import { scss } from './scss.js'
import { images } from './images.js'
import { htmlMinimize } from './htmlMinimize.js'


export function plugins(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyRev)
  // eleventyConfig.addPlugin(eleventyHTMLValidate)

  scss(eleventyConfig)
  images(eleventyConfig)
  htmlMinimize(eleventyConfig)
}
