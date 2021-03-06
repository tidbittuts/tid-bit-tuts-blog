import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import styled from '@emotion/styled'

import Layout from '../layouts/index'
import SEO from '../components/Seo/Seo'
import CategoriesNav from '../components/CategoriesNav/CategoriesNav'
import TagsNav from '../components/TagsNav/TagsNav'

const PostArticle = styled.article`
  h1 {
    color: red;
  }

  hr {
    margin-bottom: 1rem;
  }
`

const PostHeader = styled.header``
const PostBody = styled.div``

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

// const bannerImage = banner => {
//   if (banner !== null) {
//     return <Img fluid={banner.childImageSharp.fluid} />
//   }
//   return null
// }

const BlogPostTemplate = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.mdx
  const { author } = data.site.siteMetadata
  const { previous, next } = pageContext
  const { banner, categories, date, tags, title } = post.fields

  return (
    <Layout location={data.location} title={siteTitle}>
      <SEO title={title} description={post.excerpt} />
      <PostArticle>
        <PostHeader>
          <h1>{title}</h1>
          <div className="entry-meta">
            <span>{date}</span>
            <span>{author}</span>
            <TagsNav tags={tags} />
            <CategoriesNav categories={categories} />
          </div>
        </PostHeader>
        <PostBody>
          {banner && <Img fluid={banner.childImageSharp.fluid} />}
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </PostBody>
        <PostNavigation>
          <hr />
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
      </PostArticle>
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
        banner {
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 600) {
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
