import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import styled from 'styled-components'

import Layout from '../layouts/index'
import SEO from '../components/Seo/Seo'

const BlogPostArticle = styled.article`
  h1 {
    color: red;
  }

  hr {
    margin-bottom: 1rem;
  }
`

const PostNavigation = styled.nav`
  h2 {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`

const BlogPostTemplate = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.mdx
  const { author } = data.site.siteMetadata
  const { previous, next } = pageContext

  return (
    <Layout location={data.location} title={siteTitle}>
      <SEO title={post.fields.title} description={post.excerpt} />
      <BlogPostArticle>
        <header>
          <h1>{post.fields.title}</h1>
          <div className="entry-meta">
            <small>{post.fields.date}</small>
            <small>{author}</small>
            <small>{post.fields.tags}</small>
            <small>{post.fields.categories}</small>
          </div>
        </header>
        <Img fluid={post.frontmatter.banner.childImageSharp.fluid} />
        <div className="entry-content">
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </div>
        <hr />
        <PostNavigation>
          <h2>Post Navigation</h2>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.postUrl} rel="prev">
                  ← {previous.fields.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.postUrl} rel="next">
                  {next.fields.title} →
                </Link>
              )}
            </li>
          </ul>
        </PostNavigation>
      </BlogPostArticle>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      fields {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        categories
        postUrl
      }
      frontmatter {
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`
export default BlogPostTemplate
