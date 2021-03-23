import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Flex, Box, Text, Link, Image, Wrap, WrapItem } from '@chakra-ui/react'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        const image = getImage(data.avatar)
        return (
          <Wrap spacing={6} justify='center'>
            <WrapItem>
              <Box>
            {image && <Image
                as={GatsbyImage}
                image={image}
                alt={author}
                borderRadius='50%'
              />}
              </Box>
            </WrapItem>
            <WrapItem>
              <Box>
                <Link
                  href='https://kentarom.com/'
                  fontSize='md'
                  lineHeight='tall'
                >
                  {author}
                </Link>
                <Text fontSize='sm' lineHeight='tall'>
                  👨‍💻 金沢のゲーム会社で働くWeb Developer
                </Text>
                <Text fontSize='sm' lineHeight='tall'>
                  ❤️ React, TypeScript and GraphQL
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
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
