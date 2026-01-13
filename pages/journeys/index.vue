<template>
  <div class="pt-16">
    <div class="section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Epic Journeys</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the incredible adventures and challenges faced during record-breaking 
            circumnavigation journeys across six continents.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="activeFilter = filter.value"
            class="px-6 py-2 rounded-full transition-colors duration-200"
            :class="activeFilter === filter.value 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Journeys Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JourneyCard 
            v-for="journey in filteredJourneys" 
            :key="journey.id"
            :journey="journey"
          />
        </div>

        <!-- Load More -->
        <div v-if="hasMore" class="text-center mt-12">
          <button 
            @click="loadMore"
            class="btn-primary"
            :disabled="loading"
          >
            <iconify-icon 
              v-if="loading" 
              icon="lucide:loader-2" 
              class="mr-2 animate-spin"
            ></iconify-icon>
            {{ loading ? 'Loading...' : 'Load More Journeys' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Journeys - Saloo & Neena Chowdhury Adventures',
  description: 'Explore the epic journeys and adventures of Saloo & Neena Chowdhury across six continents during their record-breaking circumnavigation attempts.',
  ogTitle: 'Journeys - Saloo & Neena Chowdhury Adventures'
})

const activeFilter = ref('all')
const loading = ref(false)
const displayCount = ref(6)

const filters = [
  { label: 'All Journeys', value: 'all' },
  { label: 'Record Attempts', value: 'record' },
  { label: 'Continental', value: 'continental' },
  { label: 'Challenges', value: 'challenges' }
]

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

const filteredJourneys = computed(() => {
  let filtered = allJourneys
  
  if (activeFilter.value !== 'all') {
    filtered = allJourneys.filter(journey => journey.category === activeFilter.value)
  }
  
  return filtered.slice(0, displayCount.value)
})

const hasMore = computed(() => {
  const totalFiltered = activeFilter.value === 'all' 
    ? allJourneys.length 
    : allJourneys.filter(journey => journey.category === activeFilter.value).length
  
  return displayCount.value < totalFiltered
})

const loadMore = () => {
  loading.value = true
  setTimeout(() => {
    displayCount.value += 3
    loading.value = false
  }, 500)
}

// Reset display count when filter changes
watch(activeFilter, () => {
  displayCount.value = 6
})
</script>
