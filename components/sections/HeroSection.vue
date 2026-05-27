<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white pt-24 overflow-hidden">

    <!-- Animated gradient orbs -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Badge -->
      <div class="flex justify-center mb-8 animate-bounce" style="animation-duration: 2s;">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-2xl">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span>Guinness World Record Holders</span>
        </div>
      </div>

      <!-- Title -->
      <div class="text-center mb-14">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent mb-4">
          Saloo & Neena Choudhury
        </h1>
        <p class="px-6 text-lg sm:text-xl md:text-2xl text-amber-200">
          Pioneers of World Record Circumnavigation · Two Champions · One Legacy
        </p>
      </div>

      <!-- Certificates grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">

        <!-- Saloo column -->
        <div>
          <div class="text-center mb-6">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Saloo Choudhury
            </h3>
            <p class="text-amber-200 mt-1">2 Guinness World Records</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="(cert, index) in salooCerts" :key="cert.src">
              <p class="text-center text-sm text-amber-300 mb-2 font-semibold">{{ cert.label }}</p>
              <div
                class="rounded-3xl bg-slate-900/80 border border-amber-500/40 p-5 hover:scale-[1.03] transition cursor-pointer group"
                role="button"
                tabindex="0"
                :aria-label="`View full size — ${cert.alt}`"
                @click="openLightbox(cert)"
                @keydown.enter="openLightbox(cert)"
                @keydown.space.prevent="openLightbox(cert)"
              >
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img
                    :src="cert.src"
                    :alt="cert.alt"
                    class="w-full h-full object-cover"
                    loading="eager"
                    :fetchpriority="index === 0 ? 'high' : 'auto'"
                  />
                  <!-- Zoom hint on hover -->
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                    <iconify-icon
                      icon="lucide:zoom-in"
                      class="text-white text-4xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-75 group-hover:scale-100 transform"
                    ></iconify-icon>
                  </div>
                </div>
                <span class="inline-block text-xs px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full mb-2">{{ cert.date }}</span>
                <p class="font-semibold text-amber-200 text-sm">{{ cert.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Neena column -->
        <div>
          <div class="text-center mb-6">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
              Neena Choudhury
            </h3>
            <p class="text-orange-200 mt-1">2 Guinness World Records</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="cert in neenaCerts" :key="cert.src">
              <p class="text-center text-sm text-orange-300 mb-2 font-semibold">{{ cert.label }}</p>
              <div
                class="rounded-3xl bg-slate-900/80 border border-orange-500/40 p-5 hover:scale-[1.03] transition cursor-pointer group"
                role="button"
                tabindex="0"
                :aria-label="`View full size — ${cert.alt}`"
                @click="openLightbox(cert)"
                @keydown.enter="openLightbox(cert)"
                @keydown.space.prevent="openLightbox(cert)"
              >
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img
                    :src="cert.src"
                    :alt="cert.alt"
                    class="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="auto"
                  />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                    <iconify-icon
                      icon="lucide:zoom-in"
                      class="text-white text-4xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-75 group-hover:scale-100 transform"
                    ></iconify-icon>
                  </div>
                </div>
                <span class="inline-block text-xs px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full mb-2">{{ cert.date }}</span>
                <p class="font-semibold text-orange-200 text-sm">{{ cert.title }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Globe animation background -->
    <div class="absolute inset-0 opacity-20">
      <GlobeAnimation />
    </div>

    <!-- Scroll-down caret -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <iconify-icon icon="lucide:chevron-down" class="text-2xl text-gray-400"></iconify-icon>
    </div>

    <!-- ── Lightbox ──────────────────────────────────────────────────
         Teleported to <body> so it escapes the section's overflow-hidden
         and stacks above everything (z-[100]).
         Close: click backdrop · Escape key · × button
    ─────────────────────────────────────────────────────────────── -->
    <Teleport to="body">
      <Transition name="lb">
        <div
          v-if="lightbox"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          :aria-label="lightbox.alt"
          @click.self="closeLightbox"
        >
          <!-- × close button -->
          <button
            ref="closeBtn"
            class="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white transition focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close image"
            @click="closeLightbox"
          >
            <iconify-icon icon="lucide:x" class="text-xl"></iconify-icon>
          </button>

          <!-- Image + caption — clicks here do NOT propagate to backdrop -->
          <div class="flex flex-col items-center gap-5 max-w-4xl w-full" @click.stop>
            <img
              :src="lightbox.src"
              :alt="lightbox.alt"
              class="max-h-[78vh] max-w-full object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
            <div class="text-center">
              <p class="text-white font-bold text-base sm:text-lg leading-snug">{{ lightbox.person }}</p>
              <p class="text-amber-300 font-semibold text-sm mt-1">{{ lightbox.title }}</p>
              <p class="text-gray-400 text-sm mt-0.5">{{ lightbox.date }}</p>
              <p class="text-gray-500 text-xs mt-2">Press <kbd class="px-1.5 py-0.5 bg-white/10 rounded text-gray-300 font-mono">Esc</kbd> or click outside to close</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
// ── Certificate data ────────────────────────────────────────────────
const salooCerts = [
  {
    label:  'Certificate #1',
    person: 'Saloo Choudhury',
    src:    '/images/guinness/Saloo-First-and-Fastest-Circumnavigation.jpg',
    alt:    'Saloo Choudhury Guinness World Record Certificate — First & Fastest Circumnavigation of the Globe by Car, 1989',
    title:  'First & Fastest Circumnavigation',
    date:   '9 Sep – 17 Nov 1989',
  },
  {
    label:  'Certificate #2',
    person: 'Saloo Choudhury',
    src:    '/images/guinness/Saloo-Fastest-Circumnavigation.jpg',
    alt:    'Saloo Choudhury Guinness World Record Certificate — Fastest Circumnavigation of the Globe by Car, 1991',
    title:  'Fastest Circumnavigation',
    date:   '7 Nov – 17 Dec 1991',
  },
]

const neenaCerts = [
  {
    label:  'Certificate #1',
    person: 'Neena Choudhury',
    src:    '/images/guinness/Neena-First-and-Fastest-Circumnavigation.jpg',
    alt:    'Neena Choudhury Guinness World Record Certificate — First & Fastest Circumnavigation of the Globe by Car, 1989',
    title:  'First & Fastest Circumnavigation',
    date:   '9 Sep – 17 Nov 1989',
  },
  {
    label:  'Certificate #2',
    person: 'Neena Choudhury',
    src:    '/images/guinness/Neena-Fastest-Circumnavigation.jpg',
    alt:    'Neena Choudhury Guinness World Record Certificate — Fastest Circumnavigation of the Globe by Car, 1991',
    title:  'Fastest Circumnavigation',
    date:   '7 Nov – 17 Dec 1991',
  },
]

// ── Lightbox state ──────────────────────────────────────────────────
const lightbox = ref(null)
const closeBtn = ref(null)

function openLightbox (cert) {
  lightbox.value = cert
  // Move focus to the close button for keyboard users
  nextTick(() => closeBtn.value?.focus())
  // Prevent background scroll while modal is open
  if (import.meta.client) document.body.style.overflow = 'hidden'
}

function closeLightbox () {
  lightbox.value = null
  if (import.meta.client) document.body.style.overflow = ''
}

// Close on Escape key — registered once on the document
useEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.value) closeLightbox()
})
</script>

<style scoped>
/* Lightbox fade transition */
.lb-enter-active { transition: opacity 0.2s ease; }
.lb-leave-active { transition: opacity 0.15s ease; }
.lb-enter-from,
.lb-leave-to     { opacity: 0; }
</style>
