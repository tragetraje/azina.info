module.exports = {
  siteMetadata: {
    title: `Zina Astafyeva, Software Developer`,
    email: `me@azina.info`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
