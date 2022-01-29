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
      social: {
        twitter: string
      }
      facebookAppId: string
    }
  }
}

const Seo = ({ description, title, slug}: SEOProps) => (
    <StaticQuery<GatsbyTypes.DefaultSEOQueryQuery>
      query={detailsQuery}
      render={({ site }: Data) => {
        const metaDescription =
          description || site.siteMetadata.description
        const pageUrl = slug ? site.siteMetadata.siteUrl + slug : site.siteMetadata.siteUrl + '/'
        const thumbnailUrl = title ?
          `https://res.cloudinary.com/kentarom/image/upload/c_fit,l_text:eig1clffyunvyzqioqdr.otf_64:${encodeURIComponent(title)},co_rgb:D6BCFA,w_1000,y_-100,w_1000/v1616667308/Frame_12_pvvs3k.png` :
          `https://res.cloudinary.com/kentarom/image/upload/c_fit,l_text:eig1clffyunvyzqioqdr.otf_64:${encodeURIComponent(site.siteMetadata.title)},co_rgb:D6BCFA,w_1000,y_-100,w_1000/v1616667308/Frame_12_pvvs3k.png`
        return (
          <Helmet
            htmlAttributes={{
              lang: site.siteMetadata.lang,
            }}
            title={title ? title : site.siteMetadata.title}
            titleTemplate={title ? `%s | ${site.siteMetadata.title}` : site.siteMetadata.title}
            link={[
              {
                rel: 'canonical',
                key: pageUrl,
                href: pageUrl,    
              },
              {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
              },
              {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossOrigin: 'anonymous'
              },
              {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400;700&display=swap',
              }
            ]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `og:url`,
                content: pageUrl,
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
                content: thumbnailUrl,
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
                property: `fb:app_id`,
                content: site.siteMetadata.facebookAppId,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:image`,
                content: thumbnailUrl,
              },
              {
                name: `twitter:creator`,
                content: `@${site.siteMetadata.social.twitter}`,
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
        social {
          twitter
        }
        facebookAppId
      }
    }
  }
`
