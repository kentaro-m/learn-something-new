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

const Seo = ({ description, title, slug}: SEOProps) => (
    <StaticQuery
      query={detailsQuery}
      render={({ site }: Data) => {
        const metaDescription =
          description || site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang: site.siteMetadata.lang,
            }}
            title={title ? title : site.siteMetadata.title}
            titleTemplate={title ? `%s | ${site.siteMetadata.title}` : site.siteMetadata.title}
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
                content: slug ? site.siteMetadata.siteUrl + slug + 'thumbnail.png' : site.siteMetadata.siteUrl + '/thumbnail.png',
              },
              {
                property: `og:image:width`,
                content: `1200`,
              },
              {
                property: `og:image:height`,
                content: `630`,
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
                content: slug ? site.siteMetadata.siteUrl + slug + 'thumbnail.png' : site.siteMetadata.siteUrl + '/thumbnail.png',
              },
              {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
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
        siteUrl
      }
    }
  }
`
