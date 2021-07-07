import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  mode: 'spa',
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Nuxt Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/image/icon.png' },
      // {
      //   href:
      //     'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      //   rel: 'stylesheet'
      // },
      {
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
      // {
      //   href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
      //   rel: 'stylesheet'
      // }
    ],
    script: [
      {
        src: '/js/GlobalHelper.js'
      }
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      // },
      // {
      //   src:
      //     'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
      // }
    ]
  },
  /*
   **
   */
  loading: {
    color: '#fff' // Customize the progress-bar color
  },
  css: [
    '@/assets/css/global/index.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    '~/plugins/element-ui.js'
  ],
  buildModules: [
    '@nuxtjs/eslint-module', // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios', // https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv', // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/auth'
    // '@nuxtjs/vuetify'
  ],
  axios: {
    // https://axios.nuxtjs.org/options
    baseURL: process.env.BASE_URL || 'http://localhost:3000/'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'signin-admin', method: 'post', propertyName: 'token' },
          user: { url: 'me', method: 'get', propertyName: '' },
          logout: false
        }
      }
    }
  },
  vuetify: {
    // https://github.com/nuxt-community/vuetify-module
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      default: 'light',
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c'
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  router: {
    // middleware: ['authenticated', 'authorized']
    // linkActiveClass: 'active'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
