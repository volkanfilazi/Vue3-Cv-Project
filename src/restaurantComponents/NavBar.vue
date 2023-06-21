<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';
import router from '../router/router';
import { Icon } from '@iconify/vue';
import { useStorage } from "@vueuse/core";
import VProjectInfoModal from './V-Model/V-ProjectInfoModal.vue';

const calculatedTotalOrder = useStorage("totalOrder", Number)
const shopStore = useShopStore()
const searchInput = ref('')
const projectInfoToogle = ref(false)

function openProjectInfoToogle() {
  projectInfoToogle.value = true
}
function closeProjectInfoToogle() {
  projectInfoToogle.value = false
}

onMounted(async () => {
  shopStore.searchProducts(searchInput.value)
})
watchEffect(async () => {
  shopStore.searchProducts(searchInput.value)
  if (shopStore.filterProdcutsByTitle) {
    shopStore.allProductsClone = shopStore.filterProdcutsByTitle
  }
})

</script>
<template>
  <div class="w-full lg:w-5/6 px-5 flex items-center justify-between h-[50px] gap-2 bg-black">
    <p class="text-white">This website is only a demo version.No commercial activity</p>
    <div class="relative">
      <button @click="openProjectInfoToogle()" class="text-white border-[1px] transition-all duration-300 hover:border-yellow-400 p-1">Question?
      </button>
      <div class="absolute top-0 right-0 w-2 h-2 bg-yellow-400"></div>
      <div class="absolute top-0 right-0 w-2 h-2 bg-yellow-400 animate-ping"></div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row">
    <div
      class="flex flex-col md:flex-row md:w-full bg-[#471d6b] lg:w-5/6 md:p-3 gap-5 border-b-[1px] border-purple-400 md:justify-between md:items-center text-black font-bold">
      <div @click="router.push({ name: 'shop' })"
        class="flex w-full md:w-1/6 p-2 md:justify-center cursor-pointer items-center">
        <h1 class="text-white font-bold text-[20px] hover:text-yellow-400 transition-all duration-300">Volkan Filazi</h1>
      </div>
      <div class="w-full px-2 md:px-0">
        <input class="border-[2px] px-2 w-full bg-[#FFE7FE] h-7 rounded-lg outline-none focus:border-yellow-600"
           type="search" v-model="searchInput">
      </div>
      <ul class="flex lg:w-1/6 justify-between px-2 md:justify-normal md:px-0 items-center text-white gap-3">
        <RouterLink class="hover:text-yellow-400 transition-all duration-300" to="/">Developer Page</RouterLink>
        <div class="relative p-2">
          <div class="absolute font-bold top-0 right-0 text-yellow-400">{{ calculatedTotalOrder }}</div>
          <Icon class="cursor-pointer" @click="router.push({ name: 'basket' })" icon="simple-line-icons:basket"
            color="white" width="24" height="24" />
        </div>
      </ul>
    </div>
  </div>
  <VProjectInfoModal :open="projectInfoToogle" @close="closeProjectInfoToogle()"></VProjectInfoModal>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>