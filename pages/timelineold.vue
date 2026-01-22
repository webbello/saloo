<template>
  <div class="pt-16">
    <div class="section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Journey Timeline</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the chronological journey of Saloo & Neena Chowdhury's record-breaking adventures 
            across six continents.
          </p>
        </div>

        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
          
          <div class="space-y-12">
            <TimelineEvent 
              v-for="(event, index) in timelineEvents" 
              :key="event.id"
              :event="event"
              :index="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Timeline - Saloo & Neena Chowdhury Journey',
  description: 'Chronological timeline of Saloo & Neena Chowdhury\'s record-breaking circumnavigation journeys and achievements.',
  ogTitle: 'Timeline - Saloo & Neena Chowdhury Journey'
})

const timelineEvents = [
  {
    id: 1,
    year: '1989',
    title: 'First Circumnavigation Attempt',
    description: 'Saloo and Neena embark on their first journey to circumnavigate the globe by car, covering 45,000 kilometres in 69 days, 19 hours and 5 minutes.',
    location: 'Starting from Delhi, India',
    image: '/images/timeline-1989.jpg',
    achievements: ['First circumnavigation by car', 'Covered six continents', 'Guinness World Record certified']
  },
  {
    id: 2,
    year: '1991',
    title: 'British Army Challenge',
    description: 'The British Army accomplishes circumnavigation in 40 days, leading Guinness to drop the "first" title from the Chowdhurys\' record.',
    location: 'Global',
    image: '/images/timeline-1991-challenge.jpg',
    achievements: ['Army had significant advantages', 'No customs or visa delays', 'Royal Air Force backup']
  },
  {
    id: 3,
    year: '1991',
    title: 'Record Breaking Journey',
    description: 'Determined to reclaim their title, the Chowdhurys set off again on November 7, 1991, covering 40,535 kilometres in just 39 days, 20 hours, 15 minutes.',
    location: 'Starting from Delhi, India',
    image: '/images/timeline-1991-record.jpg',
    achievements: ['Beat British Army by 3 hours 45 minutes', 'New world record', 'Fastest circumnavigation']
  },
  {
    id: 4,
    year: '1993-1998',
    title: 'Legal Battle',
    description: 'Five-year legal battle with Guinness Publishing Limited in Calcutta High Court to be recognized as both first and fastest circumnavigators.',
    location: 'Calcutta High Court, India',
    image: '/images/timeline-legal.jpg',
    achievements: ['Filed case for recognition', 'Demanded £7.5 million damages', 'Fought for five years']
  },
  {
    id: 5,
    year: '1998',
    title: 'Victory and Recognition',
    description: 'On April 7, 1998, Guinness Publishing Limited signs MOU recognizing the Chowdhurys as first and fastest circumnavigators.',
    location: 'Legal Settlement',
    image: '/images/timeline-victory.jpg',
    achievements: ['Official recognition restored', 'Choudhury Trophy named in their honor', 'Legacy secured for Kolkata']
  },
  {
    id: 6,
    year: 'Present',
    title: 'Continuing Legacy',
    description: 'The Chowdhurys continue to inspire adventurers worldwide, with their eyes set on bigger targets and new challenges.',
    location: 'Kolkata, India',
    image: '/images/timeline-present.jpg',
    achievements: ['Guinness World Records Road Challenge', 'Inspiration for future adventurers', 'Kolkata on world map']
  }
]
</script>
