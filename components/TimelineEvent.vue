<template>
  <div class="relative mb-12">
    <div class="flex items-center" :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
      <!-- Content -->
      <div class="w-5/12" :class="index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'">
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4" :class="index % 2 === 0 ? 'justify-end' : 'justify-start'">
            <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {{ event.year }}
            </span>
          </div>
          
          <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
          <p class="text-gray-600 mb-4">{{ event.description }}</p>
          
          <div class="flex items-center mb-4" :class="index % 2 === 0 ? 'justify-end' : 'justify-start'">
            <iconify-icon icon="lucide:map-pin" class="text-blue-500 mr-1"></iconify-icon>
            <span class="text-sm text-gray-500">{{ event.location }}</span>
          </div>
          
          <div class="space-y-2">
            <h4 class="font-semibold text-sm text-gray-700">Key Achievements:</h4>
            <ul class="space-y-1">
              <li 
                v-for="achievement in event.achievements" 
                :key="achievement"
                class="text-sm text-gray-600 flex items-center"
                :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
              >
                <iconify-icon 
                  icon="lucide:check-circle" 
                  class="text-green-500 mr-2"
                  :class="index % 2 === 0 ? 'order-2 ml-2 mr-0' : ''"
                ></iconify-icon>
                <span :class="index % 2 === 0 ? 'order-1' : ''">{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Timeline marker -->
      <div class="w-2/12 flex justify-center">
        <div class="relative">
          <div class="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 relative">
            <div class="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
          </div>
          
          <!-- Globe animation for destinations -->
          <div class="absolute -top-8 -left-8 w-16 h-16 opacity-20">
            <GlobeParallax :index="index" />
          </div>
        </div>
      </div>
      
      <!-- Image -->
      <div class="w-5/12" :class="index % 2 === 0 ? 'pl-8' : 'pr-8'">
        <div class="relative overflow-hidden rounded-lg shadow-lg">
          <img 
            v-if="event.image"
            :src="event.image" 
            :alt="event.title"
            class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>
