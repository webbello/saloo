<template>
  <div class="pt-16">
    <div class="section-padding">
      <div class="container-max">
        <div v-if="journey" class="max-w-4xl mx-auto">
          <!-- Back Button -->
          <NuxtLink to="/journeys" class="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <iconify-icon icon="lucide:arrow-left" class="mr-2"></iconify-icon>
            Back to Journeys
          </NuxtLink>

          <!-- Journey Header -->
          <div class="mb-12">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ journey.title }}</h1>
            <p class="text-xl text-gray-600 mb-6">{{ journey.description }}</p>
            
            <!-- Journey Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-900 mb-2">Duration</h3>
                <p class="text-blue-600">{{ journey.duration }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-900 mb-2">Distance</h3>
                <p class="text-blue-600">{{ journey.distance }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-900 mb-2">Continents</h3>
                <p class="text-blue-600">{{ journey.continents.length }}</p>
              </div>
            </div>
          </div>

          <!-- Journey Image -->
          <div class="mb-12">
            <img 
              :src="journey.image" 
              :alt="journey.title"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <!-- Highlights -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Journey Highlights</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="highlight in journey.highlights" 
                :key="highlight"
                class="flex items-center p-4 bg-blue-50 rounded-lg"
              >
                <iconify-icon icon="lucide:check-circle" class="text-blue-600 mr-3"></iconify-icon>
                <span>{{ highlight }}</span>
              </div>
            </div>
          </div>

          <!-- Continents Covered -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Continents Covered</h2>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="continent in journey.continents" 
                :key="continent"
                class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full"
              >
                {{ continent }}
              </span>
            </div>
          </div>
        </div>

        <!-- Journey Not Found -->
        <div v-else class="text-center py-16">
          <h1 class="text-3xl font-bold mb-4">Journey Not Found</h1>
          <p class="text-gray-600 mb-8">The journey you're looking for doesn't exist.</p>
          <NuxtLink to="/journeys" class="btn-primary">
            View All Journeys
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const journeyId = parseInt(route.params.id)

// Journey data (same as in index.vue)
const allJourneys = [
  {
    id: 1,
    title: 'First Circumnavigation (1989)',
    description: 'The historic first journey that established them as the first circumnavigators of the globe by car.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
    duration: '69 days, 19 hours, 5 minutes',
    distance: '45,000 km',
    category: 'record',
    continents: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia'],
    highlights: ['First ever circumnavigation by car', 'Six continents covered', 'Guinness World Record']
  },
  {
    id: 2,
    title: 'Record Breaking Journey (1991)',
    description: 'The journey that broke the British Army record and secured their place in history forever.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    duration: '39 days, 20 hours, 15 minutes',
    distance: '40,535 km',
    category: 'record',
    continents: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia'],
    highlights: ['Beat British Army record', 'Fastest circumnavigation', '3 hours 45 minutes faster']
  },
  {
    id: 3,
    title: 'Australian Adventure',
    description: 'Facing wild horses and challenging terrain across the vast Australian continent.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    duration: '7 days',
    distance: '8,500 km',
    category: 'continental',
    continents: ['Australia'],
    highlights: ['Wild horses encounter', 'Outback challenges', 'Extreme weather conditions']
  },
  {
    id: 4,
    title: 'European Circuit',
    description: 'Navigating through diverse European countries with varying road conditions and regulations.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
    duration: '12 days',
    distance: '15,200 km',
    category: 'continental',
    continents: ['Europe'],
    highlights: ['Multiple country borders', 'Diverse terrains', 'Cultural challenges']
  },
  {
    id: 5,
    title: 'North American Crossing',
    description: 'Coast to coast journey across North America facing extreme weather and vast distances.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    duration: '8 days',
    distance: '12,000 km',
    category: 'continental',
    continents: ['North America'],
    highlights: ['Coast to coast', 'Extreme weather', 'Highway challenges']
  },
  {
    id: 6,
    title: 'Customs and Visa Challenges',
    description: 'The bureaucratic hurdles and delays that made their achievement even more remarkable.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
    duration: 'Throughout journey',
    distance: 'All routes',
    category: 'challenges',
    continents: ['Global'],
    highlights: ['Passport delays', 'Customs inspections', 'Airport bureaucracy']
  }
]

const journey = computed(() => {
  return allJourneys.find(j => j.id === journeyId)
})

// SEO
useSeoMeta({
  title: journey.value ? `${journey.value.title} - Saloo & Neena Chowdhury` : 'Journey Not Found',
  description: journey.value?.description || 'Journey details not found'
})
</script>
