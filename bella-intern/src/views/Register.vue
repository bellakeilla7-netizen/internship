<template>
  <div class="flex items-center justify-center bg-green-100 min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">REGISTER NOW</h2>
      <form class="flex flex-col gap-4 items-center">
        <input 
        v-model="name"  
        type="name"
        placeholder="please enter your name"
        required
        class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Please enter your email"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Please enter your password"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />
        <select
          v-model="gender"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        >
          <option value="" disabled>Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          v-model="telephone"
          type="tel"
          placeholder="Please enter your number"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />
        <input
          v-model="age"
          type="number"
          placeholder="Please enter your age"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />
        <button
          type="submit"
          class="bg-green-800 text-white py-2 rounded hover:bg-green-700 transition duration-300"
        >
          SIGN IN
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const gender = ref('')
const telephone = ref('')
const age = ref('')
</script>