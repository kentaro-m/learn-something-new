const siteMetadata = {
  title: `Learn Something New`,
  author: `Kentaro Matsushita`,
  description: `Knowledge is power.`,
  siteUrl: `https://blog.kentarom.com`,
  social: {
    twitter: `_kentaro_m`,
  },
  lang: 'ja',
  facebookAppId: '507266919989961',
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-90362795-2",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx-embed`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#666666`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.slug,
                guid: site.siteMetadata.siteUrl + edge.node.slug,
                custom_elements: [{ "content:encoded": edge.node.html }]
              })
            })
          },
          query: `
            {
              allMdx(
                sort: {fields: [frontmatter___date], order: DESC}
                limit: 1
              ) {
                edges {
                  node {
                    slug
                    frontmatter {
                      title
                      date
                    }
                    excerpt
                    html
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "Learn Something New RSS Feed",
        },
      ],
    },
  },
  `gatsby-plugin-typescript`,
  `gatsby-plugin-sitemap`,
  ],
}
