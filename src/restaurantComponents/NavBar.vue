<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';
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
  <div class="flex w-full p-5 gap-5 border-b-[1px] items-center bg-gray-600 px-10 text-black font-bold">
    <div class="flex flex-col justify-center items-center">
      <div class="w-[160px] flex justify-end">
        <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
      <h1 class="text-white font-bold text-[20px]">Volkan Filazi</h1>
      <div class="w-[160px] flex justify-start">
        <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
    </div>
    <input
      class="w-full border-[1px] h-10 rounded-lg p-1 outline-none focus:border-yellow-400"
      placeholder="search a product..." type="search" v-model="searchInput">

    <ul class="flex items-center text-yellow-400 gap-3">
      <a
        class="scroll-smooth cursor-pointer border-[1px] border-transparent hover:border-white hover:transition-all hover:duration-300 p-1">Login</a>
        <RouterLink to="/">Center</RouterLink>
        <a href="">Basket</a>
    </ul>
  </div>
</template>

<style scoped>

html {
  scroll-behavior: smooth;
}
</style>