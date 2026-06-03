<script setup>
import { RouterView,useRoute } from 'vue-router';
import NavBar from './components/ui/NavBar.vue';
// import Home from './views/Home.vue'
//  import About from './views/About.vue';
//  import Service from './views/Service.vue'
//  import Photos from './views/Photos.vue';
//  import Video from './views/Video.vue';
//  import West from './views/West.vue';
//  import North from './views/North.vue'
//  import South from './views/South.vue';
//  import Kigali from './views/Kigali.vue';
//  import East from './views/East.vue';
import Footer from './components/ui/Footer.vue';

</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />

  </template>
