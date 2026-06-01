<template>
  <section
    id="services"
    class="py-24 bg-gradient-to-b from-green-50 to-white"
  >
    <!-- Heading -->
    <div class="text-center mb-16 px-6">
        <span class="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">Discover Rwanda</span>

        <h2 class="mt-6 text-4xl md:text-5xl font-bold text-gray-800">{{ t('service.title') }}</h2>

        <p class="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">{{ t('service.subtitle') }}</p>
    </div>

    <!-- Services Grid -->
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <!-- Gorilla Trekking -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-xl h-[450px]"
      >
        <img :src="gorillas" alt="Gorilla Trekking" class="w-full h-full object-cover rounded-3xl" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl"
        ></div>
        <div class="absolute bottom-0 p-8 text-white">
          <h3 class="text-3xl font-bold mb-3">Gorilla Trekking</h3>
          <p class="text-gray-200 mb-5">
            Explore Volcanoes National Park and experience the majestic mountain gorillas in their natural habitat.
          </p>
          <button
            class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Tour
          </button>
        </div>
      </div>

      <!-- Lake Kivu -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-xl h-[450px]"
      >
        <img :src="kivu" alt="Lake Kivu" class="w-full h-full object-cover rounded-3xl" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl"
        ></div>
        <div class="absolute bottom-0 p-8 text-white">
          <div class="text-5xl mb-3"></div>
          <h3 class="text-3xl font-bold mb-3">Lake Adventures</h3>
          <p class="text-gray-200 mb-5">
            Cruise across Lake Kivu, relax on beautiful beaches, and enjoy unforgettable sunsets.
          </p>
          <button
            class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Tour
          </button>
        </div>
      </div>

      <!-- National Parks -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-xl h-[450px]"
      >
        <img :src="national" alt="National Parks" class="w-full h-full object-cover rounded-3xl" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl"
        ></div>
        <div class="absolute bottom-0 p-8 text-white">
          <div class="text-5xl mb-3"></div>
          <h3 class="text-3xl font-bold mb-3">National Park Tours</h3>
          <p class="text-gray-200 mb-5">
            Experience Rwanda's breathtaking landscapes, wildlife, forests, and scenic hiking trails.
          </p>
          <button
            class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Tour
          </button>
        </div>
      </div>

      <!-- Kigali City -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-xl h-[450px]"
      >
        <img :src="kigali" alt="Kigali City" class="w-full h-full object-cover rounded-3xl" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl"
        ></div>
        <div class="absolute bottom-0 p-8 text-white">
          <div class="text-5xl mb-3"></div>
          <h3 class="text-3xl font-bold mb-3">Kigali City Tours</h3>
          <p class="text-gray-200 mb-5">
            Discover Kigali's vibrant culture, museums, markets, restaurants, and modern attractions.
          </p>
          <button
            class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Tour
          </button>
        </div>
      </div>

      <!-- Cultural Experiences -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-xl h-[450px]"
      >
        <img :src="culture" alt="Cultural Experiences" class="w-full h-full object-cover rounded-3xl" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl"
        ></div>
        <div class="absolute bottom-0 p-8 text-white">
          <div class="text-5xl mb-3"></div>
          <h3 class="text-3xl font-bold mb-3">Cultural Experiences</h3>
          <p class="text-gray-200 mb-5">
            Immerse yourself in Rwandan traditions, dance, music, and local craft villages.
          </p>
          <button
            class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Tour
          </button>
        </div>
      </div>

      <!-- Bird Watching -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-xl h-[450px]"
      >
        <img :src="birds" alt="Bird Watching" class="w-full h-full object-cover rounded-3xl" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl"
        ></div>
        <div class="absolute bottom-0 p-8 text-white">
          <div class="text-5xl mb-3"></div>
          <h3 class="text-3xl font-bold mb-3">Bird Watching</h3>
          <p class="text-gray-200 mb-5">
            Discover Rwanda's diverse birdlife in national parks and wetlands.
          </p>
          <button
            class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Tour
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Stats -->
    <div
      class="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 px-6"
    >
      <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h3 class="text-4xl font-bold text-green-600">500+</h3>
        <p class="text-gray-600 mt-2">Happy Travelers</p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h3 class="text-4xl font-bold text-green-600">20+</h3>
        <p class="text-gray-600 mt-2">Tour Packages</p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h3 class="text-4xl font-bold text-green-600">10+</h3>
        <p class="text-gray-600 mt-2">Destinations</p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h3 class="text-4xl font-bold text-green-600">24/7</h3>
        <p class="text-gray-600 mt-2">Support</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import gorillas from '../assets/images/gorillas.jpeg'
import kivu from '../assets/images/kivu.jpeg'
import national from '../assets/images/national.jpeg'
import kigali from '../assets/images/kgl.jpeg'
import culture from '../assets/images/culture.jpeg'
import birds from '../assets/images/birds.jpeg'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>