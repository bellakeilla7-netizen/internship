 
 
<script setup>
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('logo.jpeg');"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div class="relative text-center px-6 max-w-3xl">
      
      <!-- Small Tag -->
      <p
        class="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm mb-6 tracking-wide"
      >
        Explore Africa’s Hidden Gem
      </p>

      <!-- Main Heading -->
      <h1
        class="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
      >
        Welcome to <span class="text-green-400">Rwanda</span>
      </h1>

      <!-- Description -->
      <p
        class="text-lg md:text-2xl text-gray-200 mb-8 leading-relaxed"
      >
        Discover breathtaking landscapes, rich culture, mountain gorillas,
        and the beauty of the Land of a Thousand Hills.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Explore Now
        </button>

        <button
          class="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Learn More
        </button>
      </div>
    </div>

    <!-- Bottom Fade -->
    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
    ></div>
  </section>
</template>