<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
    <img src="../../assets/images/logo.jpeg" alt="logo" class="h-10">

    <ul class="flex gap-8 text-sm font-medium items-center">
      <li><router-link to="/" class="hover:text-yellow-300">{{ navLabels.home }}</router-link></li>
      <li><router-link to="/About" class="hover:text-yellow-300">{{ navLabels.about }}</router-link></li>
      <li><router-link to="/Service" class="hover:text-yellow-300">{{ navLabels.services }}</router-link></li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">{{ navLabels.gallery }}<span>⏑</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><router-link to="/Photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ navLabels.photos }}</router-link></li>
          <li><router-link to="/Video" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ navLabels.videos }}</router-link></li>
        </ul>
      </li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">{{ navLabels.destination }}<span>⏑</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
          <li><router-link to="/North" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ navLabels.north }}</router-link></li>
          <li><router-link to="/South" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ navLabels.south }}</router-link></li>
          <li><router-link to="/West" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ navLabels.west }}</router-link></li>
          <li><router-link to="/East" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ navLabels.east }}</router-link></li>
          <li><router-link to="/Kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ navLabels.kigali }}</router-link></li>
        </ul>
      </li>
      <li><router-link to="/Contact" class="hover:text-yellow-300">{{ navLabels.contact }}</router-link></li>

      <li class="flex items-center">
        <label for="language" class="sr-only">Language</label>
        <select
          id="language"
          v-model="language"
          class="bg-green-700 border border-green-600 text-white rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          <option value="eng">English</option>
          <option value="kin">Kinyarwanda</option>
          <option value="fra">Français</option>
        </select>
      </li>
      <li><RouterLink to="/Login" class="bg-yellow-400 text-green-900 px-4 py-1 rounded font-semibold hover:bg-yellow-500">Login</RouterLink></li>
      <li><RouterLink to="/Register" class="bg-yellow-400 text-green-900 px-4 py-1 rounded font-semibold hover:bg-yellow-500">Register</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useI18n } from '../../composables/useI18n'

const { language, navLabels, setLanguage } = useI18n()
</script>