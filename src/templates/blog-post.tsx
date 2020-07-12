import React from 'react'
import { graphql } from 'gatsby'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { rhythm, scale } from '../utils/typography'
import styled from '@emotion/styled'
import { syntaxHighlightStyle } from '../styles/syntax-highlight'
import { css } from '@emotion/core'
import { mq } from '../styles/media-queries'

const PostTitle = styled.h1`
  font-size: ${scale(0.5).fontSize};
  line-height: ${rhythm(1.3)};
  ${mq[0]} {
    font-size: ${scale(0.8).fontSize};
    line-height: ${rhythm(1.6)};
  }
  font-weight: 600;
`

const PostDate = styled.p`
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1 / 4)};
`

const PostWrapper = styled.article``

const postStyle = css`
  h2 {
    font-size: ${scale(0.4).fontSize};
    border: none;
    ${mq[0]} {
      font-size: ${scale(0.6).fontSize};
      line-height: ${rhythm(1.5)};
    }
  }

  h3 {
    font-size: ${scale(0.3).fontSize};
    border: none;
    ${mq[0]} {
      font-size: ${scale(0.4).fontSize};
      line-height: ${rhythm(1.5)};
    }
  }
`

// Fix a problem that p tag is inserted inside li tag.
const listStyle = css`
  ul {
    line-height: 1.9;
  }

  li > ul {
    margin-top: 0;
  }

  li > p {
    margin-bottom: 0;
  }
`

type BlogPostTemplateProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
      }
      fields: {
        slug: string
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
        <PostWrapper>
          <Seo title={post.frontmatter.title} description={post.excerpt} slug={post.fields.slug} />
          <PostTitle>
            {post.frontmatter.title}
          </PostTitle>
          <PostDate>
            {post.frontmatter.date}
          </PostDate>
          <div className='blog-post' css={[syntaxHighlightStyle, listStyle, postStyle]} dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostWrapper>
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
        date(formatString: "YYYY-MM-DD")
      }
      fields {
        slug
      }
    }
  }
`
