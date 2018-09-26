import React from 'react'
import PostLinks from '../../components/post-links'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

const Oktoberfest2007Page = ({
  location,
  data: { allMarkdownRemark: { edges } },
}) => (
  <Layout location={location}>
    <h2>Oktoberfest 2007</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2007" />
  </Layout>
)

export default Oktoberfest2007Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`
