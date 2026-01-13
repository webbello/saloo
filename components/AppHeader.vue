<template>
  <header class="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
    <nav class="container-max">
      <div class="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <iconify-icon icon="lucide:globe" class="text-xl sm:text-2xl text-blue-600"></iconify-icon>
          <span class="font-bold text-lg sm:text-xl text-gray-900">S&N Journey</span>
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="relative px-2 lg:px-3 py-2 text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium"
            :class="{ 
              'text-blue-600': isActiveRoute(item.href),
              'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:transform after:scale-x-100': isActiveRoute(item.href),
              'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200': !isActiveRoute(item.href)
            }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        
        <button 
          @click="toggleMobile"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          :class="{ 'bg-gray-100': mobileOpen }"
        >
          <iconify-icon 
            :icon="mobileOpen ? 'lucide:x' : 'lucide:menu'" 
            class="text-xl sm:text-2xl transition-transform duration-200"
            :class="{ 'rotate-90': mobileOpen }"
          ></iconify-icon>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="mobileOpen"
        class="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
      >
        <div class="px-4 py-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            @click="mobileOpen = false"
            class="flex items-center py-3 px-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 my-1"
            :class="{ 
              'text-blue-600 bg-blue-50 border-l-4 border-blue-600': isActiveRoute(item.href)
            }"
          >
            <iconify-icon :icon="getMenuIcon(item.href)" class="mr-3 text-lg"></iconify-icon>
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute()
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

const isActiveRoute = (href) => {
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href)
}

const getMenuIcon = (href) => {
  const icons = {
    '/': 'lucide:home',
    '/about': 'lucide:users',
    '/timeline': 'lucide:clock',
    '/journeys': 'lucide:map',
    '/achievements': 'lucide:trophy',
    '/gallery': 'lucide:image',
    '/blog': 'lucide:book-open',
    '/contact': 'lucide:mail'
  }
  return icons[href] || 'lucide:circle'
}

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  mobileOpen.value = false
})
</script>
