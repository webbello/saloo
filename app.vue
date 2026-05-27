<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const siteUrl = 'https://salooneenachoudhury.com'

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Saloo & Neena Choudhury',
        url: siteUrl,
        description: 'First and fastest circumnavigators of the globe by car. Guinness World Record holders from Kolkata, India.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/blog?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Saloo & Neena Choudhury',
        url: siteUrl,
        description: 'Guinness World Record Holders - First and fastest circumnavigators of the globe by car',
        foundingDate: '1989',
        founder: [
          { '@type': 'Person', name: 'Saloo Choudhury' },
          { '@type': 'Person', name: 'Neena Choudhury' }
        ],
        location: { '@type': 'Place', name: 'Kolkata, India' }
      })
    }
  ]
})
</script>
