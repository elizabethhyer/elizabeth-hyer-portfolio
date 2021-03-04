/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Elizabeth Hyer",
    author: "Elizabeth Hyer",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inconsolata\:300,400,500,700`,
          `source sans pro\:300,400,500,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
  ],
}
