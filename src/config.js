const merge = require('lodash/merge')

let yourconfig

try {
  // eslint-disable-next-line
  yourconfig = require('./yourconfig.js')
} catch (e) {
  console.log('no config')
  // TODO default to a minimal config
}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
    yourconfig,
    image_base_url: '',
  },
  test: {
    apiUrl: 'http://localhost:10010',
    image_base_url: '',
    port: process.env.PORT || 5000,
  },
  development: {
    apiUrl: 'https://api.preproduction.panopli.co',
    image_base_url: '',
    port: process.env.PORT || 5000,
  },
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://api.production.panopli.co',
    image_base_url: '',
  },
}

module.exports = merge(config.all, config[config.all.env])
