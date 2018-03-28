import React from "react";
import PostLinks from "../../components/post-links";

const Oktoberfest2010Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Oktoberfest 2010</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2010" />
  </div>
);

export default Oktoberfest2010Page;

export const pageQuery = graphql `
  query Oktoberfest2010IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
