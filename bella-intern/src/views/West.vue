<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import kivu from '../assets/images/kivu.jpeg'
import landscape from '../assets/images/landscape.jpeg'
import sunset from '../assets/images/sunset.jpeg'
import culture from '../assets/images/culture.jpeg'

const { t } = useI18n()

const attractions = [
  {
    icon: '',
    title: 'Nyungwe Forest',
    description: 'One of Africa\'s oldest rainforests with diverse wildlife and canopy walks.'
  },
  {
    icon: '',
    title: 'Lake Kivu',
    description: 'Beautiful freshwater lake perfect for relaxation, water sports, and sunset views.'
  },
  {
    icon: '',
    title: 'Beach Resorts',
    description: 'Waterfront accommodations and beach activities along Lake Kivu shores.'
  },
  {
    icon: '',
    title: 'Nature Activities',
    description: 'Hiking, kayaking, fishing, and adventure sports in pristine settings.'
  }
]

const galleries = [
  { id: 1, src: kivu, alt: 'Lake Kivu shoreline' },
  { id: 2, src: landscape, alt: 'Western landscape' },
  { id: 3, src: sunset, alt: 'Sunset over Lake Kivu' },
  { id: 4, src: culture, alt: 'Rwandan lakeside culture' }
]
</script>

<template>
  <section class="relative min-h-125 bg-cover bg-center flex items-center justify-center overflow-hidden"
    :style="{ backgroundImage: `url(${kivu})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 text-center text-white px-6">
      <span class="inline-block bg-teal-500 text-teal-950 px-5 py-2 rounded-full text-sm font-semibold mb-6">
        🇷🇼 Western Province
      </span>
        <h1 class="text-6xl md:text-7xl font-extrabold mb-6">{{ t('nav.west') }}</h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto">Lake Kivu sunsets, rainforest trails, and lakeside relaxation define the West.</p>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-6 py-20">
    <div class="mb-20">
      <h2 class="text-4xl font-bold text-teal-900 mb-6">About Western Province</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        The Western Province showcases Rwanda's lakefront beauty, with Lake Kivu beaches, lush forests, and vibrant local communities.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        Enjoy swimming, kayaking, and cultural tours, then relax with sunset views over calm waters and rainforest trails filled with wildlife.
      </p>
    </div>

    <div class="mb-20">
      <h2 class="text-4xl font-bold text-teal-900 mb-12">Top Attractions</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(attraction, index) in attractions" :key="index"
          class="bg-linear-to-br from-slate-50 to-emerald-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
          <div class="text-5xl mb-4">{{ attraction.icon }}</div>
          <h3 class="text-xl font-bold text-teal-900 mb-3">{{ attraction.title }}</h3>
          <p class="text-gray-700">{{ attraction.description }}</p>
        </div>
      </div>
    </div>

    <div class="mb-20">
      <h2 class="text-4xl font-bold text-teal-900 mb-12">Gallery</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in galleries" :key="item.id"
          class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
          <img :src="item.src" :alt="item.alt"
            class="w-full h-64 object-cover group-hover:scale-110 transition duration-300">
        </div>
      </div>
    </div>


    <div class="bg-linear-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-10 mb-10">
      <h2 class="text-3xl font-bold mb-4">Best Time to Visit</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-2"> Rainy Season</h3>
          <p>April - May & November - December. Lush forests, fewer crowds.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2"> Dry Season</h3>
          <p>June - September & January - February. Perfect for beach and water activities.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2"> Year-Round</h3>
          <p>Warm climate, beautiful sunsets, and lake activities throughout the year.</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a href="/Contact"
        class="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transition duration-300 inline-block">
        Book Your Getaway
      </a>
    </div>
  </section>
</template>

<style scoped>
</style>