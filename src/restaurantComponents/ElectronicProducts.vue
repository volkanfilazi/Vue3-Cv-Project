<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { useShopStore } from '../Store/Shop';
import router from '../router/router';
const selectedProductId = useStorage("id", Number)
import { Icon } from '@iconify/vue';

  const shopStore = useShopStore()
  function getId(id: number) {
  selectedProductId.value = undefined
  selectedProductId.value = id
  router.push({ name: 'shopDetail', params: { id: selectedProductId.value } })
}

async function addCartAndSendtoBasket(productId: number, title: string, price: string, count: string, image: string) {
  const response = shopStore.addToCart(productId, title, price, count, image)
  shopStore.getCarts()
  router.push({ name: 'basket' })
}
</script>
<template>
  <div class="flex flex-col w-full px-1 md:px-[200px] mb-10">
      <div class="flex">
        <h1 class="text-center bg-purple-600 px-10 py-2 rounded-md text-white">Electronics</h1>
      </div>
      <div v-if="shopStore.allProductsSecondClone.length > 0" class="md:w-full mt-5 gap-3 grid grid-cols-1 w-full"
        :class="{ 'grid lg:grid-cols-2': shopStore.allProductsClone.length > 0 }">
        <div class="p-2 rounded-md bg-white h-[200px] relative md:mt-3 cursor-pointer flex"
          v-for="products in shopStore.allProductsSecondClone.filter((item) => item.category === 'electronics')">
          <div v-if="products.id > 0 && products.id < 5"
            class="w-10 h-6 bg-purple-600 absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
            <p>New</p>
          </div>
          <div v-if="products.id > 11 && products.id < 15"
            class="w-10 h-6 bg-purple-500 absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
            <p>Best</p>
          </div>
          <div class="w-1/2 flex gap-5">
            <img class="p-3" :src="products.image" alt="">
          </div>

          <div class="w-1/2 flex flex-col h-full">
            <div
              class="product-title h-1/2 text-gray-600 flex items-center cursor-pointer transition-all duration-200 hover:text-orange-600">
              <p @click="getId(products.id)">{{ products.title.substring(0, 20) }}</p>
            </div>
            <div class="h-1/2">
              <p class="text-[18px] font-bold text-gray-700">€ {{ products.price }}</p>
            </div>
            <div class="min-w-[160px] h-1/3 flex items-end gap-1 p-1">
              <button @click="shopStore.addToCart(products.id, products.title, products.price, '0', products.image)"
                class=" border-[1px] w-1/3 flex items-center justify-center cursor-pointer p-1 border-gray-400 group hover:bg-purple-500 transition-all duration-300 text-blue-500 font-bold">
                <Icon class="text-gray-500 transition-all duration-300 group-hover:text-white"
                  icon="simple-line-icons:basket" width="24" height="24" />
              </button>
              <button @click="addCartAndSendtoBasket(products.id, products.title, products.price, '0', products.image)"
                class=" border-[1px] w-2/3 cursor-pointer p-1 border-blue-500 hover:bg-purple-500 transition-all duration-300 hover:text-white text-blue-500 font-serif font-bold">
                buy now</button>
            </div>
          </div>
        </div>
      </div>
      <!-- skeleton -->
      <div v-if="!shopStore.allProductsClone.length" class="grid lg:grid-cols-3 gap-2 ">
        <div class="p-2 rounded-md bg-white h-[200px] relative md:mt-3 cursor-pointer flex" v-for="products in 6">
          <div class="w-10 h-6 skeleton absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
            <p></p>
          </div>
          <div class="w-10 h-6 skeleton absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
            <p></p>
          </div>
          <div class="w-1/2 flex gap-5">
            <img class="p-3 w-full skeleton">
          </div>

          <div class="w-1/2 flex flex-col ml-2 h-full">
            <div
              class="product-title h-1/2 text-gray-600 flex items-center cursor-pointer transition-all duration-200 hover:text-orange-600">
              <p></p>
              <p class="skeleton skeleton-text">{{ }}</p>
            </div>
            <div class="h-1/2">
              <p class="text-[18px] font-bold text-gray-700 skeleton skeleton-text"></p>
            </div>
            <div class="min-w-[160px] h-1/3 flex items-end gap-1 p-1">
              <button class=" border-[1px] h-10 skeleton w-1/3 flex items-center justify-center ">
              </button>
              <button class="skeleton border-[1px] skeleton h-10 w-2/3 ">
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- skeleton -->
    </div>
</template>