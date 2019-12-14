import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

const BioWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const AuthorLink = styled.a`
  font-size: 1.1rem;
  margin-bottom: .2em;
  display: block;
`

const DescriptionText = styled.p`
  font-size: 0.9rem;
  display: block;
  margin: 0;
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <BioWrapper>
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
            <div>
              <AuthorLink href='https://kentarom.com/'>
                {author}
              </AuthorLink>
              <DescriptionText>
                👨‍💻金沢のゲーム会社で働くフロントエンドエンジニア
              </DescriptionText>
              <DescriptionText>
                ❤️React, TypeScript, Clean Architecture and Micro Frontends.
              </DescriptionText>
            </div>
          </BioWrapper>
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
