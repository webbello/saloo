<template>
  <div class="w-full h-full relative flex items-center justify-center">
    <!-- Realistic Earth Globe -->
    <div class="earth-globe">
      <!-- Journey markers positioned on continents -->
      <div class="journey-marker marker-asia" title="Asia"></div>
      <div class="journey-marker marker-europe" title="Europe"></div>
      <div class="journey-marker marker-north-america" title="North America"></div>
      <div class="journey-marker marker-south-america" title="South America"></div>
      <div class="journey-marker marker-africa" title="Africa"></div>
      <div class="journey-marker marker-australia" title="Australia"></div>
    </div>
    
    <!-- Orbit ring -->
    <div class="orbit-ring"></div>
    
    <!-- Floating elements -->
    <div class="absolute top-1/4 left-1/4 animate-float">
      <iconify-icon icon="lucide:car" class="text-2xl text-blue-500 opacity-60"></iconify-icon>
    </div>
    <div class="absolute top-3/4 right-1/4 animate-float" style="animation-delay: 2s;">
      <iconify-icon icon="lucide:plane" class="text-2xl text-purple-500 opacity-60"></iconify-icon>
    </div>
    <div class="absolute top-1/2 right-1/3 animate-float" style="animation-delay: 4s;">
      <iconify-icon icon="lucide:compass" class="text-2xl text-green-500 opacity-60"></iconify-icon>
    </div>
  </div>
</template>

<style scoped>
.earth-globe {
  position: relative;
  width: min(100vw, 100vh);
  height: min(100vw, 100vh);
  border-radius: 50%;
  background-image: url('https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg');
  filter: brightness(1.2) contrast(1.1) saturate(1.3);
  background-size: calc(min(100vw, 100vh) * 2) min(100vw, 100vh);
  background-repeat: repeat-x;
  background-position: 0 0;
  box-shadow: 
    inset 15px 60px 120px 60px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(59, 130, 246, 0.2);
  animation: earth-rotate 20s linear infinite;
}

/* Journey markers positioned on continents */
.journey-marker {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ef4444;
  border: 2px solid #fca5a5;
  border-radius: 50%;
  box-shadow: 
    0 0 15px rgba(239, 68, 68, 0.8),
    inset 0 0 5px rgba(255, 255, 255, 0.3);
  animation: marker-pulse 2s ease-in-out infinite;
  z-index: 10;
}

/* Continent positions (approximate) */
.marker-asia {
  top: 35%;
  right: 25%;
  animation-delay: 0s;
}

.marker-europe {
  top: 30%;
  left: 45%;
  animation-delay: 0.3s;
}

.marker-africa {
  top: 50%;
  left: 50%;
  animation-delay: 0.6s;
}

.marker-north-america {
  top: 25%;
  left: 20%;
  animation-delay: 0.9s;
}

.marker-south-america {
  top: 60%;
  left: 30%;
  animation-delay: 1.2s;
}

.marker-australia {
  top: 70%;
  right: 20%;
  animation-delay: 1.5s;
}

/* Orbit ring */
.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(min(100vw, 100vh) * 1.2);
  height: calc(min(100vw, 100vh) * 1.2);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotateX(75deg);
  animation: orbit-rotate 30s linear infinite;
}

/* Floating animation */
.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Keyframes */
@keyframes earth-rotate {
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: calc(min(100vw, 100vh) * 2) 0px;
  }
}

@media (max-width: 768px) {
  @keyframes earth-rotate {
    from {
      background-position: 0px 0px;
    }
    to {
      background-position: calc(min(90vw, 90vh) * 2) 0px;
    }
  }
}

@media (max-width: 480px) {
  @keyframes earth-rotate {
    from {
      background-position: 0px 0px;
    }
    to {
      background-position: calc(min(85vw, 85vh) * 2) 0px;
    }
  }
}

@media (max-width: 320px) {
  @keyframes earth-rotate {
    from {
      background-position: 0px 0px;
    }
    to {
      background-position: calc(min(80vw, 80vh) * 2) 0px;
    }
  }
}

@keyframes marker-pulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.6; 
    transform: scale(1.4); 
  }
}

@keyframes orbit-rotate {
  0% { 
    transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg); 
  }
  100% { 
    transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg); 
  }
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  25% { 
    transform: translateY(-10px) rotate(5deg); 
  }
  50% { 
    transform: translateY(-5px) rotate(0deg); 
  }
  75% { 
    transform: translateY(-15px) rotate(-5deg); 
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .earth-globe,
  .orbit-ring,
  .animate-float {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .earth-globe {
    width: min(90vw, 90vh);
    height: min(90vw, 90vh);
    background-size: calc(min(90vw, 90vh) * 2) min(90vw, 90vh);
    box-shadow: 
      inset 10px 40px 80px 40px rgba(0, 0, 0, 0.6),
      0 0 60px rgba(59, 130, 246, 0.2);
  }
  
  .orbit-ring {
    width: calc(min(90vw, 90vh) * 1.2);
    height: calc(min(90vw, 90vh) * 1.2);
  }
  
  .journey-marker {
    width: 8px;
    height: 8px;
  }
}

@media (max-width: 480px) {
  .earth-globe {
    width: min(85vw, 85vh);
    height: min(85vw, 85vh);
    background-size: calc(min(85vw, 85vh) * 2) min(85vw, 85vh);
    box-shadow: 
      inset 8px 30px 60px 30px rgba(0, 0, 0, 0.6),
      0 0 40px rgba(59, 130, 246, 0.2);
  }
  
  .orbit-ring {
    width: calc(min(85vw, 85vh) * 1.2);
    height: calc(min(85vw, 85vh) * 1.2);
  }
  
  .journey-marker {
    width: 6px;
    height: 6px;
  }
}

@media (max-width: 320px) {
  .earth-globe {
    width: min(80vw, 80vh);
    height: min(80vw, 80vh);
    background-size: calc(min(80vw, 80vh) * 2) min(80vw, 80vh);
    box-shadow: 
      inset 6px 20px 40px 20px rgba(0, 0, 0, 0.6),
      0 0 30px rgba(59, 130, 246, 0.2);
  }
  
  .orbit-ring {
    width: calc(min(80vw, 80vh) * 1.2);
    height: calc(min(80vw, 80vh) * 1.2);
  }
  
  .journey-marker {
    width: 5px;
    height: 5px;
  }
}
</style>
