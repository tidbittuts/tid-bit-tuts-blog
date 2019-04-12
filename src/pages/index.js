import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../layouts/index'
import SEO from '../components/Seo/Seo'
import MostRecentPost from '../components/MostRecentPost/MostRecentPost'

const AllTagsCatsNav = styled.nav`
  display: flex;

  a {
    padding-right: 0.5rem;
  }
`
const BlogExcerptWrapper = styled.article`
  h2 a {
    color: ${props => props.theme.colors.color_brand_1};
  }
`

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const { edges: posts } = data.allMdx

  return (
    <Layout location={data.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <h1>Index Page</h1>

      <AllTagsCatsNav>
        <Link to="/tags">Tags</Link>
        <Link to="/categories">Categories</Link>
      </AllTagsCatsNav>

      <MostRecentPost posts={posts} />

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

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [fields___date], order: DESC }, limit: 5) {
      edges {
        node {
          id
          excerpt
          fields {
            date(formatString: "MMMM DD, YYYY")
            postUrl
            title
            tags
            categories
          }
        }
      }
    }
  }
`
export default IndexPage
