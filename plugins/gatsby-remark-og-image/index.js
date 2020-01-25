const generateOpenGraphImage = require('generate-og-image')

module.exports = async ({ markdownNode, markdownAST }, pluginOptions) => {
  const outputFileName = `./public${markdownNode.fields.slug}${pluginOptions.image.outputFileName}`

  await generateOpenGraphImage({
    ...pluginOptions,
    image: {
      ...pluginOptions.image,
      outputFileName,
    },
    meta: {
      ...pluginOptions.meta,
      title: markdownNode.frontmatter.title
    }
  })

  console.info(`Generated an image: ${outputFileName}`)

  return markdownAST
}