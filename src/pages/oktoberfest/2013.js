import React from "react";
import PostLinks from "../../components/post-links";

const Oktoberfest2013Page = ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <h2>Oktoberfest 2013</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2013" />
  </div>
);

export default Oktoberfest2013Page;

export const pageQuery = graphql `
  query Oktoberfest2013IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`;
