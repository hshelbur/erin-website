module.exports = {
  siteMetadata: {
    title: 'Erin Turingan | creator, speaker, pharmacist',
    description: 'Blog of Erin Turingan',
    keywords: [`feminism`, `work life balance`],
    siteUrl: `https://erin-turingan.netlify.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4iyzqalje9l5`,
        accessToken: `1a5dbcb17cbe17983fead369d4846bed7a8ec725572a80fabc302cea4771560d`
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/tab-image.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato']
        }
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-134264062-1`,
        head: false,
        anonymize: true,
      },
    },
  ],
}
