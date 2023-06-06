<script setup lang="ts">
import { watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';
import { useStorage } from "@vueuse/core";
import NavBar from '../restaurantComponents/NavBar.vue';
import router from '../router/router';
const selectedProductId = useStorage('id', Number);
import Drawer from '../restaurantComponents/Drawer.vue';



const shopStore = useShopStore()
watchEffect(async () => {
  const response =await shopStore.getSingleProduct(selectedProductId.value)
  console.log(response);
  
})

 function addCart(productId: number,title: string, price: string, count: string, image: string) {
  const response = shopStore.addToCart(productId,title, price, count, image)
  shopStore.getCarts()
 
}

function goBack(){
  selectedProductId.value = undefined
  router.push({ name: 'shop'})
}
</script>

<template>
  <NavBar></NavBar>
  <Drawer></Drawer>
  <div class="flex px-5 flex-col md:flex-row w-3/3 md:p-20 md:px-10 gap-10">
    <div class="w-full md:w-2/5  flex justify-center ">
      <img class="h-1/2" :src="shopStore.singleProduct?.image" alt="">
    </div>
    
    <div class="flex w-full h-1/2 justify-center gap-2 md:w-3/5 flex-col">
      <p class="font-bold">{{ shopStore.singleProduct?.title }}</p>
      <p>{{ shopStore.singleProduct?.description }}</p>
      <hr>
      <p class="font-bold">€ {{ shopStore.singleProduct?.price }}</p>
      <button @click="goBack" class="w-[200px] text-white bg-red-500 cursor-pointer hover:opacity-70 mt-10 p-1">back to homepage</button>
    </div>
    
    <div class="flex w-full h-1/2 justify-center px-2 gap-2 border-[1px] md:w-1/5 flex-col">
      <p class="font-bold">€ {{ shopStore.singleProduct?.price }}</p>
      <button @click="addCart(shopStore.singleProduct?.id,shopStore.singleProduct?.title,shopStore.singleProduct?.price, '0',shopStore.singleProduct?.image)" class="p-1 rounded-xl bg-yellow-400 hover:opacity-70">Add to Basket</button>
      <button class="p-1 rounded-xl bg-orange-400 hover:opacity-70">Buy Now</button>
    </div>
  </div>
</template>