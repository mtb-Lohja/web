import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Template({ data }) {
  // data.markdownRemark holds our post data
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location={window.location}>
      <div className="post-container">
        <Helmet title={`MTB-Lohja toy - ${frontmatter.title}`} />
        <article className="post">
          <header>
            <h2>{frontmatter.title}</h2>
            <p className="quiet author">
              <i>
                {frontmatter.author}, {frontmatter.date}
              </i>
            </p>
          </header>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
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
`
