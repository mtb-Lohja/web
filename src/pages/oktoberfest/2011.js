import React from "react";
import PostLinks from "../../components/post-links";

const Oktoberfest2011Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Oktoberfest 2011</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2011" />
  </div>
);

export default Oktoberfest2011Page;

export const pageQuery = graphql `
  query Oktoberfest2011IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
