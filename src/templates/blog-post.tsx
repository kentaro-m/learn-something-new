import React from 'react'
import { graphql } from 'gatsby'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Flex, Text, Heading, Box } from '@chakra-ui/react'

const Divider = styled.div`
  &::before {
    content: '...';
    font-size: 64px;
    position: relative;
    top: -53px;
  }
`

type BlogPostTemplateProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
      }
      body: any
      slug: string
      excerpt: string
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: Location
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data, location }) => {
    const post = data.mdx
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <Flex height='32px' justifyContent='center' mt={8} mb={8}>
          <Divider />
        </Flex>
        <Box>
          <Seo title={post.frontmatter.title} description={post.excerpt} slug={post.slug} />
          <Box as='article'>
            <Heading as='h1'>
              {post.frontmatter.title}
            </Heading>
            <Text>
              {post.frontmatter.date}
            </Text>
          </Box>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Box>
        <Flex height='32px' justifyContent='center' mt={4} mb={10}>
          <Divider />
        </Flex>
        <Bio />
      </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(slug: {eq: $slug}) {
      id
      excerpt(pruneLength: 160)
      body
      slug
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
