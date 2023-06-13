<script setup lang="ts">
import { watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';
import { useStorage } from "@vueuse/core";
import NavBar from '../restaurantComponents/NavBar.vue';
import router from '../router/router';
import Drawer from '../restaurantComponents/Drawer.vue';



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
  <div v-if="shopStore.singleProduct?.image" class="flex px-5 flex-col lg:w-5/6 md:flex-row w-3/3 md:p-20 md:px-10 gap-10">
    <div class="w-1/2 flex justify-center items-center ">
      <img class="w-1/3" :src="shopStore.singleProduct?.image" alt="">
    </div>
    <div class="flex w-1/2 h-1/2 justify-center gap-2 flex-col">
      <p class="font-bold">{{ shopStore.singleProduct?.title }}</p>
      <p>{{ shopStore.singleProduct?.description }}</p>
      <hr>
      <p class="font-bold">€ {{ shopStore.singleProduct?.price }}</p>
      <div class="flex w-full md:w-1/3 h-1/2 justify-center px-2 gap-2 flex-col">
        <button
          @click="addCart(shopStore.singleProduct?.id, shopStore.singleProduct?.title, shopStore.singleProduct?.price, '0', shopStore.singleProduct?.image)"
          class="p-1 rounded-xl bg-yellow-400 hover:opacity-70">Add to Basket</button>
        <button class="p-1 rounded-xl bg-orange-400 hover:opacity-70">Buy Now</button>
        <button @click="goBack" class="w-[200px] text-white bg-red-500 cursor-pointer hover:opacity-70 mt-10 p-1">back to
          homepage</button>
      </div>
    </div>
  </div>

  <div v-if="!shopStore.singleProduct?.image" class="flex px-5 flex-col lg:w-5/6 md:flex-row w-3/3 md:p-20 md:px-10 gap-10">
    <div class="w-1/2 flex justify-center items-center ">
      <img class="w-1/3 h-[200px] skeleton">
    </div>
    <div class="flex w-1/2 h-1/2 justify-center gap-2 flex-col">
      <p class="font-bold skeleton skeleton-text"></p>
      <p class="font-bold skeleton skeleton-text"></p>
      <p class="font-bold skeleton skeleton-text"></p>
      <div class="flex w-full md:w-1/3 h-1/2 justify-center px-2 gap-2 flex-col">
        <button @click="goBack" class="w-[200px] text-white bg-red-500 h-10 cursor-pointer hover:opacity-70 mt-10 p-1 skeleton"></button>
        <button @click="goBack" class="w-[200px] text-white bg-red-500 h-10 cursor-pointer hover:opacity-70 p-1 skeleton"></button>
        <button @click="goBack" class="w-[200px] text-white bg-red-500 h-10 cursor-pointer hover:opacity-70 mt-10 p-1 skeleton"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  opacity: .7;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-text {
  width: 100%;
  height: .5em;
  margin-bottom: .25rem;
  border-radius: .125rem;
}

.skeleton-text:last-child {
  margin-bottom: 0;
  width: 80%;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

</style>