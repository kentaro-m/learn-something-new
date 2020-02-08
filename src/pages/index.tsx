import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import styled from '@emotion/styled'

const BlogIndexWrapper = styled.div`
  margin-bottom: ${rhythm(0.8)};
`

const PostWrapper = styled.div``

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

type Post = {
  node: {
    frontmatter: {
      title: string
      date: string
    }
    fields: {
      slug: string
    }
  }
}

type BlogIndexProps = {
  data: {
    allMarkdownRemark: {
      edges: Post[]
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
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={location} title={siteTitle}>
        <Seo pageURL={location.href} />
        <BlogIndexWrapper>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <PostWrapper key={node.fields.slug}>
                <PostTitle>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </PostTitle>
                <small>{node.frontmatter.date}</small>
              </PostWrapper>
            )
          })}
        </BlogIndexWrapper>
        <div
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: rhythm(1.5),
            padding: '0',
            lineHeight: '1.0',
          }}
        >
          ...
        </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`
