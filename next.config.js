const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['localhost', '127.0.0.1', 'iharsh3289.netflify.app'],
  },
}