import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Heading, Text, Box, Flex } from '@chakra-ui/react'

const BlogIndex: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({ data, location }) => {
    const siteTitle = data.site?.siteMetadata?.title
    const posts = data.allMdx.edges

    return (
      <Layout location={location} title={siteTitle || ''}>
        <Seo/>
        <Box>
          {posts.map(({ node }) => {
            const title = node.frontmatter?.title || node.slug
            return (
              <Link style={{boxShadow: `none`}} to={node.slug || '#'}>
                <Flex _hover={{opacity: '0.9'}} height={175} bg='gray.700' ml={[5, 0]} mr={[5, 0]}  mb={[5, 10]} alignItems='center' justifyContent='left' borderRadius={7}>
                <Box key={node.slug} p={8}>
                  <Heading as='h2' fontSize='xl' lineHeight='base' mb={2}>
                    {title}
                  </Heading>
                  <Text>
                    {node.frontmatter?.date}
                  </Text>
                </Box>
                </Flex>
              </Link>
            )
          })}
        </Box>
      </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
      edges {
        node {
          slug
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          id
        }
      }
    }
  }
`
