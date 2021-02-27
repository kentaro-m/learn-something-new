import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { rhythm, scale } from '../utils/typography'
import { mq } from '../styles/media-queries'
import { css } from '@emotion/react'

const BioWrapper = styled.div`
  display: block;
  ${mq[0]} {
    display: flex;
    justify-content: center;
  }
`

const AuthorLink = styled.a`
  font-size: ${scale(0.1).fontSize};
  margin-bottom: .2em;
  display: block;
  ${mq[0]} {
    font-size: ${scale(0.1).fontSize};
  }
`

const DescriptionText = styled.p`
  font-size: ${scale(-0.1).fontSize};
  display: block;
  margin: 0;
  ${mq[0]} {
    font-size: ${scale(-0.1).fontSize};
  }
`

const imageWrapperStyle = css`
  display: block !important;
  margin: 0 auto;
  margin-bottom: 20px;
  ${mq[0]} {
    margin 0;
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 0;
    min-width: 50;
    border-radius: 100%;
  }
`

const imageStyle = css`
  border-radius: 50%;
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
              css={[imageWrapperStyle, imageStyle]}
            />
            <div>
              <AuthorLink href='https://kentarom.com/'>
                {author}
              </AuthorLink>
              <DescriptionText>
                👨‍💻 金沢のゲーム会社で働くフロントエンドエンジニア
              </DescriptionText>
              <DescriptionText>
                ❤️ React, TypeScript and Micro Frontends
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
        fixed(width: 100, height: 100) {
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
