import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

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
        <Seo />
        <div style={{
          marginBottom: rhythm(0.8),
        }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </div>
            )
          })}
        </div>
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
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
