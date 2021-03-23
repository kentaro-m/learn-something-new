import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Flex, Box, Text, Link, Image } from '@chakra-ui/react'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        const image = getImage(data.avatar)
        return (
          <Flex justifyContent='center'>
            <Box mr={[3, 6]}>
              {image && <Image
                as={GatsbyImage}
                image={image}
                alt={author}
                borderRadius='50%'
              />}
            </Box>
            <Box>
              <Link href='https://kentarom.com/'>
                {author}
              </Link>
              <Text>
                👨‍💻 金沢のゲーム会社で働くフロントエンドエンジニア
              </Text>
              <Text>
                ❤️ React, TypeScript and GraphQL
              </Text>
            </Box>
          </Flex>
        );
      }}
    />
  );
}

const bioQuery = graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/avatar.jpeg/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 100
        height: 100
        layout: FIXED
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
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
