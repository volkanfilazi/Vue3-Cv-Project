<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { useShopStore } from '../Store/Shop';
import router from '../router/router';
const shopStore = useShopStore()
const selectedProductId = useStorage("id", Number)
import { Icon } from '@iconify/vue';


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
  <div v-if="shopStore.allProductsClone.length > 0" class="md:w-full mt-5 gap-3 grid grid-cols-1 w-full"
    :class="{ 'grid md:grid-cols-2 xl:grid-cols-3 w-full': shopStore.allProductsClone.length > 0 }">
    <div  class="p-2 rounded-md bg-white h-[200px] relative md:mt-3 cursor-pointer flex"
      v-for="products in shopStore.allProductsClone">
      <div v-if="products.id > 0 && products.id < 5"
        class="w-10 h-6 bg-purple-600 absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
        <p>New</p>
      </div>
      <div v-if="products.id > 11 && products.id < 15"
        class="w-10 h-6 bg-purple-500 absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
        <p>Best</p>
      </div>
      <div @click="getId(products.id)" class="w-1/2 flex gap-5">
        <img class="p-3" :src="products.image" alt="">
      </div>

      <div class="w-1/2 flex flex-col h-full">
        <div
          class="product-title h-1/2 text-gray-600 flex items-center cursor-pointer transition-all duration-200 hover:text-[#471d6b]">
          <p @click="getId(products.id)">{{ products.title.substring(0, 20) }}</p>
        </div>
        <div @click="getId(products.id)" class="h-1/2">
          <p class="text-[18px] font-bold text-gray-700">€ {{ products.price }}</p>
        </div>
        <div class="min-w-[160px] h-1/3 flex items-end gap-1 p-1">
          <button @click="shopStore.addToCart(products.id, products.title, products.price, '0', products.image)"
            class=" border-[1px] w-1/3 flex z-10 items-center justify-center cursor-pointer p-1 border-[#471d6b] group hover:bg-[#471d6b] transition-all duration-300 text-[#471d6b] font-bold">
            <Icon class="text-[#471d6b] transition-all duration-300 group-hover:text-white" icon="simple-line-icons:basket"
              width="24" height="24" />
          </button>
          <button @click="addCartAndSendtoBasket(products.id, products.title, products.price, '0', products.image)"
            class=" border-[1px] z-10 w-2/3 cursor-pointer p-1 border-[#471d6b] hover:bg-[#471d6b] transition-all duration-300 hover:text-white text-[#471d6b] font-serif font-bold">
            buy now</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@font-face {
  font-family: 'rabikiso';
  src: url('../assets/fonts/MerriweatherSans-Bold.ttf') format('truetype');
}

.product-title {
  font-family: 'Franklin Gothic Medium',
}

.product-desc {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>