// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({

// })

// import { NuxtConfig } from '@nuxt/types'

// const config: NuxtConfig = {
//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     title: 'My Awesome App',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: 'My awesome app description' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//   ],

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [
//   ],

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [
//   ],

//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//   ],

//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {
//   },

//   // Server configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-server
//   server: {
//     port: process.env.PORT || 3000,
//     host: process.env.HOST || 'localhost'
//   }
// }

// export default config


serverMiddleware: [
  '~/api/index.js'
]