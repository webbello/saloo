<template>
  <div class="pt-16">
    <div class="section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our visual journey through photographs capturing the incredible moments, 
            landscapes, and experiences from our record-breaking circumnavigation adventures.
          </p>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-6 py-2 rounded-full transition-colors duration-200 flex items-center"
            :class="activeCategory === category.id 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            <iconify-icon :icon="category.icon" class="mr-2"></iconify-icon>
            {{ category.name }}
            <span class="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
              {{ category.count }}
            </span>
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="image.id"
            @click="openLightbox(index)"
            class="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            :class="getGridClass(index)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            
            <!-- Category badge -->
            <div class="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium">
                {{ getCategoryName(image.category) }}
              </span>
            </div>
          </div>
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
            {{ loading ? 'Loading...' : 'Load More Photos' }}
          </button>
        </div>

        <!-- Lightbox -->
        <div 
          v-if="lightboxOpen" 
          @click="closeLightbox"
          class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        >
          <!-- Close button - top right of screen -->
          <button 
            @click="closeLightbox"
            class="fixed top-4 right-4 text-white hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full p-2"
          >
            <iconify-icon icon="lucide:x" class="text-2xl"></iconify-icon>
          </button>
          
          <!-- Previous button - left edge of screen -->
          <button 
            v-if="currentImageIndex > 0"
            @click.stop="previousImage"
            class="fixed left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 sm:p-3"
          >
            <iconify-icon icon="lucide:chevron-left" class="text-2xl sm:text-4xl"></iconify-icon>
          </button>
          
          <!-- Next button - right edge of screen -->
          <button 
            v-if="currentImageIndex < filteredImages.length - 1"
            @click.stop="nextImage"
            class="fixed right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 sm:p-3"
          >
            <iconify-icon icon="lucide:chevron-right" class="text-2xl sm:text-4xl"></iconify-icon>
          </button>

          <div class="relative max-w-4xl max-h-full">
            <img 
              :src="currentImage.src" 
              :alt="currentImage.alt"
              class="max-w-full max-h-full object-contain"
            />
            
            <div class="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 class="text-lg font-semibold mb-1">{{ currentImage.title }}</h3>
              <p class="text-sm text-gray-300">{{ currentImage.description }}</p>
              <div class="mt-2 text-xs text-gray-400">
                {{ currentImageIndex + 1 }} of {{ filteredImages.length }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { siteConfig } from '~/config/site'
useSeoMeta({
  title: 'Gallery - Saloo & Neena Chowdhury Photo Collection',
  description: 'Browse through our extensive photo gallery capturing moments from record-breaking circumnavigation journeys across six continents.',
  ogTitle: 'Gallery - Saloo & Neena Chowdhury Photo Collection'
})

const activeCategory = ref('all')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const displayCount = ref(20)
const loading = ref(false)

const categories = [
  { id: 'all', name: 'All Photos', icon: 'lucide:image', count: 45 },
  { id: 'journey', name: 'Journey Moments', icon: 'lucide:car', count: 15 },
  { id: 'landscapes', name: 'Landscapes', icon: 'lucide:mountain', count: 12 },
  { id: 'people', name: 'People & Culture', icon: 'lucide:users', count: 8 },
  { id: 'achievements', name: 'Achievements', icon: 'lucide:trophy', count: 6 },
  { id: 'behind-scenes', name: 'Behind the Scenes', icon: 'lucide:camera', count: 4 }
]

const allImages = [
  // Journey Moments
  { id: 1, src: `${siteConfig.baseURL}/images/gallery/Scan1.jpg`, alt: 'Journey Start', title: 'The Beginning', description: 'Starting our historic journey from Delhi', category: 'journey' },
  { id: 2, src: `${siteConfig.baseURL}/images/gallery/Scan2.jpg`, alt: 'Car Preparation', title: 'Getting Ready', description: 'Final preparations before departure', category: 'journey' },
  { id: 3, src: `${siteConfig.baseURL}/images/gallery/Scan3.jpg`, alt: 'Border Crossing', title: 'International Borders', description: 'Crossing international boundaries', category: 'journey' },
  { id: 4, src: `${siteConfig.baseURL}/images/gallery/Scan4.jpg`, alt: 'Journey Moments', title: 'On the Road', description: 'Memorable moments during the journey', category: 'journey' },
  { id: 5, src: `${siteConfig.baseURL}/images/gallery/Scan5.jpg`, alt: 'Adventure', title: 'Adventure Time', description: 'Exciting moments from the expedition', category: 'journey' },
  
  // Landscapes
  { id: 6, src: `${siteConfig.baseURL}/images/gallery/Scan6.jpg`, alt: 'Scenic Route', title: 'Beautiful Landscapes', description: 'Stunning views encountered during travel', category: 'landscapes' },
  { id: 7, src: `${siteConfig.baseURL}/images/gallery/Scan7.jpg`, alt: 'Mountain Roads', title: 'Mountain Passes', description: 'Challenging mountain terrain', category: 'landscapes' },
  { id: 8, src: `${siteConfig.baseURL}/images/gallery/Scan8.jpg`, alt: 'Desert Crossing', title: 'Desert Adventures', description: 'Crossing vast desert landscapes', category: 'landscapes' },
  { id: 9, src: `${siteConfig.baseURL}/images/gallery/Scan9.jpg`, alt: 'Coastal Views', title: 'Coastal Journey', description: 'Beautiful coastal roads and views', category: 'landscapes' },
  
  // People & Culture
  { id: 10, src: `${siteConfig.baseURL}/images/gallery/Scan10.jpg`, alt: 'Local People', title: 'Meeting Locals', description: 'Connecting with people from different cultures', category: 'people' },
  { id: 11, src: `${siteConfig.baseURL}/images/gallery/Scan11.jpg`, alt: 'Cultural Exchange', title: 'Cultural Moments', description: 'Learning about local traditions', category: 'people' },
  { id: 12, src: `${siteConfig.baseURL}/images/gallery/Scan12.jpg`, alt: 'Team Photo', title: 'Team Moments', description: 'Special moments with the team', category: 'people' },
  
  // Achievements
  { id: 13, src: `${siteConfig.baseURL}/images/gallery/Scan13.jpg`, alt: 'Achievement', title: 'World Record Achievement', description: 'Celebrating the world record', category: 'achievements' },
  { id: 14, src: `${siteConfig.baseURL}/images/gallery/Scan14.jpg`, alt: 'Recognition', title: 'Official Recognition', description: 'Receiving official recognition', category: 'achievements' },
  
  // Behind the Scenes
  { id: 15, src: `${siteConfig.baseURL}/images/gallery/Scan-006.BMP.jpg`, alt: 'Behind Scenes', title: 'Behind the Scenes', description: 'Candid moments from the journey', category: 'behind-scenes' },
  { id: 16, src: `${siteConfig.baseURL}/images/gallery/Scan-007.BMP.jpg`, alt: 'Preparation', title: 'Journey Preparation', description: 'Getting ready for the adventure', category: 'behind-scenes' },
  { id: 17, src: `${siteConfig.baseURL}/images/gallery/Scan-008.BMP.jpg`, alt: 'Documentation', title: 'Documenting History', description: 'Recording the historic journey', category: 'behind-scenes' },
  
  // Behind the Scenes
  { id: 11, src: `${siteConfig.baseURL}/images/gallery/mechanical-work.jpg`, alt: 'Mechanical Work', title: 'Roadside Repairs', description: 'Fixing mechanical issues on the road', category: 'behind-scenes' },
  { id: 12, src: `${siteConfig.baseURL}/images/gallery/planning-session.jpg`, alt: 'Planning Session', title: 'Route Planning', description: 'Strategic planning during the journey', category: 'behind-scenes' }
]

const filteredImages = computed(() => {
  let filtered = activeCategory.value === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory.value)
  
  return filtered.slice(0, displayCount.value)
})

const hasMore = computed(() => {
  const totalFiltered = activeCategory.value === 'all' 
    ? allImages.length 
    : allImages.filter(img => img.category === activeCategory.value).length
  
  return displayCount.value < totalFiltered
})

const currentImage = computed(() => {
  return filteredImages.value[currentImageIndex.value] || {}
})

const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId)
  return category ? category.name : ''
}

const getGridClass = (index) => {
  // Create varied grid layout
  const patterns = [
    'col-span-1 row-span-1',
    'col-span-1 row-span-1', 
    'col-span-1 row-span-2',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1'
  ]
  return patterns[index % patterns.length]
}

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

const loadMore = () => {
  loading.value = true
  setTimeout(() => {
    displayCount.value += 12
    loading.value = false
  }, 500)
}

// Reset display count when category changes
watch(activeCategory, () => {
  displayCount.value = 20
})

// Keyboard navigation for lightbox
onMounted(() => {
  const handleKeydown = (e) => {
    if (!lightboxOpen.value) return
    
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowRight') {
      nextImage()
    } else if (e.key === 'ArrowLeft') {
      previousImage()
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})
</script>
