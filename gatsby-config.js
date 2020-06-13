module.exports = {
  siteMetadata: {
    title: `COVID-19 Data`,
    description: `COVID-19 Data App built with Gatsby`,
    author: `@sozonome`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins:[
          require("tailwindcss"),
          require("autoprefixer")
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `COVID-19 Data`,
        short_name: `COVID-19 Data`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/v-19.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options:{
        printRejected: false,
        develop: false,
        tailwind: true
      }
    }
  ],
}
