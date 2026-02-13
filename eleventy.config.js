import fs from 'node:fs/promises'

import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'CPS Design History',
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
    },
    markdown: {
      headingPermalinks: true
    },
    stylesheets: [
      '/styles/application.css'
    ],
    templates: {
      searchIndex: true,
      tags: true
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Reset contents of output directory before each build
  eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
    if (runMode === 'build') {
      await fs.rm(directories.output, {
        force: true,
        recursive: true
      })
    }
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: '/'
  }
}
