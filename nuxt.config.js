const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    lang: 'en',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fork-awesome@1.1.5/css/fork-awesome.min.css', integrity: 'sha256-P64qV9gULPHiZTdrS1nM59toStkgjM0dsf5mK/UwBV4=', crossorigin: 'anonymous'}
    ],
    scripts: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js', integrity: 'sha256-ji09tECORKvr8xB9iCl8DJ8iNMLriDchC1+p+yt1hSs=', crossorigin: 'anonymous' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/html5boilerplate.css',
    '@/assets/css/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
