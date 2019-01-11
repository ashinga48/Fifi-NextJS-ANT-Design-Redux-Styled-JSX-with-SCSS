const withSass = require('@zeit/next-sass')
// const withLess = require('@zeit/next-less')
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS()
// module.exports = withLess()
module.exports = withSass({
  cssModules: true
})
