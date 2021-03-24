import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Heading, Text, Box, Flex } from '@chakra-ui/react'

type BlogIndexProps = {
  data: {
    allMdx: {
      edges: {
        node: {
          slug: string
          id: string
          frontmatter: {
            title: string
            date: string
          }
        }
      }[]
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: Location
}

const BlogIndex: React.FC<BlogIndexProps> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={location} title={siteTitle}>
        <Seo/>
        <Box>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.slug
            return (
              <Box mb={10} key={node.slug}>
                <Heading color='purple.200' as='h2' size='md' lineHeight='base' mb={2}>
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </Heading>
                <Text>
                  {node.frontmatter.date}
                </Text>
              </Box>
            )
          })}
        </Box>
      </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
