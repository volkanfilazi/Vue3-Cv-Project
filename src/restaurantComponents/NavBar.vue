<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';
import router from '../router/router';
import { Icon } from '@iconify/vue';


const shopStore = useShopStore()
const searchInput = ref('')


onMounted(async () => {
  await shopStore.getAllProducts()
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
  <div class="flex w-5/5 p-5 gap-5 border-b-[1px] justify-center items-center bg-gray-600 px-10 text-black font-bold">
    <div @click="router.push({ name: 'shop'})" class="flex flex-col justify-center w-1/5 cursor-pointer items-center">
      <div class="w-[160px] flex justify-end">
        <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
      <h1 class="text-white font-bold text-[20px]">Volkan Filazi</h1>
      <div class="w-[160px] flex justify-start">
        <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
    </div>
    <input
      class=" border-[1px] w-3/5 h-10 rounded-lg p-1 outline-none focus:border-yellow-400"
      placeholder="search a product..." type="search" v-model="searchInput">

    <ul class="flex w-1/5 items-center text-yellow-400 gap-3">
        <RouterLink to="/">Developer Page</RouterLink>
        <div class="relative p-2">
          <div class="absolute font-bold top-0 right-0 text-white">{{ shopStore.calculatedTotalOrder}}</div>
          <Icon icon="simple-line-icons:basket" color="white" width="24" height="24" />
        </div>
    </ul>
  </div>
</template>

<style scoped>

html {
  scroll-behavior: smooth;
}
</style>