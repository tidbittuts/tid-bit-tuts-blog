import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'gatsby-plugin-react-helmet';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  // const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.object
};
