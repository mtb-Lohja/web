import React from 'react'
import PostLinks from '../../components/post-links'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

const Oktoberfest2006Page = ({
  location,
  data: { allMarkdownRemark: { edges } },
}) => (
  <Layout location={location}>
    <h2>Oktoberfest 2006</h2>
    <PostLinks edges={edges} filter="/oktoberfest/2006" />
  </Layout>
)

export default Oktoberfest2006Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      ...posts
    }
  }
`
