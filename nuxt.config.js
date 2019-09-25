const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Portfolio | Christian Martin",
    lang: 'en',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { 'og:site_name': pkg.description },
      { 'twitter:title': pkg.description },
      { 'application-name': pkg.description },
      { 'twitter:site': '@_ctmartin' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fork-awesome@1.1.5/css/fork-awesome.min.css', integrity: 'sha256-P64qV9gULPHiZTdrS1nM59toStkgjM0dsf5mK/UwBV4=', crossorigin: 'anonymous'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#167df0' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/html5boilerplate.css',
    'swiper/dist/css/swiper.css',
    '@/assets/css/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    //'bootstrap-vue/nuxt',
    ['nuxt-buefy', { materialDesignIcons: false }],
  ],

  /*
  ** CI generate configuration
  */
 generate: {
   dir: 'public'
 },

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
