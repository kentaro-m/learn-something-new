import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type Meta = {
  name: string,
  property: string,
  content: string
}

type SEOProps = {
  description?: string,
  lang?: string,
  meta?: Meta[],
  keywords?: string[],
  title?: string,
}

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const Seo = ({ description, lang, title }: SEOProps) => (
    <StaticQuery
      query={detailsQuery}
      render={(data: Data) => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          // @ts-ignore
          <Helmet
            htmlAttributes={{
              lang,
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
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
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
