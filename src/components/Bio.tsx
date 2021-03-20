import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text, Link, Image } from '@chakra-ui/react'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Flex justifyContent='center'>
            <Box mr={[3, 6]}>
              <Image
                src={data.avatar.childImageSharp.fixed.src}
                srcSet={data.avatar.childImageSharp.fixed.srcSet}
                alt={author}
              />
            </Box>
            <Box>
              <Link href='https://kentarom.com/'>
                {author}
              </Link>
              <Text>
                👨‍💻 金沢のゲーム会社で働くフロントエンドエンジニア
              </Text>
              <Text>
                ❤️ React, TypeScript and Micro Frontends
              </Text>
            </Box>
          </Flex>
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
