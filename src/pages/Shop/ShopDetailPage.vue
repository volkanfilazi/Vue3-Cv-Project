<script setup lang="ts">
import { watchEffect } from 'vue';
import { useShopStore } from '../../Store/Shop';
import { useStorage } from "@vueuse/core";
import NavBar from '../../restaurantComponents/NavBar.vue';
import router from '../../router/router';
import Drawer from '../../restaurantComponents/Drawer.vue';



const selectedProductId = useStorage('id', Number);
const shopStore = useShopStore()
watchEffect(async () => {
  const response = await shopStore.getSingleProduct(selectedProductId.value)
})

function addCart(productId: number, title: string, price: string, count: string, image: string) {
  const response = shopStore.addToCart(productId, title, price, count, image)
  shopStore.getCarts()

}

function goBack() {
  selectedProductId.value = undefined
  router.push({ name: 'shop' })
}
</script>

<template>
  <NavBar></NavBar>
  <Drawer></Drawer>
  <div v-if="shopStore.singleProduct?.image" class="w-full flex flex-col h-2/2 md:flex-row md:w-4/5">
    <div class="w-full h-1/2 mt-5 flex items-center justify-center md:w-1/2">
      <img class="w-1/3" :src="shopStore.singleProduct?.image" alt="">
    </div>
    <div class="h-1/2 mt-5 p-1 md:w-1/2 md:p-0 md:mt-0 md:h-full">
      <p class="font-bold mt-5">{{ shopStore.singleProduct?.title }}</p>
      <p class="mt-5">{{ shopStore.singleProduct?.description }}</p>
      <hr class="mt-5">
      <p class="font-bold text-center md:text-start mt-5">€ {{ shopStore.singleProduct?.price }}</p>
      <div class="flex w-full md:w-1/3 h-1/2 mt-5 justify-center px-2 gap-2 flex-col md:justify-start">
        <button
          @click="addCart(shopStore.singleProduct?.id, shopStore.singleProduct?.title, shopStore.singleProduct?.price, '0', shopStore.singleProduct?.image)"
          class="p-1 min-w-[200px] rounded-xl bg-yellow-400 hover:opacity-70">Add to Basket</button>
        <button class="p-1 min-w-[200px] rounded-xl bg-orange-400 hover:opacity-70">Buy Now</button>
      </div>
    </div>
  </div>
</template>
