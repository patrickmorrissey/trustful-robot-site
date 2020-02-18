/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  {
	  resolve: `gatsby-plugin-favicon`,
  	options: {
  		logo: './src/favicon.png',
  		appName: 'Trustful Robot',
  		appDescription: 'Trustful Robot Webite',
  		display: 'browser',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: false,
        windows: false
      }
  	}
  }
  ]
}
