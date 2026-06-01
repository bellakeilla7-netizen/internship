<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import national from '../assets/images/national.jpeg'
import gorillas from '../assets/images/gorillas.jpeg'
import kivu from '../assets/images/kivu.jpeg'
import birds from '../assets/images/birds.jpeg'
const { t } = useI18n()

const attractions = [
  {
    icon: '',
    title: 'Akagera National Park',
    description: 'Safari experiences with lions, elephants, giraffes, and diverse wildlife.'
  },
  {
    icon: '',
    title: 'Scenic Landscapes',
    description: 'Rolling hills, savanna plains, and stunning natural vistas.'
  },
  {
    icon: '',
    title: 'Lakes & Water',
    description: 'Beautiful lakes perfect for relaxation and water activities.'
  },
  {
    icon: '',
    title: 'Wildlife Reserves',
    description: 'Protected areas with unique fauna and bird watching opportunities.'
  }
]

const galleries = [
  { id: 1, src: national, alt: 'Akagera National Park landscape' },
  { id: 2, src: gorillas, alt: 'Mountain gorillas in the forest' },
  { id: 3, src: kivu, alt: 'Lake Kivu shoreline' },
  { id: 4, src: birds, alt: 'Bird watching in southern Rwanda' }
]


</script>

<template>
  <section class="relative min-h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
    style="background: linear-gradient(135deg, #d4a574 0%, #c19a6b 100%);">
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative z-10 text-center text-white px-6">
      <span class="inline-block bg-yellow-400 text-amber-900 px-5 py-2 rounded-full text-sm font-semibold mb-6">🇷🇼 {{ t('south.title') }}</span>
      <h1 class="text-6xl md:text-7xl font-extrabold mb-6">{{ t('south.title') }}</h1>
      <p class="text-xl md:text-2xl max-w-3xl mx-auto">{{ t('south.subtitle') }}</p>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-6 py-20">
    <div class="mb-20">
      <h2 class="text-4xl font-bold text-amber-900 mb-6">{{ t('south.title') }}</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">{{ t('south.about1') }}</p>
      <p class="text-lg text-gray-700 leading-relaxed">{{ t('south.about2') }}</p>
    </div>

    <div class="mb-20">
      <h2 class="text-4xl font-bold text-amber-900 mb-12">Top Attractions</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(attraction, index) in attractions" :key="index"
          class="bg-linear-to-br from-cyan-50 to-teal-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
          <div class="text-5xl mb-4">{{ attraction.icon }}</div>
          <h3 class="text-xl font-bold text-amber-900 mb-3">{{ attraction.title }}</h3>
          <p class="text-gray-700">{{ attraction.description }}</p>
        </div>
      </div>
    </div>

    <div class="mb-20">
      <h2 class="text-4xl font-bold text-amber-900 mb-12">Gallery</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in galleries" :key="item.id"
          class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
          <img :src="item.src" :alt="item.alt"
            class="w-full h-64 object-cover group-hover:scale-110 transition duration-300">
        </div>
      </div>
    </div>

    

    <div class="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-xl p-10 mb-10">
      <h2 class="text-3xl font-bold mb-4">Best Time to Visit</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-2"> Rainy Season</h3>
          <p>April - May & November - December. Green landscapes, bird watching.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2"> Dry Season</h3>
          <p>June - September & January - February. Prime safari season with excellent wildlife viewing.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Year-Round</h3>
          <p>Warm weather perfect for outdoor activities and exploration.</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a href="/Contact" class="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transition duration-300 inline-block">{{ t('south.cta') }}</a>
    </div>
  </section>
</template>

<style scoped>
</style>