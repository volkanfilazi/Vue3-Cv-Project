<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';
import ProductList from './ProductList.vue';
import ProductListSkeleton from './ProductListSkeleton.vue'
import ElectronicProducts from './ElectronicProducts.vue'
import MiddleStrip from './MiddleStrip.vue'
import UpperImages from './UpperImages.vue'
import CategoriesBar from './CategoriesBar.vue'
import FilterBar from './FilterBar.vue'

const shopStore = useShopStore()

onMounted(async () => {
  await shopStore.getAllProducts()
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
    <FilterBar></FilterBar>
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

<style scoped></style>