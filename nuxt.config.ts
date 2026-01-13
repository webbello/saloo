export default defineNuxtConfig({
  compatibilityDate: '2026-01-13',
  
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'iconify-icon'
    }
  },
  
  vite: {
    css: {
      postcss: {
        plugins: [
          require('@tailwindcss/postcss')
        ]
      }
    }
  },
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders Saloo & Neena Chowdhury from Kolkata.' 
        },
        { name: 'keywords', content: 'Saloo Chowdhury, Neena Chowdhury, Guinness World Record, circumnavigation, motor rally, adventure, Kolkata' }
      ],
      script: [
        {
          src: 'https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js',
          defer: true
        }
      ]
    }
  },

  content: {
    highlight: {
      theme: 'github-dark'
    }
  },

  image: {
    quality: 80,
    format: ['webp', 'jpg']
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
