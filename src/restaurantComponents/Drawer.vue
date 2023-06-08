<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue';
import { Icon } from '@iconify/vue';
import { useShopStore } from '../Store/Shop';
import { useStorage } from "@vueuse/core";
import router from '../router/router';

const calculatedTotalPrice = useStorage("totalPrice",Number)
const shopStore = useShopStore()
const drawerToogle = ref(true)
const selectedCount = ref(0)

function updateCount(productId: number, selected: number){
  shopStore.updateItem(productId, selected)  
  selectedCount.value = 0
  
}


watchEffect(() =>{
  shopStore.getCarts()
})

</script>

<template>
  <div class="z-[120] hidden lg:flex">
    <div
      class="fixed overflow-y-auto bg-white scroll-auto top-0 right-0 flex flex-col w-64 sm-w-64 md:w-1/6 z-[120px] h-full transition-all duration-500 transform translate-x-full border-l-[1px] border-gray-400 text-white shadow-r"
      :class="{ 'translate-x-[-250px] sm:translate-x-[-250px] md:translate-x-[0] transition-all duration-500': drawerToogle }">
      <h1 class="text-black text-center mt-5 font-bold">Shoping Card</h1>
      <div class="flex justify-center">
        <button @click="router.push({ name: 'basket'})" class="text-black border-[1px] transition-all duration-300 w-1/2 border-black rounded-lg bg-yellow-400 hover:opacity-70">Checkout</button>
      </div>
      <p class="text-black font-bold p-5 text-center">Subtotal: <span class="text-red-800">€ {{ calculatedTotalPrice.toFixed(2) }}</span></p>
      <hr class="mt-2">
      <div v-for="item in shopStore.cartData" :key="item?.id" class="p-5 space-y-2">
        <div class="flex items-center">
          <p class="text-black">{{ item?.title }}</p>
        </div>
        <p class="text-black">Quantity: {{ item?.count }}</p>
        <div class="flex items-center md:pr-5 text-center">
          <div class="flex justify-center items-center gap-5">
            <select v-model="selectedCount" class="border-[1px] w-20 text-black rounded-lg shadow-sm shadow-blue-500">
              <option disabled value="">0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <button :disabled="selectedCount === 0" @click="updateCount(item?.id,selectedCount)" class="text-black transition-all duration-300 border-[1px] hover:opacity-70 border-black p-1 bg-yellow-400 rounded-lg">update</button>
          <Icon @click="shopStore.deleteItem(item?.id)" class="cursor-pointer" icon="fluent:delete-24-filled" color="red" width="24" height="24" />
          </div>
        </div>
        <p class="text-black font-bold">€ {{ item?.price }}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<style scoped>
:disabled {
  opacity: 0.15;
  pointer-events: none
}
</style>