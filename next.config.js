const withPWA = require('next-pwa')

module.exports = withPWA({
  // other next config
  target: 'serverless',
  pwa:{
      dest:'public'
  }
})