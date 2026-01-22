<template>
    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">The Timeline</h2>
                <p class="text-xl text-amber-200">Every adventure has its milestones</p>
            </div>

            <div class="relative max-w-4xl mx-auto">
                <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-400"></div>
                
                <div class="space-y-12">
                    <div class="relative flex items-center">
                        <div class="flex-1 text-right pr-8">
                            <h3 class="text-2xl font-bold text-amber-400">1989</h3>
                            <p class="text-slate-300 mt-2">First & Fastest Circumnavigation Record Set</p>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
                        <div class="flex-1"></div>
                    </div>

                    <div class="relative flex items-center">
                        <div class="flex-1"></div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
                        <div class="flex-1 pl-8">
                            <h3 class="text-2xl font-bold text-orange-400">1991</h3>
                            <p class="text-slate-300 mt-2">Fastest Circumnavigation - New Record Achieved</p>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-16">
                    <a href="/timeline" class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-lg group">
                        View Complete Timeline
                        <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
