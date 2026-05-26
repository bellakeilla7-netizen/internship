<script setup>
import sosLogo from '../assets/sos-logo.png'

const staff = [
  {
    name: 'JEAN BAPTISTE',
    role: 'Principal',
    department: 'Administration',
  },
  {
    name: 'Uwimana Charlotte',
    role: 'Mathematics Teacher',
    department: 'Mathematics',
  },
  {
    name: 'UWINEZA',
    role: 'Science Teacher',
    department: 'Science',
  },
  {
    name: 'UWAYEZU',
    role: 'Secretary',
    department: 'Office',
  },
]

const news = [
  'New library officially opened for students.',
  'Science fair will take place next Friday.',
  'Registration for new students is now open.',
]
</script>

<template>
  <div class="min-h-screen bg-gray-100">

    <nav class="bg-blue-700 text-white shadow-lg">
      <div class="max-w-6xl mx-auto flex items-center justify-between p-4">

        <div class="flex items-center gap-4">
          <img
            :src="sosLogo"
            alt="SOS Logo"
            class="w-12 h-12 rounded-full bg-white p-1"
          />

          <h1 class="text-3xl font-bold">
            SOS School
          </h1>
        </div>

      </div>
    </nav>

    <section class="bg-blue-600 text-white py-20">
      <div class="max-w-5xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          Welcome to SOS School
        </h2>

        <p class="text-xl leading-relaxed">
          Providing quality education, discipline, and a supportive learning
          environment for every student.
        </p>

      
      </div>
    </section>

    <div class="max-w-6xl mx-auto p-6">

      <div class="grid md:grid-cols-3 gap-6 mb-8">

        <div class="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 class="text-4xl font-bold text-blue-700">500+</h3>
          <p class="text-gray-600 mt-2">Students</p>
        </div>

        <div class="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 class="text-4xl font-bold text-blue-700">40+</h3>
          <p class="text-gray-600 mt-2">Teachers</p>
        </div>

        <div class="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 class="text-4xl font-bold text-blue-700">15</h3>
          <p class="text-gray-600 mt-2">Departments</p>
        </div>

      </div>

      <div class="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          About SOS School
        </h2>

        <p class="text-gray-700 text-lg leading-relaxed">
          SOS School is dedicated to helping students grow academically,
          socially, and personally. We focus on discipline, creativity, and
          leadership while creating a safe and inspiring environment for
          learning.
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">
          School Staff
        </h2>

        <table class="w-full overflow-hidden rounded-xl">
          <thead class="bg-blue-700 text-white">
            <tr>
              <th class="p-4 text-left">Name</th>
              <th class="p-4 text-left">Role</th>
              <th class="p-4 text-left">Department</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="person in staff"
              :key="person.name"
              class="border-b hover:bg-gray-100 transition"
            >
              <td class="p-4">{{ person.name }}</td>
              <td class="p-4">{{ person.role }}</td>
              <td class="p-4">{{ person.department }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-white rounded-2xl shadow-md p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">
          Latest News
        </h2>

        <div
          v-for="item in news"
          :key="item"
          class="bg-gray-100 p-4 rounded-lg mb-4 hover:bg-blue-50 transition"
        >
          <p class="text-gray-700">
            {{ item }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>