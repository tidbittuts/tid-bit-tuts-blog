import React from 'react';
import PropTypes from 'prop-types';
import PostTags from '../components/PostTags/PostTags';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const blog = post.frontmatter;
  return (
    <div>
      <Helmet>
        <title>{`${blog.title}`}</title>
      </Helmet>
      <h1>{blog.title}</h1>
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
