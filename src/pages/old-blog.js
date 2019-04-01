import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

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
    color: ${props => props.theme.color_brand_1};
  }
`

const BlogPage = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const { edges: posts } = data.allMdx

  return (
    <Layout location={data.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

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

export const BlogListing = graphql`
  query BlogListing($draftBlacklist: [Boolean!]!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fields: { published: { nin: $draftBlacklist } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          fields {
            title
            date(formatString: "MMMM DD, YYYY")
            postUrl
            published
          }
        }
      }
    }
  }
`
export default BlogPage
