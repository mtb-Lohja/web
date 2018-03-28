import React from "react";
import PostLinks from "../../components/post-links";

const Oktoberfest2008Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Oktoberfest 2008</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2008" />
  </div>
);

export default Oktoberfest2008Page;

export const pageQuery = graphql `
  query Oktoberfest2008IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
