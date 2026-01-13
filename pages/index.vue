<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      <!-- Animated Ambassador Car SVG -->
      <div class="absolute inset-0 opacity-20">
        <AmbassadorCarAnimation />
      </div>
      
      <!-- Globe Animation Background -->
      <div class="absolute inset-0 opacity-10">
        <GlobeAnimation />
      </div>
      
      <div class="container-max text-center z-10">
        <div class="animate-fade-in">
          <!-- Rally Badge -->
          <div class="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <iconify-icon icon="lucide:car" class="text-blue-600 mr-2"></iconify-icon>
            <span class="text-sm font-semibold text-gray-700">World Record Motor Rally Champions</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="text-gradient">Saloo & Neena Chowdhury</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            First and fastest circumnavigators of the globe by car
          </p>
          <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Covering six continents in their trusted Hindustan Ambassador • Guinness World Record holders from Kolkata, India
          </p>
          
          <!-- Key Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div class="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div class="text-2xl font-bold text-blue-600">39 Days</div>
              <div class="text-sm text-gray-600">20 hours, 15 minutes</div>
              <div class="text-xs text-gray-500">Fastest Record (1991)</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div class="text-2xl font-bold text-blue-600">6 Continents</div>
              <div class="text-sm text-gray-600">40,535 km covered</div>
              <div class="text-xs text-gray-500">Complete circumnavigation</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div class="text-2xl font-bold text-blue-600">First Ever</div>
              <div class="text-sm text-gray-600">By car (1989)</div>
              <div class="text-xs text-gray-500">Guinness World Record</div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/journeys" class="btn-primary">
              <iconify-icon icon="lucide:map" class="mr-2"></iconify-icon>
              Explore Journeys
            </NuxtLink>
            <NuxtLink to="/about" class="btn-secondary">
              <iconify-icon icon="lucide:users" class="mr-2"></iconify-icon>
              About Us
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <iconify-icon icon="lucide:chevron-down" class="text-2xl text-gray-400"></iconify-icon>
      </div>
    </section>

    <!-- Ambassador Car Heritage Section -->
    <section class="section-padding bg-gradient-to-r from-gray-50 to-blue-50">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">The Legendary Ambassador</h2>
            <p class="text-lg text-gray-600 mb-6">
              Our trusted companion for both world record journeys was the iconic Hindustan Ambassador - 
              a car that became synonymous with Indian motor rallying excellence.
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <iconify-icon icon="lucide:check-circle" class="text-green-600 mt-1 mr-3"></iconify-icon>
                <div>
                  <h4 class="font-semibold">Reliability Champion</h4>
                  <p class="text-gray-600">Withstood extreme conditions across six continents</p>
                </div>
              </div>
              <div class="flex items-start">
                <iconify-icon icon="lucide:check-circle" class="text-green-600 mt-1 mr-3"></iconify-icon>
                <div>
                  <h4 class="font-semibold">Indian Engineering</h4>
                  <p class="text-gray-600">Proved Indian automotive excellence on the world stage</p>
                </div>
              </div>
              <div class="flex items-start">
                <iconify-icon icon="lucide:check-circle" class="text-green-600 mt-1 mr-3"></iconify-icon>
                <div>
                  <h4 class="font-semibold">Rally Heritage</h4>
                  <p class="text-gray-600">The car that made circumnavigation history</p>
                </div>
              </div>
            </div>
            <NuxtLink to="/blog/car-that-conquered-world" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-6">
              Read the Ambassador Story
              <iconify-icon icon="lucide:arrow-right" class="ml-2"></iconify-icon>
            </NuxtLink>
          </div>
          <div class="relative">
            <AmbassadorCarShowcase />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Achievements -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">World Records & Achievements</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Recognized by Guinness World Records for extraordinary achievements in motor rallying and circumnavigation.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <iconify-icon icon="lucide:trophy" class="text-2xl text-white"></iconify-icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">First Circumnavigators</h3>
            <p class="text-gray-600">First people to circumnavigate the globe by car covering six continents (1989)</p>
            <div class="mt-4 text-sm text-blue-600 font-medium">69 days, 19 hours, 5 minutes</div>
          </div>
          
          <div class="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <iconify-icon icon="lucide:zap" class="text-2xl text-white"></iconify-icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fastest Record</h3>
            <p class="text-gray-600">Beat the British Army record by 3 hours 45 minutes (1991)</p>
            <div class="mt-4 text-sm text-purple-600 font-medium">39 days, 20 hours, 15 minutes</div>
          </div>
          
          <div class="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <iconify-icon icon="lucide:car" class="text-2xl text-white"></iconify-icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">Ambassador Legacy</h3>
            <p class="text-gray-600">Hindustan Ambassador proved Indian automotive excellence globally</p>
            <div class="mt-4 text-sm text-green-600 font-medium">40,535 KM covered</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Journeys -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Journeys</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Explore the incredible adventures and challenges faced during their world record journeys.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JourneyCard 
            v-for="journey in featuredJourneys" 
            :key="journey.id"
            :journey="journey"
          />
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/journeys" class="btn-primary">
            View All Journeys
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
  description: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders from Kolkata, India.',
  ogTitle: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
  ogDescription: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders from Kolkata, India.',
  ogImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=630&fit=crop',
  ogUrl: 'https://saloo-neena.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
  twitterDescription: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders from Kolkata, India.',
  twitterImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=630&fit=crop'
})

const featuredJourneys = [
  {
    id: 1,
    title: 'First Circumnavigation (1989)',
    description: 'The historic first journey that established them as the first circumnavigators.',
    image: '/images/journey-1989.jpg',
    duration: '69 days, 19 hours, 5 minutes',
    distance: '45,000 km'
  },
  {
    id: 2,
    title: 'Record Breaking Journey (1991)',
    description: 'The journey that broke the British Army record and secured their place in history.',
    image: '/images/journey-1991.jpg',
    duration: '39 days, 20 hours, 15 minutes',
    distance: '40,535 km'
  },
  {
    id: 3,
    title: 'Australian Adventure',
    description: 'Facing wild horses and challenging terrain across the Australian continent.',
    image: '/images/journey-australia.jpg',
    duration: '7 days',
    distance: '8,500 km'
  }
]
</script>
