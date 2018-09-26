import React from 'react'
import PostLinks from '../components/post-links'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const PostsPage = ({ location, data: { allMarkdownRemark: { edges } } }) => (
  <Layout location={location}>
    <h2>Kaikki kirjoitukset</h2>
    <PostLinks edges={edges} filter="/uutiset" />
  </Layout>
)

export default PostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`
