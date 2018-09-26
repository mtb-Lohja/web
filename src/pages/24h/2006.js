import React from 'react'
import PostLinks from '../../components/post-links'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

const Mtb24h2006Page = ({
  location,
  data: { allMarkdownRemark: { edges } },
}) => (
  <Layout location={location}>
    <h2>MTB-Lohja 24h 2006</h2>
    <PostLinks edges={edges} filter="/24h/2006" />
  </Layout>
)

export default Mtb24h2006Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`
