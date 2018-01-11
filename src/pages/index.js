import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => (
  <div className="index-post-listings">
    {data.allMarkdownRemark.edges.map(post => (
      <div className="index-item" key={post.node.id}>
        <Link to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
        <p>{post.node.excerpt}</p>
        <p>{post.node.frontmatter.date}</p>
      </div>
    ))}
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object
};
