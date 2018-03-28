import React from "react";
import PostLinks from "../../components/post-links";

const Oktoberfest2012Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Oktoberfest 2012</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2012" />
  </div>
);

export default Oktoberfest2012Page;

export const pageQuery = graphql `
  query Oktoberfest2012IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
