import React from 'react'
import PostLinks from '../../components/post-links'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

const Mtb24h2011Page = ({
  location,
  data: { allMarkdownRemark: { edges } },
}) => (
  <Layout location={location}>
    <h2>MTB-Lohja 24h 2011</h2>
    <PostLinks edges={edges} filter="/24h/2011" />
  </Layout>
)

export default Mtb24h2011Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`
