import React from "react";
import Helmet from 'react-helmet'

export default function Template({ data }) {
  // data.markdownRemark holds our post data
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="post-container">
      <Helmet title={`MTB-Lohja toy - ${frontmatter.title}`} />  
      <article className="post">
        <header>
          <h1>{frontmatter.title}</h1>
          <p><i>{frontmatter.author}, {frontmatter.date}</i></p>
        </header>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}

export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
