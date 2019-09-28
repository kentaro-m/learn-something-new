import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              <a
                href='https://kentarom.com/'
                style={{
                  fontSize: '1.1rem',
                  marginBottom: '.2em',
                  display: 'block',
                }}
              >
                {author}
              </a>
              <p
                style={{
                  fontSize: '0.9rem',
                  display: 'block',
                  margin: '0'
                }}
              >
                👨‍💻金沢のゲーム会社で働くフロントエンドエンジニア
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  display: 'block',
                  margin: '0'
                }}
              >
                ❤️React, TypeScript, Clean Architecture and Micro Frontends.
              </p>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatar.jpeg/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
