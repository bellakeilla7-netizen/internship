<template>
  <div class="bg-[#0a0f0a] min-h-screen" style="font-family:'DM Sans',sans-serif;">

    <!-- ─── HERO ─── -->
    <section class="relative h-[70vh] w-full overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-1 z-30 flex">
        <div class="flex-1 bg-[#20603D]"/><div class="flex-1 bg-[#FAD201]"/><div class="flex-1 bg-[#1F4A9B]"/>
      </div>
      <img src="../assets/images/landscapes.jpg" alt="Rwanda"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms]"
        :class="loaded ? 'scale-100' : 'scale-110'" @load="loaded=true"/>
      <div class="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-[#0a0f0a]"/>

      <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pb-10">
        <span class="text-[#FAD201] text-[10px] tracking-[0.25em] uppercase font-semibold mb-5 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-[#FAD201] animate-pulse"/>
          Rwanda · Visual Stories
        </span>
        <h1 class="text-white font-black leading-none mb-4"
          style="font-family:'Cormorant Garamond',serif;font-size:clamp(2.8rem,7vw,6rem);">
          {{ t('video.title') }}<br/>
          <em class="text-[#FAD201]" style="font-style:italic;">in motion.</em>
        </h1>
        <p class="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">{{ t('video.subtitle') }}</p>
        <a href="#videos" class="bg-[#FAD201] hover:bg-yellow-300 text-green-900 font-bold px-7 py-3 rounded-full text-sm transition-all hover:scale-105">
          {{ t('video.cta') }}
        </a>
      </div>
    </section>

    <!-- ─── FILTER BAR ─── -->
    <div class="sticky top-0 z-20 bg-[#0a0f0a]/95 backdrop-blur border-b border-white/5 px-6 py-3">
      <div class="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div class="flex items-center gap-2 flex-wrap">
          <button v-for="cat in categories" :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all',
              activeCategory === cat.id
                ? 'bg-[#FAD201] text-green-900 border-[#FAD201] font-bold'
                : 'border-white/10 text-white/35 hover:border-white/30 hover:text-white/70'
            ]">{{ cat.label }}</button>
        </div>
        <div class="relative">
          <input v-model="search" type="text" placeholder="Search…"
            class="bg-white/5 border border-white/10 text-white text-xs px-4 py-2 pl-8 rounded-full outline-none focus:border-white/30 placeholder-white/20 w-44 transition-colors"/>
          <svg class="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- ─── VIDEO GRID ─── -->
    <section id="videos" class="py-16 px-6">
      <div class="max-w-6xl mx-auto">

        <!-- count -->
        <p class="text-white/20 text-[10px] tracking-widest uppercase mb-8">{{ filteredVideos.length }} films</p>

        <div v-if="filteredVideos.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="video in filteredVideos" :key="video.id"
            class="group bg-[#0f1a0f] rounded-xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            @click="openModal(video)">

            <!-- thumb -->
            <div class="relative overflow-hidden" style="height:190px;">
              <img :src="video.thumb" :alt="video.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"/>

              <!-- play btn -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-12 h-12 rounded-full bg-[#FAD201] flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                  <svg class="w-4 h-4 text-green-900 translate-x-0.5" fill="currentColor" viewBox="0 0 16 16"><path d="M6 3.5l6 4.5-6 4.5V3.5z"/></svg>
                </div>
              </div>

              <!-- badges -->
              <span class="absolute top-3 left-3 text-[9px] tracking-widest uppercase px-2 py-0.5 rounded font-semibold"
                :class="categoryColor(video.category)">{{ video.category }}</span>
              <span class="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">{{ video.duration }}</span>
            </div>

            <!-- info -->
            <div class="p-4">
              <h3 class="text-white/90 font-semibold text-sm leading-snug mb-1.5 group-hover:text-[#FAD201] transition-colors line-clamp-2"
                style="font-family:'Cormorant Garamond',serif;font-size:1.05rem;">{{ video.title }}</h3>
              <p class="text-white/30 text-xs leading-relaxed line-clamp-2">{{ video.desc }}</p>
              <div class="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                <span class="text-white/20 text-[10px]">{{ video.views }} views</span>
                <span class="text-white/15 text-[10px] tracking-widest uppercase">{{ video.year }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- empty -->
        <div v-else class="text-center py-20">
          <p class="text-white/20 text-base" style="font-family:'Cormorant Garamond',serif;">No films match your search.</p>
          <button @click="search=''; activeCategory='all'"
            class="mt-3 text-[#FAD201] text-[10px] tracking-widest uppercase border-b border-[#FAD201]/30 pb-0.5 bg-transparent cursor-pointer">
            Clear filters
          </button>
        </div>
      </div>
    </section>

    <!-- ─── STATS ─── -->
    <div class="border-y border-white/5 bg-[#0d1f0f]">
      <div class="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div v-for="s in filmStats" :key="s.label">
          <p class="text-[#FAD201] font-black text-2xl mb-1" style="font-family:'Cormorant Garamond',serif;">{{ s.value }}</p>
          <p class="text-white/20 text-[9px] tracking-widest uppercase">{{ s.label }}</p>
        </div>
      </div>
    </div>

    <!-- ─── CTA ─── -->
    <section class="py-20 px-6 text-center">
      <div class="max-w-xl mx-auto">
        <h2 class="text-white font-black mb-4 leading-none"
          style="font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,4vw,3.2rem);">
          See it on screen.<br/><em class="text-[#FAD201]" style="font-style:italic;">Live it in person.</em>
        </h2>
        <p class="text-white/30 text-sm leading-relaxed mb-8">Let our team build you an itinerary that takes you inside the stories you've just watched.</p>
        <a href="/contact" class="inline-flex items-center gap-2 bg-[#FAD201] hover:bg-yellow-300 text-green-900 font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105">
          Plan My Rwanda Trip →
        </a>
      </div>
    </section>

    <!-- ─── MODAL ─── -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="modalVideo" class="fixed inset-0 z-50 flex items-center justify-center p-4"
          style="background:rgba(0,0,0,0.88);" @click.self="closeModal">
          <div class="relative w-full max-w-3xl bg-[#0f1a0f] rounded-2xl overflow-hidden shadow-2xl">

            <button @click="closeModal"
              class="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- iframe loads only when modal is open -->
            <div class="aspect-video bg-black">
              <iframe
                :key="modalVideo.id"
                :src="`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0`"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="p-5 border-t border-white/5">
              <span class="text-[9px] tracking-widest uppercase font-semibold mb-1 block"
                :class="categoryColor(modalVideo.category)">{{ modalVideo.category }} · {{ modalVideo.duration }}</span>
              <h3 class="text-white font-bold mb-1"
                style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;">{{ modalVideo.title }}</h3>
              <p class="text-white/35 text-sm leading-relaxed">{{ modalVideo.desc }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const loaded = ref(false)
const activeCategory = ref('all')
const search = ref('')
const modalVideo = ref(null)

const categories = [
  { id: 'all',       label: 'All' },
  { id: 'wildlife',  label: 'Wildlife' },
  { id: 'culture',   label: 'Culture' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'kigali',    label: 'Kigali' },
  { id: 'nature',    label: 'Nature' },
]

// youtubeId = the video ID after watch?v= on YouTube
const videos = [
  {
    id: 1, category: 'wildlife', year: '2023', duration: '12:34', views: '284K',
    youtubeId: '6nHLGFnGHAI',
    title: 'Mountain Gorillas of Volcanoes National Park',
    desc: 'An intimate encounter with Rwanda\'s iconic silverback gorilla families deep in the Virunga mountains.',
    thumb: new URL('../assets/images/gorillas.jpg', import.meta.url).href,
  },
  {
    id: 2, category: 'nature', year: '2023', duration: '8:21', views: '119K',
    youtubeId: 'xNN7iTA57jM',
    title: 'Lake Kivu at Golden Hour',
    desc: 'Drifting across Central Africa\'s most beautiful lake as the sun melts into the Congo horizon.',
    thumb: new URL('../assets/images/kivu.jpg', import.meta.url).href,
  },
  {
    id: 3, category: 'kigali', year: '2024', duration: '15:08', views: '203K',
    youtubeId: '7Kp-8xNGbvU',
    title: 'Kigali: Africa\'s Cleanest City',
    desc: 'From Kimironko Market to the rooftop bars of Remera — exploring the capital that defied every expectation.',
    thumb: new URL('../assets/images/kigali.jpg', import.meta.url).href,
  },
  {
    id: 4, category: 'nature', year: '2023', duration: '6:45', views: '87K',
    youtubeId: 'K5KAc5CoCuk',
    title: 'Rwanda\'s Thousand Hills at Sunset',
    desc: 'Time-lapse and aerial footage capturing the iconic rolling hillscape as day turns to dusk.',
    thumb: new URL('../assets/images/sunset.jpg', import.meta.url).href,
  },
  {
    id: 5, category: 'adventure', year: '2024', duration: '22:10', views: '341K',
    youtubeId: 'FnmX0XKrBpU',
    title: 'Hiking the Virunga Volcanoes',
    desc: 'A full summit attempt of Mount Bisoke — craters, mist, and panoramic views over three countries.',
    thumb: new URL('../assets/images/landscapes.jpg', import.meta.url).href,
  },
  {
    id: 6, category: 'culture', year: '2023', duration: '18:33', views: '156K',
    youtubeId: 'RZGE3YOqnSw',
    title: 'Intore: The Dance of Heroes',
    desc: 'Rwanda\'s traditional warrior dance performed in its full ceremonial glory — a living piece of Rwandan identity.',
    thumb: new URL('../assets/images/kigali.jpg', import.meta.url).href,
  },
  {
    id: 7, category: 'wildlife', year: '2024', duration: '9:55', views: '72K',
    youtubeId: 'dqT-UlYlg1s',
    title: 'Nyungwe Forest: Canopy & Chimpanzees',
    desc: 'Walking the 70-metre canopy bridge and tracking chimpanzees through one of Africa\'s oldest rainforests.',
    thumb: new URL('@/assets/images/landscapes.jpg', import.meta.url).href,
  },
  {
    id: 8, category: 'adventure', year: '2023', duration: '11:20', views: '95K',
    youtubeId: 'K5KAc5CoCuk',
    title: 'Cycling the Land of a Thousand Hills',
    desc: 'Following the route of the Tour du Rwanda — misty climbs, forest descents, and epic vistas.',
    thumb: new URL('../assets/images/sunset.jpg', import.meta.url).href,
  },
  {
    id: 9, category: 'culture', year: '2024', duration: '27:44', views: '189K',
    youtubeId: 'S_9RMfAeflI',
    title: 'Kigali Genocide Memorial: A Story of Remembrance',
    desc: 'A respectful documentary exploring Rwanda\'s journey from tragedy to one of Africa\'s most inspiring nations.',
    thumb: new URL('../assets/images/kigali.jpg', import.meta.url).href,
  },
]

const filteredVideos = computed(() =>
  videos.filter(v => {
    const matchCat = activeCategory.value === 'all' || v.category === activeCategory.value
    const q = search.value.toLowerCase()
    const matchSearch = !q || v.title.toLowerCase().includes(q) || v.desc.toLowerCase().includes(q)
    return matchCat && matchSearch
  })
)

function categoryColor(cat) {
  return {
    wildlife:  'bg-green-900/50 text-green-400',
    culture:   'bg-amber-900/50 text-amber-300',
    adventure: 'bg-blue-900/50 text-blue-300',
    kigali:    'bg-purple-900/50 text-purple-300',
    nature:    'bg-teal-900/50 text-teal-300',
  }[cat] || 'bg-white/10 text-white/40'
}

function openModal(video) { modalVideo.value = video }
function closeModal() { modalVideo.value = null }

const filmStats = [
  { value: '48+',  label: 'Original Films' },
  { value: '1.2M', label: 'Total Views' },
  { value: '12',   label: 'Rwandan Filmmakers' },
  { value: '5',    label: 'Awards Won' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;600;700&display=swap');

.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

.line-clamp-2 { display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }
</style>