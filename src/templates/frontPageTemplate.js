import React from "react";
import Helmet from 'react-helmet'

export default function FrontPageTemplate({ data }) {
  // data.markdownRemark holds our post data
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="post-container">
      <Helmet title={`MTB-Lohja toy - ${frontmatter.title}`} />  
      <article className="post">
        <h1 style={{ marginBottom: "5px" }}>{frontmatter.title}</h1>
        <p><i>{frontmatter.author}, {frontmatter.date}</i></p>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}

export const pageQuery = graphql `
  query FrontPageBlogPostByPath($post: String!) {
    markdownRemark(frontmatter: { path: { eq: $post } }) {
      html
      frontmatter {
        date(formatString: "D.M.YYYY")
        path
        title
        author
      }
    }
  }
`;
