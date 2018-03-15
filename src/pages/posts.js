import React from "react";
import PostLink from "../components/post-link";

const PostsPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div>
      <h2>Kaikki kirjoitukset</h2>
      {Posts}
    </div>);
};

export default PostsPage;

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "D.M.YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
