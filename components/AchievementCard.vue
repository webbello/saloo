<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="p-6">
      <div class="flex items-center mb-4">
        <div 
          class="w-12 h-12 rounded-full flex items-center justify-center mr-4"
          :class="`bg-${achievement.color}-100`"
        >
          <iconify-icon 
            :icon="achievement.icon" 
            class="text-2xl"
            :class="`text-${achievement.color}-600`"
          ></iconify-icon>
        </div>
        <div>
          <h3 class="text-xl font-semibold">{{ achievement.title }}</h3>
          <span 
            class="text-sm px-2 py-1 rounded"
            :class="`bg-${achievement.color}-100 text-${achievement.color}-700`"
          >
            {{ achievement.year }}
          </span>
        </div>
      </div>
      
      <p class="text-gray-600 mb-4">{{ achievement.description }}</p>
      
      <div class="space-y-2">
        <h4 class="font-semibold text-sm text-gray-700">Key Details:</h4>
        <ul class="space-y-1">
          <li 
            v-for="detail in achievement.details" 
            :key="detail"
            class="text-sm text-gray-600 flex items-center"
          >
            <iconify-icon 
              icon="lucide:check-circle" 
              :class="`text-${achievement.color}-500 mr-2`"
            ></iconify-icon>
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  achievement: {
    type: Object,
    required: true
  }
})
</script>
