/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/postTemplate.js`);
  const frontPageTemplate = path.resolve(`src/templates/frontPageTemplate.js`);

  // Create all markdown-based pages
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    if (!result.data) {
      return;
    }

    // Map the first post as front page
    createPage({
      path: "/",
      component: frontPageTemplate,
      context: {
        post: result.data.allMarkdownRemark.edges[0].node.frontmatter.path
      }
    });

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};
