<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import landscape from '../assets/images/landscape.jpeg'
import culture from '../assets/images/culture.jpeg'
import birds from '../assets/images/birds.jpeg'
import sunset from '../assets/images/sunset.jpeg'
const { t } = useI18n()

const attractions = [
  {
    icon: '',
    title: 'Genocide Memorial',
    description: 'Important historical site for remembrance and education.'
  },
  {
    icon: '',
    title: 'Tea Plantations',
    description: 'Visit expansive tea estates and learn about Rwanda\'s agriculture.'
  },
  {
    icon: '',
    title: 'Mountain Vistas',
    description: 'Stunning views of rolling hills and picturesque valleys.'
  },
  {
    icon: '',
    title: 'Cultural Experiences',
    description: 'Meet local communities and experience authentic Rwandan traditions.'
  }
]

const galleries = [
  { id: 1, src: landscape, alt: 'Eastern Province landscape' },
  { id: 2, src: culture, alt: 'Local culture' },
  { id: 3, src: birds, alt: 'Bird watching' },
  { id: 4, src: sunset, alt: 'Sunset over hills' }
]


</script>

<template>
  <section class="relative min-h-125 bg-cover bg-center flex items-center justify-center overflow-hidden"
    :style="{ backgroundImage: `url(${landscape})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 text-center text-white px-6">
      <span class="inline-block bg-green-500 text-emerald-950 px-5 py-2 rounded-full text-sm font-semibold mb-6">🇷🇼 {{ t('east.title') }}</span>
      <h1 class="text-6xl md:text-7xl font-extrabold mb-6">{{ t('east.title') }}</h1>
      <p class="text-xl md:text-2xl max-w-3xl mx-auto">Discover tea hills, cultural villages, and quiet Eastern Rwanda adventures.</p>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-6 py-20">
    <div class="mb-20">
      <h2 class="text-4xl font-bold text-green-900 mb-6">{{ t('east.title') }}</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">{{ t('east.about1') }}</p>
      <p class="text-lg text-gray-700 leading-relaxed">{{ t('east.about2') }}</p>
    </div>

    <div class="mb-20">
      <h2 class="text-4xl font-bold text-green-900 mb-12">Top Attractions</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(attraction, index) in attractions" :key="index"
          class="bg-linear-to-br from-lime-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
          <div class="text-5xl mb-4">{{ attraction.icon }}</div>
          <h3 class="text-xl font-bold text-green-900 mb-3">{{ attraction.title }}</h3>
          <p class="text-gray-700">{{ attraction.description }}</p>
        </div>
      </div>
    </div>

    <div class="mb-20">
      <h2 class="text-4xl font-bold text-green-900 mb-12">Gallery</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in galleries" :key="item.id"
          class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
          <img :src="item.src" :alt="item.alt"
            class="w-full h-64 object-cover group-hover:scale-110 transition duration-300">
        </div>
      </div>
    </div>

    
        
      


    <div class="bg-linear-to-r from-lime-600 to-green-600 text-white rounded-xl p-10 mb-10">
      <h2 class="text-3xl font-bold mb-4">Best Time to Visit</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-2"> Rainy Season</h3>
          <p>April - May & November - December. Lush greenery, vibrant landscapes.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Dry Season</h3>
          <p>June - September & January - February. Clear skies and perfect for exploration.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2"> Year-Round</h3>
          <p>Mild climate, agricultural tours available throughout the year.</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a href="/Contact" class="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transition duration-300 inline-block">{{ t('east.cta') }}</a>
    </div>
  </section>
</template>

<style scoped>
</style>