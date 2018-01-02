import React from 'react';
import PropTypes from 'prop-types';
import PostTags from '../components/PostTags/PostTags';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const postData = data.markdownRemark;
  const post = postData.frontmatter;
  return (
    <div>
      <Helmet>
        <title>{`${post.title}`}</title>
      </Helmet>

      <h1>{post.title}</h1>

      <p>{`Time to read: ${postData.timeToRead} minutes`}</p>

      <div dangerouslySetInnerHTML={{ __html: postData.html }} />

      <div className="post-meta">
        <PostTags tags={post.tags} />
      </div>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        path
        title
        date
        tags
        category
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.object
};

{
  /* <SocialLinks postPath={slug} postNode={postNode} />; */
}
