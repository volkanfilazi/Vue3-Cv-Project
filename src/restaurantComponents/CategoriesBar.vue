<script setup lang="ts">
import { ref } from 'vue';
import { useShopStore } from '../Store/Shop';

let selectedCategory = ref<string>('')
const shopStore = useShopStore()
let selectedPrice = ref<string>('')
const resultTitle = ref('All Products')

async function getACategory(name: string) {
  selectedPrice.value = ''
  await shopStore.getAllProducts()
  const response = shopStore.allProducts.filter(products => products.category === name)
  shopStore.allProductsClone = response
  selectedCategory.value = name
  if (name) {
    resultTitle.value = name
  }
}
</script>

<template>
  <div class="flex items-center justify-center gap-2 text-sm mb-3 md:text-[15px] md:mb-0 md:gap-10">
          <button @click="getACategory('electronics')" class="bg-transparent"
            :class="{ ' text-purple-700 font-bold rounded-sm p-1': selectedCategory === 'electronics' }">Electronics</button>
          <button @click="getACategory('jewelery')" class="bg-transparent"
            :class="{ ' text-purple-700 font-bold rounded-sm p-1': selectedCategory === 'jewelery' }">Jewelery</button>
          <button @click="getACategory(`men's clothing`)" class="bg-transparent"
            :class="{ ' text-purple-700 font-bold rounded-sm p-1': selectedCategory === `men's clothing` }">Men's
            Clothing</button>
          <button @click="getACategory(`women's clothing`)" class="bg-transparent"
            :class="{ ' text-purple-700 font-bold rounded-sm p-1': selectedCategory === `women's clothing` }">Women's
            Clothing</button>
        </div>
</template>