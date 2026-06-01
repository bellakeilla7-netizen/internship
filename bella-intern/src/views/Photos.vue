<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
import gorillas from '../assets/images/gorillas.jpeg'
import kivu from '../assets/images/kivu.jpeg'
import national from '../assets/images/national.jpeg'
import kigali from '../assets/images/kgl.jpeg'
import culture from '../assets/images/culture.jpeg'
import birds from '../assets/images/birds.jpeg'
import landscape from '../assets/images/landscape.jpeg'
import sunset from '../assets/images/sunset.jpeg'

const photoCategories = {
  all: 'All',
  wildlife: 'Wildlife',
  landscapes: 'Landscapes',
  culture: 'Culture',
  cities: 'Cities',
  lakes: 'Lakes'
}

const activeCategory = ref('all')

const photos = ref([
  { id: 1, src: gorillas, alt: 'Mountain Gorilla Trek', category: 'wildlife' },
  { id: 2, src: kivu, alt: 'Lake Kivu Shoreline', category: 'lakes' },
  { id: 3, src: national, alt: 'National Park Safari', category: 'wildlife' },
  { id: 4, src: kigali, alt: 'Kigali City Streets', category: 'cities' },
  { id: 5, src: culture, alt: 'Cultural Celebration', category: 'culture' },
  { id: 6, src: birds, alt: 'Bird Watching', category: 'wildlife' },
  { id: 7, src: landscape, alt: 'Rwandan Landscape View', category: 'landscapes' },
  { id: 8, src: sunset, alt: 'Sunset Over Rwanda', category: 'landscapes' }
])

const selectedPhoto = ref(null)
const showModal = ref(false)

const filteredPhotos = computed(() => {
  return activeCategory.value === 'all'
    ? photos.value
    : photos.value.filter(photo => photo.category === activeCategory.value)
})

const openModal = (photo) => {
  selectedPhoto.value = photo
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedPhoto.value = null
}
</script>

<template>
  <section class="relative min-h-105 bg-cover bg-center flex items-center justify-center overflow-hidden"
    style="background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 text-center text-white px-6">
      <span class="inline-block bg-yellow-400 text-green-900 px-5 py-2 rounded-full text-sm font-semibold mb-6">
        🇷🇼 Photo Gallery
      </span>
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6">{{ t('photos.title') }}</h1>
      <p class="text-lg md:text-2xl max-w-3xl mx-auto">{{ t('photos.subtitle') }}</p>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-6 py-20">
    <div class="mb-12 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <button
          v-for="(label, key) in photoCategories"
          :key="key"
          @click="activeCategory = key"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition duration-300',
            activeCategory === key
              ? 'bg-green-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ label }}
        </button>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div
        v-for="photo in filteredPhotos"
        :key="photo.id"
        @click="openModal(photo)"
        class="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer h-72"
      >
        <img :src="photo.src" :alt="photo.alt" class="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <p class="text-lg font-bold">{{ photo.alt }}</p>
          <span class="inline-flex rounded-full bg-green-600 px-3 py-1 text-sm font-semibold">{{ photo.category }}</span>
        </div>
      </div>
    </div>

    <div v-if="filteredPhotos.length === 0" class="text-center py-12">
      <p class="text-2xl text-gray-500">No photos found in this category.</p>
    </div>

    <div class="mb-16 rounded-4xl border border-green-200 bg-green-50 p-8">
      <div class="flex flex-col md:flex-row justify-between gap-4 items-start mb-8">
        <div>
          <h2 class="text-3xl font-bold text-green-900 mb-3">Destination Highlights</h2>
          <p class="text-gray-700 max-w-3xl">
            Every image reflects a top Rwandan destination—from gorilla treks and lakefront getaways to city life in Kigali and vibrant cultural celebrations.
            These curated visuals make it easier for visitors to choose the right experience and feel inspired before they travel.
          </p>
        </div>
        <span class="inline-flex rounded-full bg-green-600 px-4 py-2 text-white text-sm font-semibold">
          Curated for Travel
        </span>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="rounded-3xl overflow-hidden bg-white shadow-sm border border-green-100 p-6">
          <h3 class="text-xl font-semibold text-green-900 mb-3">Wildlife & Nature</h3>
          <p class="text-gray-700 leading-relaxed">
            Discover Rwanda's protected parks and iconic wildlife. The gallery highlights national treasures like mountain gorillas, rare bird species, and serene forest trails.
          </p>
        </div>
        <div class="rounded-3xl overflow-hidden bg-white shadow-sm border border-green-100 p-6">
          <h3 class="text-xl font-semibold text-green-900 mb-3">Culture & Cities</h3>
          <p class="text-gray-700 leading-relaxed">
            Enjoy vivid city scenes, traditional village celebrations, local markets, and cultural festivals that capture the warmth and energy of Rwandan life.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-4xl p-10 shadow-lg">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">About Our Photo Collection</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Explore stunning scenes from Rwanda and get inspired by carefully selected destination photos. This gallery showcases wildlife, landscape escapes, lakefront retreats, cultural traditions, and dynamic city life.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Each image is chosen to give travelers a stronger sense of place and to help them plan the best Rwandan experiences.
      </p>
    </div>
  </section>

  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
    <div class="relative w-full max-w-4xl">
      <button @click="closeModal"
        class="absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition duration-300 z-10">
        ✕
      </button>
      <img v-if="selectedPhoto" :src="selectedPhoto.src" :alt="selectedPhoto.alt" class="w-full h-auto rounded-3xl object-cover max-h-[80vh]" />
      <div v-if="selectedPhoto" class="bg-white p-6 rounded-b-3xl mt-4">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedPhoto.alt }}</h3>
        <span class="inline-flex rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-semibold">{{ selectedPhoto.category }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>