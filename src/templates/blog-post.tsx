import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { rhythm, scale } from '../utils/typography'

type BlogPostTemplateProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
      }
      excerpt: string
      html: string
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
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <Seo title={post.frontmatter.title} description={post.excerpt} />
        <h1
          style={{
            ...scale(0.75),
            lineHeight: rhythm(1.5),
            fontWeight: 600
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1 / 4),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div className='blog-post' dangerouslySetInnerHTML={{ __html: post.html }} />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
