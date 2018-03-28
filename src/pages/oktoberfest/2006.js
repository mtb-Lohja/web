import React from "react";
import PostLinks from "../../components/post-links";

const Oktoberfest2006Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Oktoberfest 2006</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2006" />
  </div>
);

export default Oktoberfest2006Page;

export const pageQuery = graphql `
  query Oktoberfest2006IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
