 <script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import OverView from './OverView.vue'
import Bookings from './Bookings.vue'
import Users from './Users.vue'

const router = useRouter()
const activeMenu = ref('overview')

function logout() {
  router.push('/Login')
}
</script>
<template>
  <div class="flex min-h-screen bg-gray-100">
    <!--asidebar which will end be used to call the items component -->
    <aside class="w-68 bg-green-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-green-700">Dashboard</div>
      <nav class="flex-1 p-4">
        <button
          @click="activeMenu = 'overview'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2',
            activeMenu === 'overview' ? 'bg-green-700' : 'hover:bg-green-600'
          ]"
        >
          Overview
        </button>
        <button
          @click="activeMenu = 'booking'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2',
            activeMenu === 'booking' ? 'bg-green-700' : 'hover:bg-green-600'
          ]"
        >
          Booking
        </button>
        <button
          @click="activeMenu = 'users'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2',
            activeMenu === 'users' ? 'bg-green-700' : 'hover:bg-green-600'
          ]"
        >
          Users
        </button>
      </nav>

      <div class="p-4 border-t border-green-700">
        <button @click="logout" class="w-full bg-red-600 hover:bg-red-800 px-4 py-2 rounded">Logout</button>
      </div>
    </aside>
    <!-- main content -->
    <main class="flex-1 overflow-y-auto p-8">
      <OverView v-if="activeMenu === 'overview'" />
      <Bookings v-else-if="activeMenu === 'booking'" />
      <Users v-else-if="activeMenu === 'users'" />
    </main>
  </div>
</template>