<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';
import { get, useStorage } from "@vueuse/core";
import router from '../router/router';
import { Icon } from '@iconify/vue';

const shopStore = useShopStore()
let selectedCategory = ref<string>('')
let selectedPrice = ref<string>('')
let minPrice = ref<string>('')
let maxPrice = ref<string>('')
const selectedSorter = ref('')
const resultTitle = ref('All Products')
const selectedProductId = useStorage("id", Number)

onMounted(async () => {
  shopStore.getAllProducts()
  const categorySelected = ref('electronics')
  const repsonse = shopStore.allProducts.filter(products => products.category === categorySelected.value)
  shopStore.allProductsClone = repsonse
})


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



async function addCart(productId: number, title: string, price: string, count: string, image: string) {
  const response = shopStore.addToCart(productId, title, price, count, image)
  shopStore.getCarts()

}
async function addCartAndSendtoBasket(productId: number, title: string, price: string, count: string, image: string) {
  const response = shopStore.addToCart(productId, title, price, count, image)
  shopStore.getCarts()
  router.push({ name: 'basket' })

}

function getId(id: number) {
  selectedProductId.value = undefined
  selectedProductId.value = id
  router.push({ name: 'shopDetail', params: { id: selectedProductId.value } })
}


watchEffect(() => {
  if (selectedSorter.value === 'sort by name A-Z') {
    shopStore.sortAToZ()
  }
  if (selectedSorter.value === 'sort by name Z-A') {
    shopStore.sortZToA()
  }
  if (selectedSorter.value === 'sort by price 100-0') {
    shopStore.sortExpensiveToCheap()
  }
  if (selectedSorter.value === 'sort by price 0-100') {
    shopStore.sortCheapToExpensive()
  }
})

</script>

<template>
  <div class="w-full lg:w-5/6 px-2 md:px-0 h-[60px] flex justify-center items-center gap-5 bg-[#471d6b] text-gray-300">
    <p>FREE SHIPPING</p>
    <p>24/7 SUPPORT</p>
    <p>MONEY BACK</p>
    <p>5% CASHBACK</p>
  </div>
  <div class="w-full lg:w-5/6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 bg-orange-500">

    <div class=" h-[270px] relative text-white items-center flex justify-center gap-5 cursor-pointer">
      <div class="bg-auto relative lg:bg-no-repeat bg-center h-full w-full"
        style="background-image: url('https://i.pinimg.com/originals/c9/79/b0/c979b0df5bdb8538117524e7fd4346c1.jpg')">
        <div class="absolute text-red-800 p-10 space-y-4">
          <div class="text-2xl">DO YOU BELIEVE MAGIC?</div>
          <div class="text-2x1">10% OFF</div>
          <button
            class="border-[1px] hover:border-purple-600 p-2 transition-all duration-300 hover:text-purple-600">DISCOVER</button>
        </div>
      </div>
    </div>

    <div class="h-[270px] text-white items-center flex justify-center gap-5">
      <div class="bg-auto relative bg-no-repeat bg-center h-full w-full"
        style="background-image: url('https://t3.ftcdn.net/jpg/03/94/11/10/360_F_394111088_TCUFgYfGsRqOVDddr29BOXYd9N4j8yDR.jpg')">
        <div class="absolute text-red-800 p-10 space-y-4">
          <div class="text-2xl">MAKE UP YOURSELF</div>
          <div class="text-2x1">50% OFF</div>
          <button
            class="border-[1px] border-red-800 hover:border-purple-600 p-2 transition-all duration-300 hover:text-purple-600">DISCOVER</button>
        </div>
      </div>
    </div>

    <div class="h-[270px] text-white items-center flex justify-center gap-5 group">
      <div class="bg-auto relative lg:bg-no-repeat bg-center h-full w-full"
        style="background-image: url('https://img.freepik.com/premium-photo/ring-with-diamonds-black-background-3d-rendering_34478-2539.jpg')">
        <div class="absolute text-white p-10 space-y-4">
          <div class="text-2xl">NATURAL ITEMS</div>
          <div class="text-2x1">15% OFF</div>
          <button
            class="border-[1px] z-10 hover:border-purple-600 p-2 transition-all duration-300 hover:text-purple-600">DISCOVER</button>
        </div>
      </div>
    </div>

  </div>
  <div class="flex lg:w-5/6 flex-col bg-[#f6eeff]">
    <div class="w-full flex-col md:flex-row flex border-b-[1px] bg-[#f6eeff] border-white md:pl-5 md:pr-5 md:p-3">
      <div class="w-full md:w-1/3 text-center md:text-start">
        {{ shopStore.allProductsClone.length }} results for <span class="text-purple-600 font-bold">{{ resultTitle
        }}</span>
      </div>
      <div class="w-full md:w-2/3 justify-center flex items-center gap-10 md:pr-5 md:justify-end md:text-center">
        <select v-model="selectedSorter" class="border-[1px] rounded-lg shadow-sm shadow-blue-500">
          <option disabled value="">Select a Sort Type</option>
          <option>sort by name A-Z</option>
          <option>sort by name Z-A</option>
          <option>expensive price</option>
          <option>cheaper price</option>
        </select>
      </div>
    </div>

    <div class="w-full flex flex-col md:flex-row md:p-5 gap-1  bg-[#f6eeff]">
      <div class="flex flex-col w-full px-1 md:px-[200px]">
        <div class="flex items-center justify-center gap-10">
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
        <div v-if="shopStore.allProductsClone.length > 0" class="md:w-full mt-5 gap-3 grid grid-cols-1 w-full"
          :class="{ 'grid lg:grid-cols-3': shopStore.allProductsClone.length > 0 }">
          <div class="p-2 rounded-md bg-white h-[200px] relative md:mt-3 cursor-pointer flex"
            v-for="products in shopStore.allProductsClone">
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
                <button @click="addCart(products.id, products.title, products.price, '0', products.image)"
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
          <div class="p-2 rounded-md bg-white h-[200px] relative md:mt-3 cursor-pointer flex" v-for="products in 18">
            <div
              class="w-10 h-6 skeleton absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
              <p></p>
            </div>
            <div
              class="w-10 h-6 skeleton absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
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
    </div>
    <div class="w-full h-[500px] md:h-[300px] flex justify-center">
      <div class="w-full flex-col md:flex-row h-[400px] md:h-[100px] mt-10 gap-10 bg-[#e1a064] flex justify-center items-center">
        <div class="w-[150px] h-[150px] rounded-full  bg-purple-900 flex flex-col items-center justify-center text-white">
          <p class="text-4xl">30%</p>
          <p class="text-2xl">OFF</p>
        </div>
        <div class="text-purple-700 flex gap-2">
          <p class="text-4xl">Valentine's</p>
          <p class="text-4xl">Day</p>
        </div>
        <button class="border-[1px] p-1 border-purple-700 hover:bg-purple-700 hover:text-white transition-all duration-300">SHOP NOW</button>
      </div>
    </div>

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
                <button @click="addCart(products.id, products.title, products.price, '0', products.image)"
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
            <div
              class="w-10 h-6 skeleton absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
              <p></p>
            </div>
            <div
              class="w-10 h-6 skeleton absolute -top-3 flex items-center justify-center text-white text-[13px] right-0">
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



@font-face {
  font-family: 'rabikiso';
  src: url('../assets/fonts/MerriweatherSans-Bold.ttf') format('truetype');
}

.product-title {
  font-family: 'Franklin Gothic Medium',
}

.product-desc {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}</style>