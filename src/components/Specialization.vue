<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";
import vbutton from '../restaurantComponents/V-Model/V-Button.vue'
import { ref } from 'vue';
import { useShopStore } from '../Store/Shop';
import { useStorage } from "@vueuse/core";

const shopStore = useShopStore()
const loadingScreenMessage = ref<string>('')
const router = useRouter()
const loadingToogle = useStorage('laoading', Boolean)

async function goToShop() {
  router.push({ name: 'shop' })
}

async function goToCryptoProject() {
  loadingScreenMessage.value = "Crypto Project is Loading"
  loadingToogle.value = true
  setTimeout(() => {
    loadingToogle.value = false
    router.push({ name: 'shop' })
  }, 2500)
}


</script>
<template>
  <div id="specialization"
    class="observed-sections flex p-2 md:p-0 flex-col mt-20 w-full items-center justify-center transition-all duration-500 relative md:h-screen gap-5">
    <div class="flex flex-col md:mt-0 w-full justify-center items-center">
      <div class="w-[200px] md:w-[300px] flex justify-end">
        <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
      <h1 class="text-white font-bold text-[20px] md:text-[30px]">My Specialization</h1>
      <div class="w-[200px] md:w-[300px] flex justify-start">
        <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
    </div>
    <div class="w-full md:w-4/5 text-white text-sm md:text-lg md:h-1/2 gap-2 flex md:justify-between">
      <div
        class="w-full h-[450px] sm:h-[300px] md:w-1/2 group border-[1px] flex flex-col md:h-full transition-all duration-300 hover:border-yellow-400">
        <div class="h-2/5 flex items-center justify-center flex-col gap-5">
          <h1 class="transition-all duration-300 group-hover:text-yellow-400 text-center text-xl">~ Shop ~</h1>
          <Icon class="transition-all duration-300 group-hover:text-yellow-400" icon="guidance:shop" width="36"
            height="36" />
        </div>
        <div class="h-2/5 flex flex-col justify-center p-2">
          <p class="text-yellow-400">Project Thema : <span class="text-white">Shop, Order, Filter
              System, Checkout, Networking </span></p>
          <p class="text-yellow-400">Languages and Frameworks : <span class="text-white">Vue.js, HTML, CSS,
              Tailwind, Typescript</span></p>
          <p class="text-yellow-400">Used Packages : <span class="text-white">@iconify/vue, axios</span></p>
        </div>
        <div class="flex h-1/5 justify-center mb-5 md:mb-0">
          <vbutton @click="goToShop()">Visit</vbutton>
        </div>
      </div>

      <div
        class="w-full h-[450px] sm:h-[300px] md:w-1/2 group border-[1px] flex flex-col md:h-full transition-all duration-300 hover:border-yellow-400">
        <div class="h-2/5 flex items-center justify-center flex-col gap-5">
          <h1 class="transition-all duration-300 group-hover:text-yellow-400 text-center text-xl">~ Intelligence Square ~</h1>
          <Icon class="transition-all duration-300 group-hover:text-yellow-400" icon="guidance:shop" width="36"
            height="36" />
        </div>
        <div class="h-2/5 flex flex-col justify-center p-2">
          <p class="text-yellow-400">Project Thema : <span class="text-white">Shop, Order, Filter
              System, </span></p>
          <p class="text-yellow-400">Languages and Frameworks : <span class="text-white">Vue.js, HTML, CSS,
              Tailwind</span></p>
          <p class="text-yellow-400">Used Packages : <span class="text-white">@iconify/vue,
              autoprefixer</span></p>
        </div>
        <div class="h-1/5 flex mb-5 md:mb-0 justify-center">
          <vbutton :is-loading="true">Coming soon</vbutton>
        </div>
      </div>


    </div>
</div></template>