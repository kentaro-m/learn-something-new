import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type Meta = {
  name: string,
  property: string,
  content: string
}

type SEOProps = {
  pageURL: string,
  description?: string,
  lang?: string,
  meta?: Meta[],
  keywords?: string[],
  title?: string,
  slug?: string,
}

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      lang: string
      siteUrl: string
    }
  }
}

const Seo = ({ description, title, pageURL}: SEOProps) => (
    <StaticQuery
      query={detailsQuery}
      render={(data: Data) => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang: data.site.siteMetadata.lang,
            }}
            title={title ? title : data.site.siteMetadata.title}
            titleTemplate={title ? `%s | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:image`,
                content: pageURL + 'thumbnail.png',
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:image`,
                content: pageURL + 'thumbnail.png',
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]}
          />
        )
      }}
    />
  )

export default Seo

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
      }
    }
  }
`
