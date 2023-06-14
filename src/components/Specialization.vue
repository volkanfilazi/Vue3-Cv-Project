<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";
import vbutton from '../restaurantComponents/V-Model/V-Button.vue'
import { ref } from 'vue';
import { useShopStore } from '../Store/Shop';
import { useStorage } from "@vueuse/core";

const router = useRouter()

async function goToShop() {
  router.push({ name: 'shop' })
}

async function goToIntelligenceSquare() {
  router.push({ name: 'intelligenceSquare' })
}


</script>
<template>
  <div id="specialization"
    class="observed-sections flex p-2 md:p-0 flex-col mt-20 w-full items-center justify-center transition-all duration-500 relative md:h-screen gap-5">
    <div class="flex flex-col md:mt-0 w-full justify-center items-center">
      <h1 class="text-white font-bold text-[20px] md:text-[30px]">My Specialization</h1>
    </div>
    <div class="flex gap-2">
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
      <div class="w-4 h-4 rounded-full bg-yellow-400"></div>
      <div class="w-4 h-4 rounded-full bg-gray-500"></div>
    </div>
    <div
      class="w-full md:w-4/5 text-white text-sm md:text-lg md:mt-5 md:h-1/2 flex flex-col gap-2 md:flex md:flex-row md:justify-between">
      <div
        class="w-full h-[300px] sm:h-[300px] md:w-1/2 group border-[1px] flex flex-col md:h-full transition-all duration-300 hover:border-yellow-400">

        <div class="h-2/5 sm:h-1/3 flex items-center justify-center flex-col gap-5">
          <h1 class="transition-all duration-300 group-hover:text-yellow-400 text-center text-xl">~ Shop ~</h1>
          <Icon class="transition-all duration-300 group-hover:text-yellow-400" icon="guidance:shop" width="36"
            height="36" />
        </div>

        <div class="h-2/5 sm:h-2/3 md:justify-center flex flex-col p-2">
          <p class="text-yellow-400">Project Thema : <span class="text-white">Shop, Order, Filter
              System, Checkout, Networking </span></p>
          <p class="text-yellow-400">Languages and Frameworks : <span class="text-white">Vue.js, HTML, CSS,
              Tailwind, Typescript</span></p>
          <p class="text-yellow-400">Used Packages : <span class="text-white">@iconify/vue, axios</span></p>
        </div>

        <div class="flex h-1/5 justify-center items-center md:mb-0">
          <vbutton @click="goToShop()">Visit</vbutton>
        </div>
      </div>

      <div
        class="w-full h-[300px] sm:h-[300px] md:w-1/2 group border-[1px] flex flex-col md:h-full transition-all duration-300 hover:border-yellow-400">
        <div class="h-2/5 sm:h-1/3 flex items-center justify-center flex-col gap-5">
          <h1 class="transition-all duration-300 group-hover:text-yellow-400 text-center text-xl">~ Intelligence Square ~
          </h1>
          <Icon class="transition-all duration-300 group-hover:text-yellow-400" icon="carbon:ibm-watson-knowledge-studio"
            width="36" height="36" />
        </div>
        <div class="h-2/5 sm:h-2/3 md:justify-center flex flex-col p-2">
          <p class="text-yellow-400">Project Thema : <span class="text-white">Knowledge Competition, Multiple categories,
              Local Backend </span></p>
          <p class="text-yellow-400">Languages and Frameworks : <span class="text-white">Vue.js, HTML, CSS,
              Tailwind</span></p>
          <p class="text-yellow-400">Used Packages : <span class="text-white">@iconify/vue</span></p>
        </div>
        <div class="flex h-1/5 justify-center items-center md:mb-0">
          <vbutton @click="goToIntelligenceSquare()">Visit</vbutton>
        </div>
      </div>

      <div
        class="w-full h-[300px] sm:h-[300px] md:w-1/2 group border-[1px] flex flex-col md:h-full transition-all duration-300 hover:border-yellow-400">
        <div class="h-2/5 sm:h-1/3 flex items-center justify-center flex-col gap-5">
          <h1 class="transition-all duration-300 group-hover:text-yellow-400 text-center text-xl">~ Encryption ~</h1>
          <Icon class="transition-all duration-300 group-hover:text-yellow-400"
            icon="carbon:ibm-cloud-hyper-protect-crypto-services" width="36" height="36" />
        </div>
        <div class="h-2/5 sm:h-2/3 md:justify-center flex flex-col p-2">
          <p class="text-yellow-400">Project Thema : <span class="text-white">Strengthen Passwords</span></p>
          <p class="text-yellow-400">Languages and Frameworks : <span class="text-white">Vue.js, HTML, CSS,
              Tailwind</span></p>
          <p class="text-yellow-400">Used Packages : <span class="text-white">@iconify/vue, jwt, decode</span></p>
        </div>
        <div class="flex h-1/5 justify-center items-center md:mb-0">
          <vbutton disabled>Coming Soon</vbutton>
        </div>
      </div>


  </div>
</div></template>