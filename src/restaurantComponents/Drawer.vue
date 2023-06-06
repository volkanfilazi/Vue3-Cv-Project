<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue';
import { Icon } from '@iconify/vue';
import { useShopStore } from '../Store/Shop';

const shopStore = useShopStore()
const drawerToogle = ref(false)
const selectedCount = ref()

function updateCount(productId: number, selected: string){
  shopStore.updateItem(productId, selected)  
  selectedCount.value = 0
}
watchEffect(() =>{
  shopStore.getCarts()
})

</script>

<template>
  <div class="flex z-[120]">
    <div @click="drawerToogle = !drawerToogle"
      class="top-0 right-0 w-10 h-10 fixed transition-all flex items-center justify-center cursor-pointer duration-500 rounded-l-md md:mt-[500px] bg-red-800 shadow-md"
      :class="{ 'translate-x-[-250px] sm:translate-x-[-250px] md:translate-x-[-500px] transition-all duration-500': drawerToogle }">
      <Icon icon="svg-spinners:gooey-balls-1" color="white" />
    </div>
    <div
      class="fixed top-0 right-0 flex flex-col w-64 sm-w-64 md:w-[500px] z-[9000px] h-full transition-all duration-500 transform translate-x-full bg-white border-l-[1px] border-black text-white shadow-r"
      :class="{ 'translate-x-[-250px] sm:translate-x-[-250px] md:translate-x-[0] transition-all duration-500': drawerToogle }">
      <h1 class="text-black text-center mt-5 font-bold">Shoping Card</h1>
      <div v-for="item in shopStore.cartData" :key="item.id" class="p-5 space-y-2">
        <div class="flex items-center">
          <p class="text-black">{{ item.title }}</p>
        </div>
        <p class="text-black">x{{ item.count }}</p>
        <div class=" flex items-center gap-10 md:pr-5 text-center">
          <select v-model="selectedCount" class="border-[1px] w-20 text-black rounded-lg shadow-sm shadow-blue-500">
            <option>1</option>
            <option>2</option>
            <option>2</option>
            <option>4</option>
            <option>+5</option>
          </select>
          <button @click="updateCount(item.id,selectedCount)" class="text-black">update</button>
          <Icon @click="shopStore.deleteItem(item.id)" class="cursor-pointer" icon="fluent:delete-24-filled" color="red" width="24" height="24" />
        </div>
        <p class="text-black font-bold">€ {{ item.price }}</p>
      </div>
      <p class="text-black font-bold p-5">Subtotal: <span class="text-red-800">€ {{ shopStore.calculatedTotalPrice }}</span></p>
      <div class="flex justify-center">
        <button class="text-black border-[1px] w-1/2 border-black rounded-lg bg-yellow-400 hover:opacity-70">Checkout</button>
      </div>
    </div>
  </div>
</template>