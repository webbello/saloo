<template>
  <div class="flex items-center space-x-4">
    <span class="text-sm font-medium text-gray-600">Share:</span>
    
    <!-- Facebook -->
    <button 
      @click="shareOnFacebook"
      class="p-2 text-gray-400 hover:text-blue-600 transition-colors"
      title="Share on Facebook"
    >
      <iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon>
    </button>
    
    <!-- Twitter -->
    <button 
      @click="shareOnTwitter"
      class="p-2 text-gray-400 hover:text-blue-400 transition-colors"
      title="Share on Twitter"
    >
      <iconify-icon icon="lucide:twitter" class="text-xl"></iconify-icon>
    </button>
    
    <!-- LinkedIn -->
    <button 
      @click="shareOnLinkedIn"
      class="p-2 text-gray-400 hover:text-blue-700 transition-colors"
      title="Share on LinkedIn"
    >
      <iconify-icon icon="lucide:linkedin" class="text-xl"></iconify-icon>
    </button>
    
    <!-- WhatsApp -->
    <button 
      @click="shareOnWhatsApp"
      class="p-2 text-gray-400 hover:text-green-600 transition-colors"
      title="Share on WhatsApp"
    >
      <iconify-icon icon="lucide:message-circle" class="text-xl"></iconify-icon>
    </button>
    
    <!-- Copy Link -->
    <button 
      @click="copyLink"
      class="p-2 text-gray-400 hover:text-gray-600 transition-colors"
      title="Copy Link"
    >
      <iconify-icon icon="lucide:copy" class="text-xl"></iconify-icon>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Saloo & Neena Chowdhury - World Record Circumnavigators'
  },
  description: {
    type: String,
    default: 'First and fastest circumnavigators of the globe by car covering six continents.'
  },
  url: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const currentUrl = computed(() => {
  return props.url || `https://saloo-neena.com${route.path}`
})

const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnTwitter = () => {
  const text = `${props.title} - ${props.description}`
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl.value)}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl.value)}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnWhatsApp = () => {
  const text = `${props.title} - ${props.description} ${currentUrl.value}`
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    // You could add a toast notification here
    alert('Link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}
</script>
