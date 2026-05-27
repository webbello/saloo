<template>
  <div class="w-full h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
    <!-- Stars background — deterministic positions, no hydration mismatch -->
    <div class="absolute inset-0 opacity-50">
      <div
        v-for="star in stars"
        :key="star.id"
        class="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
        :style="{
          top: star.top + '%',
          left: star.left + '%',
          animationDelay: star.delay + 's',
          animationDuration: star.duration + 's'
        }"
      />
    </div>

    <!-- Globe Container -->
    <div class="absolute top-8 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2
                w-[85vw] h-[85vw] md:w-[min(70vw,70vh)] md:h-[min(70vw,70vh)]
                max-w-[600px] max-h-[600px]">

      <!-- Outer atmospheric glow -->
      <div class="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      <!-- Orbit rings -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[120%] h-[120%] border border-blue-400/20 rounded-full orbit-ring" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[140%] h-[140%] border border-purple-400/10 rounded-full orbit-ring-slow" />

      <!-- Globe sphere -->
      <div class="relative w-full h-full rounded-full overflow-hidden">

        <!--
          Scrolling surface — this is what rotates.
          A 200%-wide horizontal gradient encodes one full longitude pass (0°–360°)
          in 0%–50% of the gradient; the second half (50%–100%) is an exact copy
          so animating background-position from 0% → 100% gives a seamless loop.
          Continent bands (green) are separated by ocean bands (teal/blue).
        -->
        <div class="absolute inset-0 earth-surface" />

        <!--
          Fixed sphere shading — sits on top of the scrolling surface.
          Provides: polar ice, latitude ocean overlay (masks landmasses at poles),
          specular highlight, and dark limb giving the 3-D sphere illusion.
          Nothing in this layer animates, so it's cheap to render.
        -->
        <div class="absolute inset-0 earth-shading" />

        <!-- Journey markers — six continents visited -->
        <div class="marker marker-asia"          title="Asia" />
        <div class="marker marker-europe"        title="Europe" />
        <div class="marker marker-africa"        title="Africa" />
        <div class="marker marker-north-america" title="North America" />
        <div class="marker marker-south-america" title="South America" />
        <div class="marker marker-australia"     title="Australia" />
      </div>
    </div>

    <!-- Floating travel icons -->
    
  </div>
</template>

<script setup>
/**
 * Deterministic star positions via a seeded LCG so server and client
 * produce identical values — eliminates Vue hydration mismatch.
 */
const stars = computed(() =>
  Array.from({ length: 100 }, (_, idx) => {
    const a = ((idx * 1664525  + 1013904223) >>> 0)
    const b = ((a   * 1664525  + 1013904223) >>> 0)
    const c = ((b   * 1664525  + 1013904223) >>> 0)
    const d = ((c   * 1664525  + 1013904223) >>> 0)
    return {
      id:       idx,
      top:      (a % 1000) / 10,
      left:     (b % 1000) / 10,
      delay:    (c % 30)   / 10,
      duration: 2 + (d % 30) / 10
    }
  })
)
</script>

<style scoped>
/* ─────────────────────────────────────────────────────────────
   EARTH SURFACE  (scrolling layer — creates the rotation)
   ─────────────────────────────────────────────────────────────
   Technique:
   • background-size: 200% 100%  →  gradient spans twice the element width
   • The gradient is split into two identical halves (0–50%, 50–100%)
     so animating background-position from 0% to 100% scrolls through
     exactly one "full earth" and loops back seamlessly.
   • Green (#34d399) = landmasses, teal (#0e7490) = ocean.
   • Soft opacity ramps at each coast edge avoid hard stripe lines.
   ──────────────────────────────────────────────────────────── */
.earth-surface {
  background: linear-gradient(90deg,
    /* ── PASS 1  (gradient 0 % → 50 %) ── */
    /* Pacific Ocean */
    rgba(14,116,144,1)    0%,
    rgba(14,116,144,1)    7%,
    /* Americas — wider band, gradual coast edges */
    rgba(52,211,153,0)    7.5%,
    rgba(52,211,153,0.95) 10%,
    rgba(52,211,153,0.95) 17%,
    rgba(52,211,153,0)    17.5%,
    /* Atlantic Ocean */
    rgba(14,116,144,1)    18%,
    rgba(14,116,144,1)    22%,
    /* Europe + Africa — large combined landmass */
    rgba(52,211,153,0)    22.5%,
    rgba(52,211,153,0.95) 25%,
    rgba(52,211,153,0.95) 35%,
    rgba(52,211,153,0)    35.5%,
    /* Indian Ocean */
    rgba(14,116,144,1)    36%,
    rgba(14,116,144,1)    40%,
    /* Asia — largest continuous landmass */
    rgba(52,211,153,0)    40.5%,
    rgba(52,211,153,0.95) 43%,
    rgba(52,211,153,0.95) 48%,
    rgba(52,211,153,0)    48.5%,
    /* Pacific again — closes the loop */
    rgba(14,116,144,1)    49%,
    rgba(14,116,144,1)    50%,

    /* ── PASS 2  (50 % → 100 %) — exact copy of pass 1 ── */
    rgba(14,116,144,1)    50%,
    rgba(14,116,144,1)    57%,
    rgba(52,211,153,0)    57.5%,
    rgba(52,211,153,0.95) 60%,
    rgba(52,211,153,0.95) 67%,
    rgba(52,211,153,0)    67.5%,
    rgba(14,116,144,1)    68%,
    rgba(14,116,144,1)    72%,
    rgba(52,211,153,0)    72.5%,
    rgba(52,211,153,0.95) 75%,
    rgba(52,211,153,0.95) 85%,
    rgba(52,211,153,0)    85.5%,
    rgba(14,116,144,1)    86%,
    rgba(14,116,144,1)    90%,
    rgba(52,211,153,0)    90.5%,
    rgba(52,211,153,0.95) 93%,
    rgba(52,211,153,0.95) 98%,
    rgba(52,211,153,0)    98.5%,
    rgba(14,116,144,1)    99%,
    rgba(14,116,144,1)    100%
  );
  background-size: 200% 100%;
  animation: globe-rotate 28s linear infinite;
}

@keyframes globe-rotate {
  /* Scroll exactly one pass (50 % of the 200 %-wide gradient) = full 360° */
  from { background-position: 0%   50%; }
  to   { background-position: 100% 50%; }
}

/* ─────────────────────────────────────────────────────────────
   EARTH SHADING  (fixed layer — 3-D sphere illusion)
   ─────────────────────────────────────────────────────────────
   Five stacked backgrounds, all 100% × 100% and non-animated:
   1. Dark limb — radial gradient darkening the sphere edge
   2. Specular  — upper-left highlight simulating a light source
   3. Polar ice — pale-blue ellipses at top / bottom
   4. Latitude ocean overlay — fades landmasses out near poles so
      continent bands don't extend unrealistically to the arctic
   5. Ocean sphere base — deep blue radial gradient at the bottom
   ──────────────────────────────────────────────────────────── */
.earth-shading {
  background:
    /* 1. Dark limb */
    radial-gradient(circle at 50% 50%,
      transparent            35%,
      rgba(0,8,30,0.22)      60%,
      rgba(0,5,20,0.65)      80%,
      rgba(0,3,12,0.90)     100%
    ),
    /* 2. Specular highlight */
    radial-gradient(ellipse 40% 34% at 30% 24%,
      rgba(180,228,255,0.28)  0%,
      transparent            100%
    ),
    /* 3. Polar ice caps */
    linear-gradient(180deg,
      rgba(220,242,255,0.70)  0%,
      rgba(220,242,255,0.45)  5%,
      rgba(220,242,255,0.00) 13%,
      transparent            87%,
      rgba(220,242,255,0.45) 95%,
      rgba(220,242,255,0.70) 100%
    ),
    /* 4. Latitude ocean overlay — hides landmass bands at high latitudes */
    linear-gradient(180deg,
      rgba(14,100,160,0.82)  0%,
      rgba(14,116,144,0.60)  8%,
      rgba(14,116,144,0.18) 20%,
      rgba(14,116,144,0.00) 30%,
      rgba(14,116,144,0.00) 70%,
      rgba(14,116,144,0.18) 80%,
      rgba(14,116,144,0.60) 92%,
      rgba(14,100,160,0.82) 100%
    ),
    /* 5. Ocean sphere base */
    radial-gradient(circle at 44% 44%,
      rgba(56,189,248,0.72)  0%,
      rgba(14,116,144,0.84) 38%,
      rgba(30,58,138,0.92)  68%,
      rgba(15,23,42,0.98)  100%
    );
}

/* ─────────────────────────────────────────────────────────────
   ORBIT RINGS
   ──────────────────────────────────────────────────────────── */
.orbit-ring {
  animation: orbit-rotate 30s linear infinite;
  /* transform-style: preserve-3d removed — it disabled overflow clipping on
     the parent, causing the rings to bleed off-screen on mobile */
  transform: translate(-50%, -50%) rotateX(75deg);
}

.orbit-ring-slow {
  animation: orbit-rotate 45s linear infinite reverse;
  transform: translate(-50%, -50%) rotateX(75deg);
}

@keyframes orbit-rotate {
  from { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg); }
  to   { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg); }
}

/* ─────────────────────────────────────────────────────────────
   JOURNEY MARKERS
   ──────────────────────────────────────────────────────────── */
.marker {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ef4444;
  border: 2px solid #fca5a5;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(239,68,68,0.8), inset 0 0 5px rgba(255,255,255,0.3);
  animation: marker-pulse 2s ease-in-out infinite;
  z-index: 10;
}

@keyframes marker-pulse {
  0%, 100% { opacity: 1;   transform: scale(1);   }
  50%       { opacity: 0.6; transform: scale(1.5); }
}

.marker-asia          { top: 35%; right: 25%; animation-delay: 0.0s; }
.marker-europe        { top: 30%; left:  45%; animation-delay: 0.3s; }
.marker-africa        { top: 50%; left:  50%; animation-delay: 0.6s; }
.marker-north-america { top: 25%; left:  20%; animation-delay: 0.9s; }
.marker-south-america { top: 60%; left:  30%; animation-delay: 1.2s; }
.marker-australia     { top: 70%; right: 20%; animation-delay: 1.5s; }

/* ─────────────────────────────────────────────────────────────
   FLOATING ICONS
   ──────────────────────────────────────────────────────────── */
.floating-icon {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%,  100% { transform: translateY(0)     rotate(0deg);  }
  25%        { transform: translateY(-10px) rotate(5deg);  }
  50%        { transform: translateY(-5px)  rotate(0deg);  }
  75%        { transform: translateY(-15px) rotate(-5deg); }
}

/* ─────────────────────────────────────────────────────────────
   ACCESSIBILITY — prefers-reduced-motion
   Handled globally in main.css; this scoped block stops the
   component's own named animations as a safety net.
   ──────────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .earth-surface,
  .orbit-ring,
  .orbit-ring-slow,
  .floating-icon,
  .marker {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

@media (max-width: 768px) {
  .marker { width: 7px; height: 7px; border-width: 1.5px; }
}
@media (max-width: 480px) {
  .marker { width: 6px; height: 6px; border-width: 1px; }
}
</style>
