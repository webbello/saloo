<template>
  <div class="pt-16">
    <div class="section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Journey Blog</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories, insights, and adventures from our record-breaking journeys 
            around the world. Read about the challenges, triumphs, and unforgettable moments.
          </p>
        </div>

        <!-- Debug info (remove in production) -->
        <div class="mb-8 p-4 bg-gray-100 rounded">
          <p>Posts found: {{ posts?.length || 0 }}</p>
          <p>Featured posts: {{ featuredPosts.length }}</p>
          <p>Filtered posts: {{ filteredPosts.length }}</p>
        </div>

        <!-- Featured Posts -->
        <div v-if="featuredPosts.length > 0" class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Featured Stories</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogCard 
              v-for="post in featuredPosts" 
              :key="post._path"
              :post="post"
              :featured="true"
            />
          </div>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-2 rounded-full transition-colors duration-200"
            :class="selectedCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ category }}
          </button>
        </div>

        <!-- All Posts -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8">All Stories</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard 
              v-for="post in filteredPosts" 
              :key="post._path"
              :post="post"
            />
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h3 class="text-2xl font-bold mb-4">Stay Updated</h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest stories and updates 
            from our ongoing adventures and speaking engagements.
          </p>
          
          <form @submit.prevent="subscribeNewsletter" class="max-w-md mx-auto flex gap-4">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <button 
              type="submit"
              :disabled="subscribing"
              class="btn-primary"
            >
              {{ subscribing ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
          
          <div 
            v-if="subscribed" 
            class="mt-4 p-3 bg-green-100 text-green-800 rounded-lg"
          >
            Thank you for subscribing! You'll receive our latest updates.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Blog - Saloo & Neena Chowdhury Journey Stories',
  description: 'Read inspiring stories and adventures from Saloo & Neena Chowdhury\'s record-breaking circumnavigation journeys around the world.',
  ogTitle: 'Blog - Saloo & Neena Chowdhury Journey Stories'
})

// Fetch blog posts
const posts = await queryContent('/blog').sort({ date: -1 }).find().catch(() => [])

const selectedCategory = ref('All')
const email = ref('')
const subscribing = ref(false)
const subscribed = ref(false)

// Get featured posts
const featuredPosts = computed(() => {
  return (posts || []).filter(post => post.featured)
})

// Get all categories
const categories = computed(() => {
  const allCategories = ['All', ...new Set((posts || []).map(post => post.category).filter(Boolean))]
  return allCategories
})

// Filter posts by category
const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return posts || []
  }
  return (posts || []).filter(post => post.category === selectedCategory.value)
})

// Newsletter subscription
const subscribeNewsletter = async () => {
  subscribing.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    subscribed.value = true
    email.value = ''
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      subscribed.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Newsletter subscription error:', error)
  } finally {
    subscribing.value = false
  }
}
</script>
