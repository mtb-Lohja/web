import React from "react";
import PostLinks from "../../components/post-links";

const Viikkolenkit2007Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Viikkoajoraportit 2007</h2>
    <PostLinks edges={edges} filter="/viikkoajot/2007" />
  </div>
);

export default Viikkolenkit2007Page;

export const pageQuery = graphql `
  query Viikkolenkit2007IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
