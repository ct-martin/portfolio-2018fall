import pkg from './package'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio | Christian Martin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { 'og:site_name': pkg.description },
      { 'twitter:title': pkg.description },
      { 'application-name': pkg.description },
      { 'twitter:site': '@_ctmartin' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css', integrity: 'sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,600,600i|Source+Code+Pro:300&display=swap' }
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
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-buefy', { materialDesignIcons: false }]
  ],

  /*
  ** CI generate configuration
  */
  build: {
    extractCSS: true,
    ssr: true
  },
  generate: {
    dir: 'public',
    fallback: true
  },

  /*
  ** TypeScript
  */
  buildModules: ['@nuxt/typescript-build']
}
