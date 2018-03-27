import React from "react";
import PostLinks from "../../components/post-links";

const Mtb24h2009Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>MTB-Lohja 24h 2010</h2>
    <PostLinks edges={edges} filter="/24h/2010" />
  </div>
);

export default Mtb24h2010Page;

export const pageQuery = graphql `
  query Mtb24h2010IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
