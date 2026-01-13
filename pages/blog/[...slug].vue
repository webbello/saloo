<template>
  <div class="pt-16">
    <article class="section-padding">
      <div class="container-max max-w-4xl">
        <!-- Article Header -->
        <header class="mb-12">
          <div class="text-center mb-8">
            <div class="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{{ data.category }}</span>
              <span class="flex items-center">
                <iconify-icon icon="lucide:calendar" class="mr-1"></iconify-icon>
                {{ formatDate(data.date) }}
              </span>
              <span class="flex items-center">
                <iconify-icon icon="lucide:user" class="mr-1"></iconify-icon>
                {{ data.author }}
              </span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ data.title }}</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">{{ data.description }}</p>
          </div>
          
          <!-- Featured Image -->
          <div v-if="data.image" class="relative rounded-lg overflow-hidden shadow-lg mb-8">
            <NuxtImg 
              :src="data.image" 
              :alt="data.title"
              class="w-full h-96 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>
          
          <!-- Tags -->
          <div v-if="data.tags && data.tags.length > 0" class="flex flex-wrap justify-center gap-2 mb-8">
            <span 
              v-for="tag in data.tags" 
              :key="tag"
              class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              #{{ tag }}
            </span>
          </div>
        </header>

        <!-- Article Content -->
        <div v-if="data" class="prose max-w-none">
          <ContentRenderer :value="data" />
        </div>

        <!-- Article Footer -->
        <footer class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <iconify-icon icon="lucide:user" class="text-blue-600 text-xl"></iconify-icon>
              </div>
              <div>
                <div class="font-semibold">{{ data.author }}</div>
                <div class="text-gray-600 text-sm">World Record Holder & Adventurer</div>
              </div>
            </div>
            
            <div class="flex space-x-4">
              <button class="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon>
              </button>
              <button class="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <iconify-icon icon="lucide:twitter" class="text-xl"></iconify-icon>
              </button>
              <button class="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <iconify-icon icon="lucide:share-2" class="text-xl"></iconify-icon>
              </button>
            </div>
          </div>
        </footer>

        <!-- Related Posts -->
        <section v-if="relatedPosts.length > 0" class="mt-16">
          <h2 class="text-2xl font-bold mb-8">Related Stories</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogCard 
              v-for="post in relatedPosts" 
              :key="post._path"
              :post="post"
            />
          </div>
        </section>

        <!-- Navigation -->
        <nav class="mt-12 flex justify-between">
          <NuxtLink 
            v-if="prev" 
            :to="prev._path"
            class="flex items-center text-blue-600 hover:text-blue-700"
          >
            <iconify-icon icon="lucide:arrow-left" class="mr-2"></iconify-icon>
            <div>
              <div class="text-sm text-gray-500">Previous</div>
              <div class="font-medium">{{ prev.title }}</div>
            </div>
          </NuxtLink>
          
          <NuxtLink 
            v-if="next" 
            :to="next._path"
            class="flex items-center text-blue-600 hover:text-blue-700 text-right"
          >
            <div>
              <div class="text-sm text-gray-500">Next</div>
              <div class="font-medium">{{ next.title }}</div>
            </div>
            <iconify-icon icon="lucide:arrow-right" class="ml-2"></iconify-icon>
          </NuxtLink>
        </nav>
      </div>
    </article>
  </div>
</template>

<script setup>
const route = useRoute()

// Fetch the current post with error handling
const data = await queryContent(route.path).findOne().catch(() => null)

if (!data) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

// Fetch related posts (same category, excluding current)
const relatedPosts = await queryContent('/blog')
  .where({ category: data.category, _path: { $ne: route.path } })
  .limit(2)
  .find()
  .catch(() => [])

// Get previous and next posts
const [prev, next] = await queryContent('/blog')
  .only(['_path', 'title'])
  .sort({ date: -1 })
  .findSurround(route.path)
  .catch(() => [null, null])

// SEO Meta
useSeoMeta({
  title: data.title,
  description: data.description,
  ogTitle: data.title,
  ogDescription: data.description,
  ogImage: data.image,
  ogType: 'article',
  articleAuthor: data.author,
  articlePublishedTime: data.date,
  twitterCard: 'summary_large_image'
})

// Format date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>


