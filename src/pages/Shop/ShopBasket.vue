<script setup lang="ts">
import { useShopStore } from '../../Store/Shop';
import router from '../../router/router';
import { useStorage } from "@vueuse/core";
import { Icon } from '@iconify/vue';
import { ref, watchEffect } from 'vue';
import Footer from '../../components/Footer.vue';



const calculatedTotalOrder = useStorage("totalOrder", Number)
const calculatedTotalPrice = useStorage("totalPrice", Number)
const shopStore = useShopStore()
const selectedCount = ref(0)

function updateCount(productId: number, selected: number) {
  shopStore.updateItem(productId, selected)
  selectedCount.value = 0
}

watchEffect(() => {
  shopStore.getCarts()
})
</script>
<template>
  <div class="min-h-screen">
    <div
    class="flex flex-col md:flex-row md:w-full p-3 gap-5 justify-between items-center bg-[#471d6b] text-black font-bold">
    <div @click="router.push({ name: 'shop' })" class="flex flex-col justify-center cursor-pointer items-center">
      <div class="w-[160px] flex justify-end">
        <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
      <h1 class="text-white font-bold text-[20px]">Volkan Filazi</h1>
      <div class="w-[160px] flex justify-start">
        <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
    </div>
    <ul class="flex items-center text-yellow-400 gap-3">
      <RouterLink to="/">Developer Page</RouterLink>
      <div class="relative p-2">
        <div class="absolute font-bold top-0 right-0 text-white">{{ calculatedTotalOrder }}</div>
        <Icon icon="simple-line-icons:basket" color="white" width="24" height="24" />
      </div>
    </ul>
  </div>
  <div class="w-full bg-red-500 p-1 text-white text-center">
    This website is only a demo version.No commercial activity
  </div>

  <div class=" flex w-full flex-col h-full transition-all duration-500 justify-center ">
    <h1 class="text-black text-center mt-5 font-bold">Shoping Card</h1>
    <div v-for="item in shopStore.cartData" :key="item?.id" class="p-5 space-y-2 flex flex-col md:flex-row items-center">
      
      <div class="w-1/2 flex justify-center">
        <img class="w-[200px]" :src="item?.image" alt="">
      </div>

      <div class="flex flex-col w-1/2 gap-2 items-center justify-center">
        <p class="text-black">{{ item?.title }}</p>
        <p class="text-black">Quantity: {{ item?.count }}</p>
        <select v-model="selectedCount"
          class="border-[1px] w-20 text-black rounded-lg shadow-sm shadow-blue-500">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <button :disabled="selectedCount === 0" @click="updateCount(item?.id, selectedCount)"
          class="text-black transition-all duration-300 border-[1px] hover:opacity-70 border-black p-1 bg-yellow-400 rounded-lg">update</button>
        <div class="flex justify-center items-center gap-5">
          <Icon @click="shopStore.deleteItem(item?.id)" class="cursor-pointer" icon="fluent:delete-24-filled" color="red"
            width="24" height="24" />
        </div>
        <p class="text-black font-bold">€ {{ item?.price }}</p>
      </div>

    </div>
    <p class="text-black text-center font-bold p-5">Subtotal: <span class="text-red-800">€ {{ calculatedTotalPrice.toFixed(2)
    }}</span></p>
    <div class="flex justify-center">
      <button disabled="true" class=" disabled border-[1px] border-black bg-yellow-400 p-1 rounded-lg">Checkout Coming Soon</button>
    </div>
  </div>
  </div>
  <Footer class="mt-20"></Footer>
</template>

<style>

.disabled{
  opacity: 0.50;
  pointer-events: none
}
:disabled{
  opacity: 0.15;
  pointer-events: none
}

</style>