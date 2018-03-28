import React from "react";
import PostLinks from "../../components/post-links";

const Oktoberfest2007Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Oktoberfest 2007</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2007" />
  </div>
);

export default Oktoberfest2007Page;

export const pageQuery = graphql `
  query Oktoberfest2007IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
