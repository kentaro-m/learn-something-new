const catchy = require('catchy-image')

module.exports = async ({ markdownNode }, pluginOptions) => {
  
  const result = await catchy.generate({
    ...pluginOptions,
    output: {
      ...pluginOptions.output,
      directory: `./public${markdownNode.fields.slug}`,
      fileName: pluginOptions.output.fileName,
    },
    meta: {
      ...pluginOptions.meta,
      title: markdownNode.frontmatter.title
    }
  })

  console.info(`gatsby-remark-og-image: Successful generated: ${result}`)
}