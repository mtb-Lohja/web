import React from "react";
import PostLinks from "../../components/post-links";

const Mtb24h2008Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>MTB-Lohja 24h 2008</h2>
    <PostLinks edges={edges} filter="/24h/2008" />
  </div>
);

export default Mtb24h2008Page;

export const pageQuery = graphql `
  query Mtb24h2008IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
