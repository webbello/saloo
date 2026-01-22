<template>
  <!-- Main Content -->
    <div class="pt-24 pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 bg-clip-text text-transparent">
                    Journey Timeline
                </h1>
                <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Follow the chronological journey of Saloo & Neena Choudhury's record-breaking adventures across six continents.
                </p>
            </div>

            <!-- Timeline Container -->
            <div class="relative max-w-5xl mx-auto">
                <!-- Timeline line - Hidden on mobile, visible on md+ -->
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-200 via-amber-200 to-red-200 h-full"></div>
                
                <!-- Mobile Timeline line - Visible only on mobile -->
                <div class="md:hidden absolute left-8 top-0 w-0.5 bg-gradient-to-b from-red-200 via-amber-200 to-red-200 h-full"></div>
                
                <div class="space-y-12">
                    <!-- Event 1: 1989 -->
                    <div class="relative">
                        <!-- Desktop: Alternating layout -->
                        <div class="md:flex md:items-center md:justify-between">
                            <!-- Left side (odd events) -->
                            <div class="md:w-5/12 md:text-right md:pr-8">
                                <div class="hidden md:block">
                                    <div class="inline-block px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xl mb-4 shadow-lg">1989</div>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">First Circumnavigation Attempt</h3>
                                    <p class="text-slate-600 mb-4 leading-relaxed">Saloo and Neena embark on their first journey to circumnavigate the globe by car, covering 45,000 kilometres in 69 days, 19 hours and 5 minutes.</p>
                                    <p class="text-sm text-red-600 font-semibold mb-4">📍 Starting from Delhi, India</p>
                                    <div class="space-y-2">
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            ✓ First circumnavigation by car
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            ✓ Covered six continents
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            ✓ Guinness World Record certified
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Center dot -->
                            <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-600 to-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                            <!-- Right side / Mobile layout -->
                            <div class="md:w-5/12 md:pl-8 pl-20 md:pl-8 pb-8 md:pb-0">
                                <div class="md:hidden mb-4">
                                    <div class="inline-block px-4 py-2 bg-red-600 text-white rounded-full font-bold text-lg mb-3 shadow-lg">1989</div>
                                    <h3 class="text-xl font-bold text-slate-900 mb-2">First Circumnavigation Attempt</h3>
                                    <p class="text-slate-600 mb-3 text-sm leading-relaxed">Saloo and Neena embark on their first journey to circumnavigate the globe by car, covering 45,000 kilometres in 69 days, 19 hours and 5 minutes.</p>
                                    <p class="text-xs text-red-600 font-semibold mb-3">📍 Starting from Delhi, India</p>
                                    <div class="space-y-2 mb-4">
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ First circumnavigation by car</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ Covered six continents</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ Guinness World Record certified</div>
                                    </div>
                                </div>
                                <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-red-200">
                                    <img src="/images/gallery/scan4.jpg" alt="1989 Journey" class="w-full h-48 md:h-64 object-cover">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 2: 1991 Challenge -->
                    <div class="relative">
                        <div class="md:flex md:items-center md:justify-between md:flex-row-reverse">
                            <div class="md:w-5/12 md:text-left md:pl-8">
                                <div class="hidden md:block">
                                    <div class="inline-block px-4 py-2 bg-amber-600 text-white rounded-full font-bold text-xl mb-4 shadow-lg">1991</div>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">British Army Challenge</h3>
                                    <p class="text-slate-600 mb-4 leading-relaxed">The British Army accomplishes circumnavigation in 40 days, leading Guinness to drop the "first" title from the Chowdhurys' record.</p>
                                    <p class="text-sm text-amber-600 font-semibold mb-4">📍 Global</p>
                                    <div class="space-y-2">
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            • Army had significant advantages
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            • No customs or visa delays
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            • Royal Air Force backup
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-600 to-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                            <div class="md:w-5/12 md:pr-8 pl-20 md:pl-0 pb-8 md:pb-0">
                                <div class="md:hidden mb-4">
                                    <div class="inline-block px-4 py-2 bg-amber-600 text-white rounded-full font-bold text-lg mb-3 shadow-lg">1991</div>
                                    <h3 class="text-xl font-bold text-slate-900 mb-2">British Army Challenge</h3>
                                    <p class="text-slate-600 mb-3 text-sm leading-relaxed">The British Army accomplishes circumnavigation in 40 days, leading Guinness to drop the "first" title from the Chowdhurys' record.</p>
                                    <p class="text-xs text-amber-600 font-semibold mb-3">📍 Global</p>
                                    <div class="space-y-2 mb-4">
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• Army had significant advantages</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• No customs or visa delays</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• Royal Air Force backup</div>
                                    </div>
                                </div>
                                <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200">
                                    <img src="/images/gallery/scan2.jpg" alt="1991 Challenge" class="w-full h-48 md:h-64 object-cover">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 3: 1991 Record Breaking -->
                    <div class="relative">
                        <div class="md:flex md:items-center md:justify-between">
                            <div class="md:w-5/12 md:text-right md:pr-8">
                                <div class="hidden md:block">
                                    <div class="inline-block px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xl mb-4 shadow-lg animate-pulse">1991</div>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">Record Breaking Journey</h3>
                                    <p class="text-slate-600 mb-4 leading-relaxed">Determined to reclaim their title, the Chowdhurys set off again on November 7, 1991, covering 40,535 kilometres in just 39 days, 20 hours, 15 minutes.</p>
                                    <p class="text-sm text-red-600 font-semibold mb-4">📍 Starting from Delhi, India</p>
                                    <div class="space-y-2">
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            ✓ Beat British Army by 3h 45m
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            ✓ New world record
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            ✓ Fastest circumnavigation
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-600 to-amber-600 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>

                            <div class="md:w-5/12 md:pl-8 pl-20 md:pl-8 pb-8 md:pb-0">
                                <div class="md:hidden mb-4">
                                    <div class="inline-block px-4 py-2 bg-red-600 text-white rounded-full font-bold text-lg mb-3 shadow-lg">1991</div>
                                    <h3 class="text-xl font-bold text-slate-900 mb-2">Record Breaking Journey 🏆</h3>
                                    <p class="text-slate-600 mb-3 text-sm leading-relaxed">Determined to reclaim their title, the Chowdhurys set off again on November 7, 1991, covering 40,535 kilometres in just 39 days, 20 hours, 15 minutes.</p>
                                    <p class="text-xs text-red-600 font-semibold mb-3">📍 Starting from Delhi, India</p>
                                    <div class="space-y-2 mb-4">
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ Beat British Army by 3h 45m</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ New world record</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ Fastest circumnavigation</div>
                                    </div>
                                </div>
                                <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-red-200">
                                    <img src="/images/gallery/scan5.jpg" alt="1991 Record" class="w-full h-48 md:h-64 object-cover">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 4: Legal Battle -->
                    <div class="relative">
                        <div class="md:flex md:items-center md:justify-between md:flex-row-reverse">
                            <div class="md:w-5/12 md:text-left md:pl-8">
                                <div class="hidden md:block">
                                    <div class="inline-block px-4 py-2 bg-amber-600 text-white rounded-full font-bold text-xl mb-4 shadow-lg">1993-1998</div>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">Legal Battle</h3>
                                    <p class="text-slate-600 mb-4 leading-relaxed">Five-year legal battle with Guinness Publishing Limited in Calcutta High Court to be recognized as both first and fastest circumnavigators.</p>
                                    <p class="text-sm text-amber-600 font-semibold mb-4">📍 Calcutta High Court, India</p>
                                    <div class="space-y-2">
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            • Filed case for recognition
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            • Demanded £7.5 million damages
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            • Fought for five years
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-600 to-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                            <div class="md:w-5/12 md:pr-8 pl-20 md:pl-0 pb-8 md:pb-0">
                                <div class="md:hidden mb-4">
                                    <div class="inline-block px-4 py-2 bg-amber-600 text-white rounded-full font-bold text-lg mb-3 shadow-lg">1993-1998</div>
                                    <h3 class="text-xl font-bold text-slate-900 mb-2">Legal Battle</h3>
                                    <p class="text-slate-600 mb-3 text-sm leading-relaxed">Five-year legal battle with Guinness Publishing Limited in Calcutta High Court to be recognized as both first and fastest circumnavigators.</p>
                                    <p class="text-xs text-amber-600 font-semibold mb-3">📍 Calcutta High Court, India</p>
                                    <div class="space-y-2 mb-4">
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• Filed case for recognition</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• Demanded £7.5 million damages</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• Fought for five years</div>
                                    </div>
                                </div>
                                <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200">
                                    <img src="/images/gallery/scan13.jpg" alt="Legal Battle" class="w-full h-48 md:h-64 object-cover">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 5: Victory -->
                    <div class="relative">
                        <div class="md:flex md:items-center md:justify-between">
                            <div class="md:w-5/12 md:text-right md:pr-8">
                                <div class="hidden md:block">
                                    <div class="inline-block px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xl mb-4 shadow-lg">1998</div>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">Victory and Recognition</h3>
                                    <p class="text-slate-600 mb-4 leading-relaxed">On April 7, 1998, Guinness Publishing Limited signs MOU recognizing the Chowdhurys as first and fastest circumnavigators.</p>
                                    <p class="text-sm text-red-600 font-semibold mb-4">📍 Legal Settlement</p>
                                    <div class="space-y-2">
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            ✓ Official recognition restored
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            ✓ Choudhury Trophy named
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            ✓ Legacy secured for Kolkata
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-600 to-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                            <div class="md:w-5/12 md:pl-8 pl-20 md:pl-8 pb-8 md:pb-0">
                                <div class="md:hidden mb-4">
                                    <div class="inline-block px-4 py-2 bg-red-600 text-white rounded-full font-bold text-lg mb-3 shadow-lg">1998</div>
                                    <h3 class="text-xl font-bold text-slate-900 mb-2">Victory and Recognition 🏆</h3>
                                    <p class="text-slate-600 mb-3 text-sm leading-relaxed">On April 7, 1998, Guinness Publishing Limited signs MOU recognizing the Chowdhurys as first and fastest circumnavigators.</p>
                                    <p class="text-xs text-red-600 font-semibold mb-3">📍 Legal Settlement</p>
                                    <div class="space-y-2 mb-4">
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ Official recognition restored</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ Choudhury Trophy named</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">✓ Legacy secured for Kolkata</div>
                                    </div>
                                </div>
                                <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-red-200">
                                    <img src="/images/gallery/scan8.jpg" alt="Victory" class="w-full h-48 md:h-64 object-cover">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 6: Present -->
                    <div class="relative">
                        <div class="md:flex md:items-center md:justify-between md:flex-row-reverse">
                            <div class="md:w-5/12 md:text-left md:pl-8">
                                <div class="hidden md:block">
                                    <div class="inline-block px-4 py-2 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-full font-bold text-xl mb-4 shadow-lg">Present</div>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">Continuing Legacy</h3>
                                    <p class="text-slate-600 mb-4 leading-relaxed">The Chowdhurys continue to inspire adventurers worldwide, with their eyes set on bigger targets and new challenges.</p>
                                    <p class="text-sm text-amber-600 font-semibold mb-4">📍 Kolkata, India</p>
                                    <div class="space-y-2">
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            • Guinness World Records Road Challenge
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-sm text-red-700 mr-2 mb-2">
                                            • Inspiration for future adventurers
                                        </div>
                                        <div class="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-sm text-amber-700 mr-2 mb-2">
                                            • Kolkata on world map
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-600 to-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                            <div class="md:w-5/12 md:pr-8 pl-20 md:pl-0 pb-8 md:pb-0">
                                <div class="md:hidden mb-4">
                                    <div class="inline-block px-4 py-2 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-full font-bold text-lg mb-3 shadow-lg">Present</div>
                                    <h3 class="text-xl font-bold text-slate-900 mb-2">Continuing Legacy</h3>
                                    <p class="text-slate-600 mb-3 text-sm leading-relaxed">The Chowdhurys continue to inspire adventurers worldwide, with their eyes set on bigger targets and new challenges.</p>
                                    <p class="text-xs text-amber-600 font-semibold mb-3">📍 Kolkata, India</p>
                                    <div class="space-y-2 mb-4">
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• Guinness World Records Road Challenge</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• Inspiration for future adventurers</div>
                                        <div class="flex items-center gap-2 text-xs text-slate-700">• Kolkata on world map</div>
                                    </div>
                                </div>
                                <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200">
                                    <img src="/images/gallery/scan11.jpg" alt="Present" class="w-full h-48 md:h-64 object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer CTA -->
    <div class="bg-gradient-to-r from-red-600 to-amber-600 py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Inspired by Their Journey?</h2>
            <p class="text-lg text-red-50 mb-8">Discover more about their incredible achievements and ongoing legacy.</p>
            <a href="/blog" class="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-red-50 transition-all duration-300 hover:scale-105 shadow-xl">
                Explore More
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
            </a>
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
