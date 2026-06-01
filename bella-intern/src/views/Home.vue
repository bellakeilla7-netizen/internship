<script setup>
import logo from '../assets/images/logo.jpeg'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center overflow-hidden"
    :style="{ backgroundImage: `url(${logo})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-white/80"></div>

    <!-- Decorative Background -->
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-green-200 blur-3xl rounded-full opacity-40"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-125 h-125 bg-emerald-100 blur-3xl rounded-full opacity-50"
    ></div>

    <!-- CONTENT -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center"
    >
      <!-- LEFT SIDE -->
      <div>
        <!-- Tag -->
        <div
          class="inline-flex items-center gap-3 bg-green-100 text-green-700 px-5 py-2 rounded-full mb-8 shadow"
        >
          <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

          <p class="text-sm font-semibold uppercase tracking-wider">
            {{ t('home.tag') }}
          </p>
        </div>

        <!-- Heading -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-6">{{ t('home.title') }}</h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{{ t('home.subtitle') }}</p>

        <!-- FEATURES -->
        <div class="grid sm:grid-cols-2 gap-6 mb-10">
          <!-- Feature -->
          <div
            class="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div
              class="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl text-2xl mb-4"
            >
              
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Gorilla Trekking
            </h3>

            <p class="text-gray-600">
              Experience unforgettable wildlife adventures.
            </p>
          </div>

          <!-- Feature -->
          <div
            class="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div
              class="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl text-2xl mb-4"
            >
              
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Scenic Views
            </h3>

            <p class="text-gray-600">
              Explore mountains, forests, and rolling hills.
            </p>
          </div>

          <!-- Feature -->
          <div
            class="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div
              class="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl text-2xl mb-4"
            >
              
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Nature Tours
            </h3>

            <p class="text-gray-600">
              Enjoy safaris, hiking, kayaking, and adventure.
            </p>
          </div>

          <!-- Feature -->
          <div
            class="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div
              class="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl text-2xl mb-4"
            >
              
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Warm Hospitality
            </h3>

            <p class="text-gray-600">
              Meet friendly people and rich cultural traditions.
            </p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-5 mb-12">
          <button
            class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300"
          >
            Explore Now
          </button>

          <button
            class="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
          >
            Learn More
          </button>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap gap-10">
          <div>
            <h2 class="text-4xl font-extrabold text-green-600">
              1M+
            </h2>

            <p class="text-gray-600 mt-1">
              Visitors Yearly
            </p>
          </div>

          <div>
            <h2 class="text-4xl font-extrabold text-green-600">
              50+
            </h2>

            <p class="text-gray-600 mt-1">
              Tourist Sites
            </p>
          </div>

          <div>
            <h2 class="text-4xl font-extrabold text-green-600">
              100%
            </h2>

            <p class="text-gray-600 mt-1">
              Natural Beauty
            </p>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="relative">
        <!-- Main Image -->
        <div
          class="overflow-hidden rounded-[40px] shadow-2xl"
        >
          <img
            :src="logo"
            alt="Rwanda"
            class="w-full h-162.5 object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <!-- Floating Card -->
        <div
          class="absolute top-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl w-64"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Top Destinations
          </h3>

          <ul class="space-y-3 text-gray-600">
            <li>Kigali City</li>
            <li> Lake Kivu</li>
            <li>Nyungwe Forest</li>
            <li> Volcanoes Park</li>
          </ul>
        </div>

        <!-- Bottom Card -->
        <div
          class="absolute bottom-8 -right-8 bg-green-600 text-white rounded-3xl p-6 shadow-2xl w-72"
        >
          <h3 class="text-3xl font-extrabold mb-2">
            Adventure Awaits
          </h3>

          <p class="text-green-100 leading-relaxed">
            Discover amazing wildlife, nature trails,
            and unforgettable tourism experiences.
          </p>
        </div>
      </div>
    </div>

    <!-- BOTTOM STATS -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24"
    >
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Card -->
        <div
          class="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <h2 class="text-5xl font-extrabold text-green-600">
            1000+
          </h2>

          <p class="text-gray-600 mt-3">
            Beautiful Hills
          </p>
        </div>

        <!-- Card -->
        <div
          class="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <h2 class="text-5xl font-extrabold text-green-600">
            24/7
          </h2>

          <p class="text-gray-600 mt-3">
            Adventure
          </p>
        </div>

        <!-- Card -->
        <div
          class="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <h2 class="text-5xl font-extrabold text-green-600">
            50+
          </h2>

          <p class="text-gray-600 mt-3">
            Attractions
          </p>
        </div>

        <!-- Card -->
        <div
          class="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <h2 class="text-5xl font-extrabold text-green-600">
            5★
          </h2>

          <p class="text-gray-600 mt-3">
            Visitor Experience
          </p>
        </div>
      </div>
    </div>
  </section>
</template>