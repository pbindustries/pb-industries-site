const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'PB Industries - Solutions', // Navigation and Site Title
  siteTitleAlt: 'PBI', // Alternative Site title for SEO
  siteUrl: 'https://pbiwebsolutions.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Let us fulfill your data/web needs',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@philipbankier', // Twitter Username
  ogSiteName: 'PBI', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
