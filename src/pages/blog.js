import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../layouts/index'
import SEO from '../components/Seo/Seo'

const AllTagsCatsNav = styled.nav`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    padding: 0.5rem;
  }
`
const BlogExcerptWrapper = styled.article`
  h2 a {
    color: ${props => props.theme.colors.color_brand_1};
  }
`

const BlogPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const { edges: posts } = data.allMdx

  return (
    <Layout location={data.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <h1>Blog Page</h1>

      <AllTagsCatsNav>
        <ul>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </AllTagsCatsNav>

      {posts.map(({ node }) => {
        const { title } = node.fields
        return (
          <BlogExcerptWrapper key={node.id}>
            <header>
              <h2>
                <Link to={node.fields.postUrl}>{title}</Link>
              </h2>
            </header>
            <div className="entry-meta">
              <small>{node.fields.date}</small>
            </div>
            <div className="entry-content">
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          </BlogExcerptWrapper>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            date(formatString: "MMMM DD, YYYY")
            postUrl
            title
          }
        }
      }
    }
  }
`
export default BlogPage
