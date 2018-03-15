module.exports = {
  siteMetadata: {
    title: 'MTB-Lohja',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages",
      }
    },
    'gatsby-transformer-remark'
  ]
};