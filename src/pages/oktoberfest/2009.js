import React from "react";
import PostLinks from "../../components/post-links";

const Oktoberfest2009Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Oktoberfest 2009</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2009" />
  </div>
);

export default Oktoberfest2009Page;

export const pageQuery = graphql `
  query Oktoberfest2009IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
