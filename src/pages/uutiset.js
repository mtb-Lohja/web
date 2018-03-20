import React from "react";
import PostLinks from "../components/post-links";

const PostsPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Kaikki kirjoitukset</h2>
    <PostLinks edges={edges} filter="/uutiset" />
  </div>
);

export default PostsPage;

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
