<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="relative min-h-svh flex items-center justify-center overflow-hidden bg-linear-to-r from-yellow-400 via-yellow-100 to-yellow-400">
      
      <div class="container-max text-center z-10">
        <div class="animate-fade-in">
          <!-- Rally Badge -->
          <div class="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <iconify-icon icon="lucide:car" class="text-blue-600 mr-2"></iconify-icon>
            <span class="text-sm font-semibold text-gray-700">World Record Motor Rally Champions</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="text-black/90 text-shadow-lg">Saloo & Neena Chowdhury</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-900 mb-4 max-w-3xl mx-auto">
            First and fastest circumnavigators of the globe by car
          </p>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Covering six continents in their trusted Hindustan Ambassador • Guinness World Record holders from Kolkata, India
          </p>
          
          <!-- Key Stats -->
          <div class="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8 max-w-4xl mx-auto px-4">
            <div class="bg-white/70 md:bg-white/80 backdrop-blur-sm p-2 md:p-4 rounded-lg shadow-lg">
              <div class="text-lg md:text-2xl font-bold text-blue-600">39 Days</div>
              <div class="text-xs md:text-sm text-gray-600 hidden sm:block">20 hours, 15 minutes</div>
              <div class="text-[10px] md:text-xs text-gray-500">Fastest Record</div>
            </div>
            <div class="bg-white/70 md:bg-white/80 backdrop-blur-sm p-2 md:p-4 rounded-lg shadow-lg">
              <div class="text-lg md:text-2xl font-bold text-blue-600">6 Continents</div>
              <div class="text-xs md:text-sm text-gray-600 hidden sm:block">40,535 km covered</div>
              <div class="text-[10px] md:text-xs text-gray-500">Complete route</div>
            </div>
            <div class="bg-white/70 md:bg-white/80 backdrop-blur-sm p-2 md:p-4 rounded-lg shadow-lg">
              <div class="text-lg md:text-2xl font-bold text-blue-600">First Ever</div>
              <div class="text-xs md:text-sm text-gray-600 hidden sm:block">By car (1989)</div>
              <div class="text-[10px] md:text-xs text-gray-500">World Record</div>
            </div>
          </div>

          <div class="flex sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <NuxtLink to="/journeys" class="btn-primary text-sm md:text-base py-2 md:py-3">
              <iconify-icon icon="lucide:map" class="mr-2"></iconify-icon>
              Explore Journeys
            </NuxtLink>
            <NuxtLink to="/about" class="btn-secondary text-sm md:text-base py-2 md:py-3">
              <iconify-icon icon="lucide:users" class="mr-2"></iconify-icon>
              About Us
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- Animated Ambassador Car SVG -->
      <div class="absolute inset-0 opacity-20">
        <AmbassadorCarAnimation />
      </div>
      
      <!-- Globe Animation Background -->
      <div class="absolute inset-0 opacity-10">
        <GlobeAnimation />
      </div>
      
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <iconify-icon icon="lucide:chevron-down" class="text-2xl text-gray-400"></iconify-icon>
      </div>
    </section>
    <!-- Guinness Records -->
     <section class="py-16 bg-whit">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12"> Guinness World Records </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border-2 border-yellow-200 ">
                <div class="flex items-center mb-4">
                  <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide h-8 w-8 text-white lucide-trophy-icon lucide-trophy h-8 w-8 text-white">
                        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                        <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                        <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                      </svg>
                  </div>
                  <div>
                      <div class="text-sm text-yellow-700 font-medium"> GUINNESS WORLD RECORD </div>
                      <div class="text-lg font-bold text-gray-900">December 17, 1991</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Defeating British Army Record</h3>
                <p class="text-gray-700 mb-4">Successfully defeated the British Army circumnavigation record, proving civilian capability over military advantages.</p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center">
                      <div class="text-lg font-bold text-gray-900 ">40,535 km</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 capitalize">distance</div>
                  </div>
                  <div class="text-center">
                      <div class="text-lg font-bold text-gray-900">39 days, 20 hours, 15 minutes</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 capitalize">time</div>
                  </div>
                  <div class="text-center">
                      <div class="text-lg font-bold text-gray-900 ">3 hours 45 minutes faster than British Army</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 capitalize">improvement</div>
                  </div>
                  <div class="text-center">
                      <div class="text-lg font-bold text-gray-900">1991</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 capitalize">year</div>
                  </div>
                </div>
            </div>
            <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border-2 border-yellow-200">
                <div class="flex items-center mb-4">
                  <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide h-8 w-8 text-white lucide-trophy-icon lucide-trophy h-8 w-8 text-white">
                        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                        <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                        <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                      </svg>
                  </div>
                  <div>
                      <div class="text-sm text-yellow-700 font-medium"> GUINNESS WORLD RECORD </div>
                      <div class="text-lg font-bold text-gray-900">March 11, 1989</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Guinness World Record - First and Fastest Circumnavigation</h3>
                <p class="text-gray-700 mb-4">Officially recognized by Guinness Book of World Records as the first and fastest circumnavigators of the globe covering six continents.</p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center">
                      <div class="text-lg font-bold text-gray-900">45,000 km</div>
                      <div class="text-sm text-gray-600 capitalize">distance</div>
                  </div>
                  <div class="text-center">
                      <div class="text-lg font-bold text-gray-900">69 days, 19 hours, 5 minutes</div>
                      <div class="text-sm text-gray-600 capitalize">time</div>
                  </div>
                  <div class="text-center">
                      <div class="text-lg font-bold text-gray-900">6</div>
                      <div class="text-sm text-gray-600 capitalize">continents</div>
                  </div>
                  <div class="text-center">
                      <div class="text-lg font-bold text-gray-900">1989</div>
                      <div class="text-sm text-gray-600 capitalize">year</div>
                  </div>
                </div>
            </div>
          </div>
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
  ogImage: 'http://salooneenachoudhury.com/images/gallery/Scan8.jpg',
  ogUrl: 'https://salooneenachoudhury.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Saloo & Neena Chowdhury - World Record Circumnavigators',
  twitterDescription: 'First and fastest circumnavigators of the globe covering six continents. Guinness World Record holders from Kolkata, India.',
  twitterImage: 'http://salooneenachoudhury.com/images/gallery/Scan8.jpg'
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
