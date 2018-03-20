import React from "react";
import PostLinks from "../../components/post-links";

const Mtb24h2006Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>MTB-Lohja 24h 2006</h2>
    <PostLinks edges={edges} filter="/24h/2006" />
  </div>
);

export default Mtb24h2006Page;

export const pageQuery = graphql `
  query Mtb24h2006IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
