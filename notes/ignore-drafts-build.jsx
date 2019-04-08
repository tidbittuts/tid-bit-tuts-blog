// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               title
//               date(formatString: "MMMM DD YYYY")
//               path
//               tags
//               excerpt
//               published
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     const allPosts = result.data.allMarkdownRemark.edges

//     const allowedPosts = allPosts.filter(
//       post =>
//         process.env.NODE_ENV === 'development' ||
//         post.node.frontmatter.published
//     )

//     allowedPosts.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//       })
//     })
//   })
// }
