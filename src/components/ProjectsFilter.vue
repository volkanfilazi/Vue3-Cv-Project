<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useSpecializationStore } from '../Store/Specialization';
import { Icon } from '@iconify/vue';
import { useStorage } from '@vueuse/core';

const specializationStore = useSpecializationStore()
const darkmode = useStorage("cvDarkmode", Boolean)

watchEffect(() => {
  specializationStore.vueSelected()
  specializationStore.kotlinSelected()
  specializationStore.typescriptSelected()
  specializationStore.selectedHosting()
  specializationStore.filterRating()
})

const advancedToogle = ref(true)
const programmingToogle = ref(true)
const hostingToogle = ref(true)
const ratingToogle = ref(true)
</script>

<template>
  <div class=" lg:w-1/5 border-[1px] p-2" :class="{'!border-black' : darkmode}">
    <div class="flex justify-between cursor-pointer" @click="advancedToogle = !advancedToogle">
      <h1 class="text-yellow-400 font-bold" :class="{'!text-red-600' : darkmode}">Advanced Filter</h1>
      <Icon v-if="advancedToogle" class="w-5 h-5" icon="mdi:arrow-bottom" color="white" />
      <Icon v-else class="w-5 h-5" icon="mdi:arrow-top" color="white" />
    </div>

    <div class="mt-2 ml-2" v-if="advancedToogle">
      <div class="space-y-2">
        <div class="flex justify-between cursor-pointer" @click="programmingToogle = !programmingToogle">
          <h2 class="text-yellow-400" :class="{'!text-red-600' : darkmode}">Programming languages</h2>
          <Icon v-if="programmingToogle" class="w-5 h-5" icon="mdi:arrow-bottom" color="white" />
          <Icon v-else class="w-5 h-5" icon="mdi:arrow-top" color="white" />
        </div>
        <div v-if="programmingToogle" class="flex flex-col px-2 gap-2 text-white" :class="{'!text-black' : darkmode}">
          <div class="flex items-center gap-2">
            <input v-model="specializationStore.vue" class="w-4 h-4" id="vue.js" type="checkbox">
            <label for="vue.js">Vue.js</label>
          </div>
          <div class="flex items-center gap-2">
            <input v-model="specializationStore.typescript" class="w-4 h-4" id="typescript" type="checkbox">
            <label for="typescript">Typescript</label>
          </div>
          <div class="flex items-center gap-2">
            <input v-model="specializationStore.kotlin" class="w-4 h-4" id="kotlin" type="checkbox">
            <label for="kotlin">Kotlin</label>
          </div>
        </div>
      </div>

      <div class="space-y-2 mt-2">
        <div class="flex justify-between cursor-pointer" @click="hostingToogle = !hostingToogle">
          <h2 class="text-yellow-400" :class="{'!text-red-600' : darkmode}">Hosting</h2>
          <Icon v-if="hostingToogle" class="w-5 h-5" icon="mdi:arrow-bottom" color="white" />
          <Icon v-else class="w-5 h-5" icon="mdi:arrow-top" color="white" />
        </div>
        <div v-if="hostingToogle" class="flex flex-col px-2 gap-2 text-white" :class="{'!text-black' : darkmode}">
          <div class="flex items-center gap-2">
            <input class="w-4 h-4" id="online" value="Online" type="radio" v-model="specializationStore.hostingSelected">
            <label for="online">Online</label>
          </div>
          <div class="flex items-center gap-2">
            <input class="w-4 h-4" id="offline" value="Offline" type="radio"
              v-model="specializationStore.hostingSelected">
            <label for="offline">Offline</label>
          </div>
          <div class="flex items-center gap-2">
            <input class="w-4 h-4" id="coming soon" value="Coming Soon" type="radio"
              v-model="specializationStore.hostingSelected">
            <label for="coming soon">Coming Soon</label>
          </div>
        </div>
      </div>

      <div class="space-y-2 mt-2">
        <div class="flex justify-between cursor-pointer" @click="ratingToogle = !ratingToogle">
          <h2 class="text-yellow-400" :class="{'!text-red-600' : darkmode}">Rating</h2>
          <Icon v-if="ratingToogle" class="w-5 h-5" icon="mdi:arrow-bottom" color="white" />
          <Icon v-else class="w-5 h-5" icon="mdi:arrow-top" color="white" />
        </div>
        <div v-if="ratingToogle" class="flex flex-col px-2 gap-2 text-white" :class="{'!text-black' : darkmode}">
          <div class="flex items-center gap-2">
            <input class="w-4 h-4" id="high" value="High rating" type="radio"
              v-model="specializationStore.ratingSelected">
            <label for="high">High rating</label>
          </div>
          <div class="flex items-center gap-2">
            <input class="w-4 h-4" id="low" value="Low rating" type="radio" v-model="specializationStore.ratingSelected">
            <label for="low">Low rating</label>
          </div>
        </div>
      </div>
    </div>

</div></template>