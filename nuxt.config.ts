export default defineNuxtConfig({
  compatibilityDate: '2026-01-13',
  ssr: true,
  modules: [
    '@nuxt/content',
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
  
  // Font listed first so it's available when main.css applies font-family.
  // Kept separate from main.css so Vite processes it as a plain CSS asset
  // and doesn't run it through the @tailwindcss/postcss PostCSS pipeline,
  // which cannot resolve bare node_modules @import specifiers in dev HMR.
  css: [
    '@fontsource-variable/inter/index.css',
    '~/assets/css/main.css'
  ],
  
  app: {
    baseURL: '/', // Changed from '/saloo/' to '/'
    buildAssetsDir: 'assets',
    head: {
      title: 'Saloo & Neena Choudhury - World Record Circumnavigators',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders Saloo & Neena Choudhury from Kolkata.' 
        },
        { name: 'keywords', content: 'Saloo Choudhury, Neena Choudhury, Guinness World Record, circumnavigation, motor rally, adventure, Kolkata, Ambassador car, world record holders' },
        { name: 'author', content: 'Saloo & Neena Choudhury' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://salooneenachoudhury.com/images/gallery/og-image.jpg' },
        { property: 'og:site_name', content: 'Saloo & Neena Choudhury' },
        { name: 'twitter:creator', content: '@SalooNeena' },
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'google-site-verification', content: 'kD5mOhlG8OvFI2x1Ns2GIZLZIf4v7H-HYjxkCR28XkU' }
        
      ],
      link: [
        { rel: 'canonical', href: 'https://salooneenachoudhury.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Early connection hints for YouTube — every page that embeds ArchivalVideo
        // needs DNS + TCP + TLS to these origins before the first frame can load.
        // preconnect = full connection handshake (highest priority, use sparingly)
        // dns-prefetch = DNS only (lightweight, good for less-certain origins)
        { rel: 'preconnect', href: 'https://www.youtube.com' },
        { rel: 'dns-prefetch', href: 'https://i.ytimg.com' },
        { rel: 'dns-prefetch', href: 'https://www.google.com' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Saloo & Neena Choudhury",
            "url": "https://salooneenachoudhury.com",
            "description": "First and fastest circumnavigators of the globe by car",
            "alternativeHeadline": "Guinness World Record Holders from Kolkata, India",
            "about": {
              "@type": "Person",
              "name": "Saloo Choudhury",
              "alternateName": "Neena Choudhury",
              "description": "World Record Holders - First and fastest circumnavigators of the globe by car",
              "url": "https://salooneenachoudhury.com",
              "sameAs": [
                "https://www.guinnessworldrecords.com"
              ],
              "knowsAbout": [
                "Motor Rally",
                "Circumnavigation",
                "World Records",
                "Adventure Travel",
                "Guinness World Records"
              ],
              "award": [
                "Guinness World Record - First Circumnavigation by Car (1989)",
                "Guinness World Record - Fastest Circumnavigation by Car (1991)"
              ],
              "birthPlace": {
                "@type": "Place",
                "name": "Kolkata, India"
              }
            }
          })
        }
      ]
    }
  },

  content: {
    highlight: {
      theme: 'github-dark'
    },
    // Use Node.js built-in sqlite (Node 22.5+) — no native module compile needed
    experimental: {
      nativeSqlite: true
    }
  },

  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: [
        '/', '/about', '/timeline', '/journeys', '/achievements', '/gallery', '/blog', '/contact', '/sitemap.xml',
        '/journeys/1', '/journeys/2', '/journeys/3', '/journeys/4', '/journeys/5', '/journeys/6',
        '/blog/first-journey-1989', '/blog/breaking-army-record', '/blog/australia-wild-encounters',
        '/blog/guinness-world-record-story', '/blog/partnership-that-conquered-world',
        '/blog/beating-british-army-record', '/blog/six-continents-countless-memories',
        '/blog/car-that-conquered-world', '/blog/fighting-for-recognition-guinness-battle'
      ],
      crawlLinks: true,
    }
  },
  
  experimental: {
    payloadExtraction: false
  }
})
