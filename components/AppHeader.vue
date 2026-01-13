<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
    <nav class="container-max">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <iconify-icon icon="lucide:globe" class="text-2xl text-blue-600"></iconify-icon>
          <span class="font-bold text-xl text-gray-900">S&N Journey</span>
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            :class="{ 'text-blue-600': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        
        <button 
          @click="toggleMobile"
          class="md:hidden p-2"
        >
          <iconify-icon 
            :icon="mobileOpen ? 'lucide:x' : 'lucide:menu'" 
            class="text-2xl"
          ></iconify-icon>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="mobileOpen"
        class="md:hidden py-4 border-t border-gray-200"
      >
        <NuxtLink 
          v-for="item in navigation" 
          :key="item.name"
          :to="item.href"
          @click="mobileOpen = false"
          class="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileOpen = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Journeys', href: '/journeys' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  mobileOpen.value = false
})
</script>
