import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Text, Heading, Box } from '@chakra-ui/react'

const BlogPostTemplate: React.FC<PageProps<GatsbyTypes.PostPageQuery>> = ({ data, location }) => {
    const post = data.mdx
    const siteTitle = data.site?.siteMetadata?.title

    return (
      <Layout location={location} title={siteTitle || ''}>
        <Box
          sx={{
            ':not(li) > ul': {
              mb: 8
            },
            ':not(li) > ol': {
              mb: 8
            },
            '.mdx-embed': {
              mb: 8
            },
            '.slide-embed': {
              mb: 8
            },
          }}
        >
          <Seo title={post?.frontmatter?.title} description={post?.excerpt} slug={post?.slug} />
          <Box as='article'>
            <Heading as='h1' textAlign='center' fontSize='2xl' lineHeight='base' mb={4} ml={[7, 10]} mr={[7, 10]}>
              {post?.frontmatter?.title}
            </Heading>
            <Text textAlign='center' mb={8} ml={[7, 10]} mr={[7, 10]}>
              {post?.frontmatter?.date}
            </Text>
          </Box>
          <Box bg='gray.700' p={[7, 10]} borderRadius={[0, 7]} __css={{
            '> ul': {
              mb: 8,
            },
            '> ol': {
              mb: 8,
              ml: 6,
            }
          }}>
            <MDXRenderer>{data?.mdx?.body || 'fallback'}</MDXRenderer>
          </Box>
        </Box>
      </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostPage($slug: String!) {
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
