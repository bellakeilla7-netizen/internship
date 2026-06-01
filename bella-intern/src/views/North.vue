<template>
  <!-- HERO SECTION with animated header and scroll indicator -->
  <section class="relative min-h-screen bg-linear-to-br from-green-700 to-green-900 flex items-center justify-center overflow-hidden" id="hero">
    <!-- Overlay for contrast -->
    <div class="absolute inset-0 bg-black/40"></div>
    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fadeInUp">
      <span class="inline-block bg-yellow-400 text-green-900 px-5 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeIn delay-200">🇷🇼 Northern Province</span>
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-wide animate-fadeInUp delay-400">Northern Province</h1>
      <p class="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto animate-fadeInUp delay-600">Explore misty mountains, primate reserves, and dramatic volcanic ridges in Rwanda's northern highlands.</p>
      <button @click="scrollToSection('#plan')" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 mb-4 animate-fadeInUp delay-800">Discover the North</button>
      <div class="mt-4 animate-bounce">
        <svg class="mx-auto w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </section>

  <!-- Content Sections with smooth scroll -->
  <section id="about" class="max-w-6xl mx-auto px-6 py-20 bg-white">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-green-900 mb-4 relative inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-green-600">
        Northern Province Highlights
      </h2>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto">Journey through misty forests, active volcanoes, and world-famous gorilla trekking in Rwanda's lush northern highlands.</p>
    </div>
    <!-- Interactive cards with hover effects -->
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(item, index) in aboutItems" :key="index" class="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 hover:bg-green-100 cursor-pointer" @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null">
        <div class="text-4xl mb-4">{{ item.icon }}</div>
        <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
        <p class="text-gray-700">{{ item.description }}</p>
        <!-- Animated underline on hover -->
        <div :class="{'w-0': hoveredIndex !== index, 'w-full': hoveredIndex === index}" class="h-1 bg-green-600 transition-all duration-300 mt-4"></div>
      </div>
    </div>
  </section>

  <!-- Interactive Gallery with hover zoom -->
  <section id="gallery" class="max-w-6xl mx-auto px-6 py-20 bg-gray-50">
    <h2 class="text-4xl font-bold text-green-900 mb-12 text-center">Gallery</h2>
    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="item in galleries" :key="item.id" class="overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition duration-300">
        <img :src="item.src" :alt="item.alt" class="w-full h-64 object-cover" />
      </div>
    </div>
  </section>

  <!-- Call-to-Action with animated button -->
  <section id="plan" class="max-w-4xl mx-auto px-6 py-20 bg-green-100 rounded-3xl shadow-lg text-center">
    <h2 class="text-4xl font-bold mb-4 text-green-900">Plan Your Adventure</h2>
    <p class="mb-8 text-lg text-gray-700">Get in touch and start exploring Rwanda's wonders today!</p>
    <a href="/Contact" class="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold shadow-lg transition duration-300 transform hover:scale-105">
      {{ t('contact.title') }}
    </a>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const aboutItems = [
  {
    icon: '',
    title: 'Volcanoes National Park',
    description: 'Home to mountain gorillas, volcanic peaks, and stunning hiking trails.',
  },
  {
    icon: '',
    title: 'Lush Forests',
    description: 'Rich biodiversity in dense rainforests with exotic wildlife.',
  },
  {
    icon: '',
    title: 'Traditional Villages',
    description: 'Experience authentic Rwandan culture and warm hospitality.',
  },
]

import national from '../assets/images/national.jpeg'
import gorillas from '../assets/images/gorillas.jpeg'
import landscape from '../assets/images/landscape.jpeg'
import birds from '../assets/images/birds.jpeg'

const galleries = [
  { id: 1, src: gorillas, alt: 'Mountain Gorillas' },
  { id: 2, src: landscape, alt: 'Forest Trail' },
  { id: 3, src: national, alt: 'Volcanoes National Park' },
  { id: 4, src: birds, alt: 'Forest wildlife' },
]

const hoveredIndex = ref(null)

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease forwards;
}
</style>