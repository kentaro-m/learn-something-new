const generateOpenGraphImage = require('generate-og-image')

module.exports = async ({ markdownNode, markdownAST }, pluginOptions) => {
  
  const result = await generateOpenGraphImage({
    ...pluginOptions,
    output: {
      ...pluginOptions.output,
      directory: `./public${markdownNode.fields.slug}`,
      fileName: pluginOptions.output.fileName,
    },
    image: {
      ...pluginOptions.image,
    },
    meta: {
      ...pluginOptions.meta,
      title: markdownNode.frontmatter.title
    }
  })

  console.info(`gatsby-remark-og-image: Successful generated: ${result}`)

  return markdownAST
}