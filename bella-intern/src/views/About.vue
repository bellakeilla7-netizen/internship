<template>
  <!-- ABOUT SECTION -->
  <section
    class="relative min-h-screen bg-gradient-to-b from-white to-green-50 overflow-hidden px-6 py-24"
  >
    <!-- Decorative Background -->
    <div
      class="absolute top-0 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-3xl opacity-50"
    ></div>

    <!-- Container -->
    <div
      class="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
    >
      <!-- IMAGE SIDE -->
      <div class="relative">
        <!-- Main Image -->
        <div
          class="overflow-hidden rounded-[40px] shadow-2xl"
        >
          <img
            src="../assets/images/logo.jpeg"
            alt="Rwanda"
            class="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <!-- Floating Card -->
        <div
          class="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-6 w-64"
        >
          <h2 class="text-4xl font-extrabold text-green-600">
            1000+
          </h2>

          <p class="text-gray-600 mt-2">
            Beautiful hills and breathtaking landscapes.
          </p>
        </div>

        <!-- Floating Experience Card -->
        <div
          class="absolute top-8 -right-8 bg-green-600 text-white rounded-3xl shadow-2xl p-6 w-72"
        >
          <h3 class="text-2xl font-bold mb-3">
            Why Visit Rwanda?
          </h3>

          <p class="text-green-100 leading-relaxed">
            Experience wildlife, culture, adventure,
            modern cities, and unforgettable hospitality.
          </p>
        </div>
      </div>

      <!-- CONTENT SIDE -->
      <div>
        <!-- Small Tag -->
        <div
          class="inline-flex items-center gap-3 bg-green-100 text-green-700 px-5 py-2 rounded-full mb-8 shadow"
        >
          <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

          <p class="text-sm font-semibold uppercase tracking-[3px]">
            About Rwanda
          </p>
        </div>

        <!-- Heading -->
        <h1
          class="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8"
        >
          The Beautiful
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400"
          >
            Land of a Thousand Hills
          </span>
        </h1>

        <!-- Description -->
        <p
          class="text-lg text-gray-700 leading-relaxed mb-6"
        >
          Rwanda is one of Africa’s most peaceful and
          breathtaking destinations. Known for its green hills,
          mountain gorillas, vibrant traditions, and modern cities,
          Rwanda offers a unique blend of nature, culture,
          and adventure.
        </p>

        <p
          class="text-lg text-gray-700 leading-relaxed mb-10"
        >
          From the lively streets of Kigali to the calm shores
          of Lake Kivu and the incredible wildlife in Volcanoes
          National Park, every journey in Rwanda creates
          unforgettable memories.
        </p>

        <!-- FEATURES -->
        <div class="grid sm:grid-cols-2 gap-6 mb-10">
          <!-- Feature -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div
              class="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl mb-4"
            >
              <div class="w-6 h-6 bg-green-600 rounded-md"></div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Gorilla Trekking
            </h3>

            <p class="text-gray-600">
              Meet rare mountain gorillas in Volcanoes National Park.
            </p>
          </div>

          <!-- Feature -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div
              class="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl mb-4"
            >
              <div class="w-6 h-6 border-4 border-green-600 rounded-full"></div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Scenic Nature
            </h3>

            <p class="text-gray-600">
              Explore forests, volcanoes, lakes, and rolling hills.
            </p>
          </div>

          <!-- Feature -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div
              class="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl mb-4"
            >
              <div class="w-7 h-1 bg-green-600 rounded-full"></div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Adventure Tours
            </h3>

            <p class="text-gray-600">
              Enjoy hiking, safaris, kayaking, and outdoor activities.
            </p>
          </div>

          <!-- Feature -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div
              class="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl mb-4"
            >
              <div class="w-6 h-6 bg-green-600 rotate-45"></div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Friendly Culture
            </h3>

            <p class="text-gray-600">
              Experience warmth, hospitality, and rich traditions.
            </p>
          </div>
        </div>

        <!-- BUTTONS -->
        <div class="flex flex-col sm:flex-row gap-5">
          <button
            class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300"
          >
            Explore Rwanda
          </button>

          <button
            class="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>

    <!-- BOTTOM STATS -->
    <div
      class="relative z-10 max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      <!-- Card -->
      <div
        class="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
      >
        <h2 class="text-5xl font-extrabold text-green-600">
          1M+
        </h2>

        <p class="text-gray-600 mt-3">
          Annual Visitors
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
          Tourist Attractions
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
          Adventure Experience
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
          Visitor Satisfaction
        </p>
      </div>
    </div>
  </section>
</template>