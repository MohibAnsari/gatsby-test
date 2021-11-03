module.exports = {
  siteMetadata: {
    title: `Gatsby Test`,
    description: `Gatsby Sample Test`,
    author: { name: `Salman`, email: "salman.saeed@rocketmail.com" },
    siteUrl: `https://yourdomain.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
  ],
};
