import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Bio from '../components/Bio'
import { Heading, Text, Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Divider = styled.div`
  &::before {
    content: '...';
    font-size: 64px;
    position: relative;
    top: -53px;
  }
`

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
        <Flex height='32px' justifyContent='center' mt={8} mb={8}>
          <Divider />
        </Flex>
        <Box>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.slug
            return (
              <Box mb={10} key={node.slug}>
                <Heading color='teal.300' as='h2' size='md' lineHeight='base' mb={2}>
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
        <Flex height='32px' justifyContent='center' mt={4} mb={10}>
          <Divider />
        </Flex>
        <Bio/>
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
