<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';
import ProductList from './ProductList.vue';
import ProductListSkeleton from './ProductListSkeleton.vue'
import ElectronicProducts from './ElectronicProducts.vue'
import MiddleStrip from './MiddleStrip.vue'
import UpperImages from './UpperImages.vue'
import CategoriesBar from './CategoriesBar.vue'

const shopStore = useShopStore()
const selectedSorter = ref('')
const resultTitle = ref('All Products')

onMounted(async () => {
  shopStore.getAllProducts()
  const categorySelected = ref('electronics')
  const repsonse = shopStore.allProducts.filter(products => products.category === categorySelected.value)
  shopStore.allProductsClone = repsonse
})

watchEffect(() => {
  if (selectedSorter.value === 'sort by name A-Z') {
    shopStore.sortAToZ()
  }
  if (selectedSorter.value === 'sort by name Z-A') {
    shopStore.sortZToA()
  }
  if (selectedSorter.value === 'expensive price') {
    shopStore.sortExpensiveToCheap()
  }
  if (selectedSorter.value === 'cheaper price') {
    shopStore.sortCheapToExpensive()
  }
})

</script>

<template>
  <div
    class="w-full text-sm md:text-[15px] lg:w-5/6 px-2 md:px-0 h-[60px] flex justify-center items-center gap-5 bg-[#471d6b] text-gray-300">
    <p>FREE SHIPPING</p>
    <p>24/7 SUPPORT</p>
    <p>MONEY BACK</p>
    <p>5% CASHBACK</p>
  </div>
  <UpperImages></UpperImages>
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
    <div class="w-full flex flex-col md:flex-row md:p-5 gap-1 bg-[#f6eeff]">
      <div class="flex flex-col w-full px-1 md:px-[200px]">
        <CategoriesBar></CategoriesBar>
        <ProductList></ProductList>
        <ProductListSkeleton></ProductListSkeleton>
      </div>
    </div>
    <MiddleStrip></MiddleStrip>
    <ElectronicProducts></ElectronicProducts>
  </div>
</template>

<style scoped>

</style>