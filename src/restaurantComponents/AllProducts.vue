<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useShopStore } from '../Store/Shop';

const shopStore = useShopStore()
let selectedCategory = ref<string>('')
let selectedPrice = ref<string>('')
let minPrice = ref<string>('')
let maxPrice = ref<string>('')
const selectedSorter = ref('')
const resultTitle = ref('All Products')

onMounted(async () => {
  await shopStore.getAllProducts()
  await shopStore.getAllCategories()
})
async function getACategory(name: string) {
  selectedPrice.value = ''
  await shopStore.getAllProducts()
  const response = shopStore.allProducts.filter(products => products.category === name)
  shopStore.allProducts = response
  selectedCategory.value = name
  if (name) {
    resultTitle.value = name
  }
}

async function getAllProducts() {
  await shopStore.getAllProducts()
  selectedCategory.value = "all"
  if (selectedCategory.value === 'all') {
    resultTitle.value = "All Products"
  }
}

async function priceFilter(price: string) {
  selectedCategory.value = ''
  selectedPrice.value = price
  await shopStore.getAllProducts()
  if (price === '0-20') {
    const response = shopStore.allProducts.filter(price => price.price <= '20')
    shopStore.allProducts = response
    console.log(response);
  }
  if (price === '20-50') {
    const response = shopStore.allProducts.filter(price => price.price >= '20' && price.price <= '50')
    shopStore.allProducts = response
    console.log(response);
  }
  if (price === '50-1000') {
    const response = shopStore.allProducts.filter(price => price.price >= '50' && price.price <= '1000')
    shopStore.allProducts = response
    console.log(response);
  }
  if (price === 'clear') {
    await shopStore.getAllProducts()
    minPrice.value = ''
    maxPrice.value = ''
  }
}

async function priceRangeFilter() {
  const response = shopStore.allProducts.filter(rangePrice => rangePrice.price >= minPrice.value && rangePrice.price <= maxPrice.value)
  if (response.length > 0) {
    shopStore.allProducts = response
  } else {
    console.log("nothing");
  }
}

</script>

<template>
  <div class="flex flex-col">

    <div class="w-full flex border-b-[1px] border-gray-300 md:pl-5 md:pr-5 md:p-3">
      <div class="w-1/3">
        {{ shopStore.allProductsClone.length }} results for <span class="text-orange-500 font-bold">{{ resultTitle
        }}</span>
      </div>
      <div class="w-2/3 flex items-center gap-10 md:pr-5 justify-end text-center">
        <select v-model="selectedSorter">
          <option disabled value="">Please select one</option>
          <option>sort by name A-Z</option>
          <option>sort by name Z-A</option>
          <option>sort by price 0-100</option>
          <option>sort by price 100-0</option>
        </select>
        <p class="text-center text-red-700 font-bold">Admin Panel</p>
      </div>
    </div>

    <div class="w-4/4 flex flex-col md:flex-row md:p-5 gap-1">
      <div class="w-full md:w-1/4 flex p-10 md:p-0 flex-col">
        <div class="gap-5 flex flex-row md:flex-col">
          <div class="space-y-2">
            <h1 class="font-bold text-lg">Categories</h1>
            <p class="cursor-pointer" :class="{ 'text-red-700 font-bold': selectedCategory === 'all' }"
              @click="getAllProducts">all</p>
            <div v-for="category in shopStore.allCategories">
              <p class="cursor-pointer" @click="getACategory(category)"
                :class="{ 'text-red-700 font-bold': category === selectedCategory }">{{ category }}</p>
            </div>
          </div>
          <div class="space-y-2">
            <h1 class="font-bold text-lg">Price</h1>
            <p class="cursor-pointer" @click="priceFilter('clear')">clear</p>
            <p class="cursor-pointer" :class="{ 'text-red-700 font-bold': selectedPrice === '0-20' }"
              @click="priceFilter('0-20')">0 - 20</p>
            <p class="cursor-pointer" :class="{ 'text-red-700 font-bold': selectedPrice === '20-50' }"
              @click="priceFilter('20-50')">20 - 50</p>
            <p class="cursor-pointer" :class="{ 'text-red-700 font-bold': selectedPrice === '50-1000' }"
              @click="priceFilter('50-1000')">50 - 1000</p>
            <div class="space-x-2">
              <input placeholder="min" class="p-1 w-14 border-[1px] border-black rounded-lg" min="0" type="number"
                v-model="minPrice">
              <input placeholder="max" class="p-1 w-14 border-[1px] border-black rounded-lg" type="number"
                v-model="maxPrice">
              <button class="border-[1px] p-1 border-black rounded-full" @click="priceRangeFilter()">Filter</button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-3/4"
        :class="{ 'grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4': shopStore.allProductsClone.length > 0 }">
        <div v-if="shopStore.allProductsClone.length > 0"
          class="p-2 border-[1px] border-gray-300 h-5/5 flex items-center flex-col justify-center"
          v-for="products in shopStore.allProductsClone">
          <img class="h-2/4 p-2" :src="products.image" alt="">
          <div class="h-1/4 flex justify-center items-center">
            <p>{{ products.title }}</p>
          </div>
          <div class="h-1/4 flex justify-center items-center">
            <p class="text-center border-[1px] cursor-pointer p-1 border-gray-400 hover:border-orange-600 rounded-lg">€ {{
              products.price }}</p>
          </div>
        </div>
        <div class="text-xl w-[300px] h-[150px] bg-red-700 flex items-center justify-center rounded-xl text-white" v-else>
          <p>Sorry there is nothing to show :/</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>