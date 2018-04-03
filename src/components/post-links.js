import React from "react";
import Link from "gatsby-link";

export const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <h4>
        {post.frontmatter.title} ({post.frontmatter.date})
      </h4>
    </Link>
    <p>
      {post.excerpt}
    </p>
  </div>
);

const PostLinks = ({edges, filter}) =>
  <div>
    {edges
      .filter(edge => !!edge.node.frontmatter.date) 
      .filter(edge => edge.node.frontmatter.path.startsWith(filter))
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    }
  </div>

export default PostLinks;

export const postLinksQuery = graphql `
  fragment posts on MarkdownRemarkConnection {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "D.M.YYYY")
          path
          title
        }
      }
    }
  }
`;
