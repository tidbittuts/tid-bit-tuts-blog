import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => (
  <div>
    <h1>TibBitty</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Build it and they will come...</p>

    {data.allMarkdownRemark.edges.map(post => (
      <div className="index-item" key={post.node.id}>
        <H2 />
        <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
        <p>{post.node.excerpt}</p>
        <p>{post.node.frontmatter.date}</p>
      </div>
    ))}
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          excerpt
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
