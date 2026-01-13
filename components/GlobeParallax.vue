<template>
  <div class="relative w-full h-full">
    <svg 
      viewBox="0 0 100 100" 
      class="w-full h-full"
      :style="{ transform: `rotate(${rotation}deg)` }"
    >
      <!-- Mini globe -->
      <circle 
        cx="50" 
        cy="50" 
        r="40" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        class="text-blue-400"
      />
      
      <!-- Latitude lines -->
      <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="currentColor" stroke-width="1" class="text-blue-300" />
      <ellipse cx="50" cy="50" rx="40" ry="10" fill="none" stroke="currentColor" stroke-width="1" class="text-blue-300" />
      
      <!-- Longitude lines -->
      <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="currentColor" stroke-width="1" class="text-blue-300" />
      <ellipse cx="50" cy="50" rx="10" ry="40" fill="none" stroke="currentColor" stroke-width="1" class="text-blue-300" />
      
      <!-- Journey arrow -->
      <path 
        d="M 20 50 Q 50 20 80 50" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        class="text-red-500"
        marker-end="url(#arrowhead)"
      />
      
      <!-- Arrow marker -->
      <defs>
        <marker 
          id="arrowhead" 
          markerWidth="10" 
          markerHeight="7" 
          refX="9" 
          refY="3.5" 
          orient="auto"
        >
          <polygon 
            points="0 0, 10 3.5, 0 7" 
            fill="currentColor" 
            class="text-red-500"
          />
        </marker>
      </defs>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})

const rotation = computed(() => {
  return (props.index * 60) % 360
})
</script>
