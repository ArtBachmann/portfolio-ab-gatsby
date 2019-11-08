require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Portfolio+Resume",
    description: "Portfolio-resume Art Bachmann",
    author: {
      name: "Art Bachmann",
      age: 49,
      address: 'Vantaa'
    },
    data: ['element1', 'element2']
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "2q6axxrg40tm",
        accessToken: "lpfIypILfolvspUy0vlYV5q4Y0I7q65b-THhJVf6fbw"
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`
  ]
}
