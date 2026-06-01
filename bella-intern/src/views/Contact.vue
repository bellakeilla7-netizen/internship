<template>
  <section class="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-[#0d1f0f] font-sans">

    <!-- Rwanda flag color bar -->
    <div class="absolute left-0 top-0 bottom-0 w-1 z-20 flex flex-col">
      <div class="flex-1 bg-[#20603D]" />
      <div class="flex-1 bg-[#FAD201]" />
      <div class="flex-1 bg-[#1F4A9B]" />
    </div>

    <!-- subtle grid overlay -->
    <div class="absolute inset-0 z-0 pointer-events-none"
      style="background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 60px 60px;" />

    <!-- radial glow -->
    <div class="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none z-0"
      style="background: radial-gradient(circle, #4ade80 0%, transparent 70%)" />

    <!-- ─── LEFT PANEL ─── -->
    <div class="relative z-10 flex flex-col lg:w-[420px] shrink-0 px-10 lg:px-12 py-14 lg:border-r border-b lg:border-b-0 border-white/10">

      <!-- eyebrow -->
      <div class="flex items-center gap-2.5 mb-10">
        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span class="text-green-400 text-[10px] tracking-[0.22em] uppercase font-semibold">{{ t('home.tag') }}</span>
      </div>

      <!-- headline -->
      <h1 class="text-white leading-[0.88] mb-7 tracking-tight"
        style="font-family:'Cormorant Garamond',serif; font-size:clamp(3.2rem,7vw,5.8rem); font-weight:700;">
        {{ t('contact.title') }}
      </h1>

      <p class="text-white/40 text-sm leading-relaxed mb-10 max-w-[300px]">
        From silverback gorillas in the Virungas to sunrise kayaks on Lake Kivu — let us craft your perfect escape to the Land of a Thousand Hills.
      </p>

      <!-- contact info rows -->
      <div class="border-t border-white/10 mb-8">
        <div v-for="item in infoItems" :key="item.label"
          class="flex justify-between items-center py-3 border-b border-white/10 gap-4">
          <span class="text-[9px] tracking-[0.18em] uppercase text-white/30 shrink-0">{{ item.label }}</span>
          <span class="text-white/60 text-[11px] text-right">{{ item.value }}</span>
        </div>
      </div>

      <!-- experience chips -->
      <div class="mb-8">
        <p class="text-[9px] tracking-[0.18em] uppercase text-white/25 mb-3">Experiences</p>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="tag in tags" :key="tag"
            class="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-white/40 hover:border-[#FAD201]/50 hover:text-[#FAD201] transition-colors cursor-default">
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- socials + clock -->
      <div class="mt-auto flex items-end justify-between">
        <div class="flex gap-4">
          <a v-for="s in socials" :key="s.label" :href="s.href"
            class="text-[10px] tracking-widest uppercase text-white/25 hover:text-[#FAD201] transition-colors no-underline">
            {{ s.label }} ↗
          </a>
        </div>
        <p class="text-[10px] text-white/20 tracking-widest uppercase tabular-nums">{{ currentTime }} CAT</p>
      </div>
    </div>

    <!-- ─── RIGHT PANEL: FORM ─── -->
    <div class="relative z-10 flex-1 flex items-start overflow-y-auto px-8 lg:px-14 py-14">
      <Transition name="fade" mode="out-in">

        <!-- ── success ── -->
        <div v-if="submitted" key="success" class="w-full max-w-xl flex flex-col gap-5 pt-4">
          <div class="w-14 h-14 border border-[#FAD201]/40 flex items-center justify-center text-[#FAD201] text-2xl">✓</div>
          <p class="text-white leading-none" style="font-family:'Cormorant Garamond',serif; font-size:3.5rem; font-weight:700;">Murakoze!</p>
          <p class="text-white/40 text-sm leading-relaxed max-w-sm">
            "Thank you" in Kinyarwanda. Your itinerary request is with our local experts. Expect a personalised plan within 24 hours.
          </p>
          <div class="flex gap-4 mt-2 flex-wrap">
            <button @click="reset"
              class="text-[10px] tracking-widest uppercase text-white/30 border-b border-white/20 pb-0.5 hover:text-[#FAD201] hover:border-[#FAD201] transition-colors bg-transparent cursor-pointer">
              Plan another trip
            </button>
          </div>
        </div>

        <!-- ── form ── -->
        <form v-else key="form" @submit.prevent="submit" novalidate class="w-full max-w-xl flex flex-col gap-5">

          <div class="mb-2">
            <p class="text-white text-2xl font-semibold mb-1" style="font-family:'Cormorant Garamond',serif; font-size:1.9rem;">{{ t('contact.title') }}</p>
            <p class="text-white/35 text-sm">{{ t('contact.subtitle') }}</p>
          </div>

          <!-- name + email -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] tracking-[0.18em] uppercase text-white/30" for="r-name">Full name</label>
              <input id="r-name" v-model="form.name" @blur="validateField('name')" type="text"
                placeholder="Jane Smith" autocomplete="name"
                class="bg-transparent border-b py-2.5 text-white text-sm placeholder-white/15 outline-none transition-colors"
                :class="errors.name ? 'border-red-500' : 'border-white/20 focus:border-[#FAD201]'" />
              <span v-if="errors.name" class="text-red-400 text-[9px] tracking-wide">{{ errors.name }}</span>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] tracking-[0.18em] uppercase text-white/30" for="r-email">Email</label>
              <input id="r-email" v-model="form.email" @blur="validateField('email')" type="email"
                placeholder="jane@email.com" autocomplete="email"
                class="bg-transparent border-b py-2.5 text-white text-sm placeholder-white/15 outline-none transition-colors"
                :class="errors.email ? 'border-red-500' : 'border-white/20 focus:border-[#FAD201]'" />
              <span v-if="errors.email" class="text-red-400 text-[9px] tracking-wide">{{ errors.email }}</span>
            </div>
          </div>

          <!-- nationality + group size -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] tracking-[0.18em] uppercase text-white/30" for="r-nat">Nationality</label>
              <input id="r-nat" v-model="form.nationality" type="text" placeholder="e.g. British"
                class="bg-transparent border-b border-white/20 py-2.5 text-white text-sm placeholder-white/15 outline-none focus:border-[#FAD201] transition-colors" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] tracking-[0.18em] uppercase text-white/30" for="r-group">Group size</label>
              <select id="r-group" v-model="form.groupSize"
                class="bg-[#0d1f0f] border-b border-white/20 py-2.5 text-white text-sm outline-none focus:border-[#FAD201] transition-colors appearance-none cursor-pointer">
                <option value="" disabled class="bg-[#0d1f0f]">Select</option>
                <option v-for="g in groupSizes" :key="g" :value="g" class="bg-[#0d1f0f]">{{ g }}</option>
              </select>
            </div>
          </div>

          <!-- trip type pills -->
          <div class="flex flex-col gap-2">
            <label class="text-[9px] tracking-[0.18em] uppercase text-white/30">Trip type</label>
            <div class="flex flex-wrap gap-2">
              <button v-for="t in tripTypes" :key="t" type="button"
                @click="form.tripType = t; errors.tripType = ''"
                :class="[
                  'text-[11px] px-3.5 py-1.5 rounded-full border transition-all',
                  form.tripType === t
                    ? 'bg-[#FAD201] text-[#0d1f0f] border-[#FAD201] font-semibold'
                    : 'border-white/15 text-white/40 hover:border-[#FAD201]/50 hover:text-[#FAD201]'
                ]">
                {{ t }}
              </button>
            </div>
            <span v-if="errors.tripType" class="text-red-400 text-[9px] tracking-wide">{{ errors.tripType }}</span>
          </div>

          <!-- dates -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] tracking-[0.18em] uppercase text-white/30" for="r-arr">Arrival</label>
              <input id="r-arr" v-model="form.arrival" type="date"
                class="bg-transparent border-b border-white/20 py-2.5 text-white/60 text-sm outline-none focus:border-[#FAD201] transition-colors [color-scheme:dark]" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] tracking-[0.18em] uppercase text-white/30" for="r-dep">Departure</label>
              <input id="r-dep" v-model="form.departure" type="date"
                class="bg-transparent border-b border-white/20 py-2.5 text-white/60 text-sm outline-none focus:border-[#FAD201] transition-colors [color-scheme:dark]" />
            </div>
          </div>

          <!-- budget slider -->
          <div class="flex flex-col gap-3">
            <label class="text-[9px] tracking-[0.18em] uppercase text-white/30 flex justify-between items-center">
              Budget per person
              <span class="text-[#FAD201] text-[10px] font-semibold tracking-widest">{{ budgetLabel }}</span>
            </label>
            <input type="range" v-model="form.budget" min="0" max="4" step="1"
              class="w-full h-px bg-white/10 appearance-none cursor-pointer accent-[#FAD201]" />
            <div class="flex justify-between text-[8px] text-white/20 uppercase tracking-widest">
              <span>Economy</span><span>Mid</span><span>Luxury</span><span>Ultra</span><span>Bespoke</span>
            </div>
          </div>

          <!-- message -->
          <div class="flex flex-col gap-1.5">
            <label class="text-[9px] tracking-[0.18em] uppercase text-white/30 flex justify-between" for="r-msg">
              Special requests
              <span :class="form.message.length > 450 ? 'text-red-400' : 'text-white/20'" class="tabular-nums text-[9px]">
                {{ form.message.length }}/500
              </span>
            </label>
            <textarea id="r-msg" v-model="form.message" @blur="validateField('message')"
              rows="4" maxlength="500"
              placeholder="Gorilla permits, dietary needs, accessibility, specific parks…"
              class="bg-transparent border-b py-2.5 text-white text-sm placeholder-white/15 outline-none resize-none leading-relaxed transition-colors"
              :class="errors.message ? 'border-red-500' : 'border-white/20 focus:border-[#FAD201]'" />
            <span v-if="errors.message" class="text-red-400 text-[9px] tracking-wide">{{ errors.message }}</span>
          </div>

          <!-- submit row -->
          <div class="flex items-center justify-between pt-3 gap-4 flex-wrap">
            <p class="text-white/20 text-[9px] leading-relaxed max-w-[180px] uppercase tracking-wider">
              Free consultation. No booking fees. 24hr response.
            </p>
            <button type="submit" :disabled="loading"
              class="flex items-center justify-center gap-2 min-w-[160px] h-12 px-8 bg-[#FAD201] text-[#0d1f0f] text-sm font-bold tracking-wide hover:bg-yellow-300 active:scale-[0.97] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="loading" class="w-4 h-4 border-2 border-[#0d1f0f]/20 border-t-[#0d1f0f] rounded-full animate-spin" />
              <span v-else>Plan my trip →</span>
            </button>
          </div>

        </form>
      </Transition>
    </div>

  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

// ── Kigali clock ───────────────────────────────────────────────
const currentTime = ref('')
let timer = null
function tick() {
  currentTime.value = new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Africa/Kigali', hour: '2-digit', minute: '2-digit', hour12: false
  })
}
onMounted(() => { tick(); timer = setInterval(tick, 1000) })
onUnmounted(() => clearInterval(timer))

// ── data ───────────────────────────────────────────────────────
const infoItems = [
  { label: 'Email',    value: 'explore@visitrwanda.rw' },
  { label: 'Phone',   value: '+250 788 100 200' },
  { label: 'Office',  value: 'KN 3 Ave, Kigali' },
  { label: 'Hours',   value: 'Mon–Sun  07:00–20:00' },
]
const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Facebook', href: '#' },
]
const tags = ['Gorilla Trekking', 'Volcanoes NP', 'Lake Kivu', 'Nyungwe Forest', 'Kigali City', 'Bird Watching', 'Cycling', 'Cultural Tours', 'MICE']
const tripTypes = ['Wildlife Safari', 'Cultural Tour', 'Adventure', 'Honeymoon', 'Family', 'Business / MICE']
const groupSizes = ['Solo', '2 people', '3–5 people', '6–10 people', '11–20 people', '20+ people']
const budgetLabels = ['Economy', 'Mid-range', 'Luxury', 'Ultra-luxury', 'Bespoke']

// ── form ───────────────────────────────────────────────────────
const form = reactive({ name: '', email: '', nationality: '', groupSize: '', tripType: '', arrival: '', departure: '', budget: 2, message: '' })
const errors = reactive({ name: '', email: '', tripType: '', message: '' })
const submitted = ref(false)
const loading = ref(false)

const budgetLabel = computed(() => budgetLabels[form.budget])

const validators = {
  name:     v => !v.trim() ? 'Name is required.' : v.trim().length < 2 ? 'Too short.' : '',
  email:    v => !v.trim() ? 'Email is required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Invalid email.' : '',
  tripType: v => !v ? 'Please select a trip type.' : '',
  message:  v => v.length > 0 && v.trim().length < 5 ? 'A bit more detail helps.' : '',
}

function validateField(f) { if (validators[f]) errors[f] = validators[f](form[f]) }
function validateAll() {
  let ok = true
  for (const f of Object.keys(validators)) { errors[f] = validators[f](form[f]); if (errors[f]) ok = false }
  return ok
}
function submit() {
  if (!validateAll()) return
  loading.value = true
  setTimeout(() => { loading.value = false; submitted.value = true }, 1400)
}
function reset() {
  Object.assign(form, { name: '', email: '', nationality: '', groupSize: '', tripType: '', arrival: '', departure: '', budget: 2, message: '' })
  Object.assign(errors, { name: '', email: '', tripType: '', message: '' })
  submitted.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter-from { opacity: 0; transform: translateY(12px); }
.fade-leave-to   { opacity: 0; transform: translateY(-12px); }

input[type=range] { -webkit-appearance: none; appearance: none; background: rgba(255,255,255,0.1); height: 1px; }
input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: #FAD201; cursor: pointer; }
input[type=range]::-moz-range-thumb { width: 14px; height: 14px; border-radius: 50%; background: #FAD201; border: none; cursor: pointer; }
</style>