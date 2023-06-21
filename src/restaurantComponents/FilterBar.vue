<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useShopStore } from '../Store/Shop';

const shopStore = useShopStore()
const selectedSorter = ref('')
const resultTitle = ref('All Products')

onMounted(() =>{
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
  <div class="w-full flex-col md:flex-row flex border-b-[1px] items-center bg-[#f6eeff] border-white md:pl-5 md:pr-5 md:p-3">
      <div class="w-full md:w-1/3 text-center md:text-start">
        {{ shopStore.allProductsClone.length }} results for <span class="text-[#471d6b] font-bold">{{ resultTitle
        }}</span>
      </div>
      <div class="w-full md:w-2/3 justify-center flex items-center gap-10 md:pr-5 md:justify-end md:text-center">
        <select v-model="selectedSorter" class="border-[1px] bg-[#471d6b] px-2 p-1 text-white cursor-pointer outline-none rounded-lg shadow-sm shadow-blue-500">
          <option disabled value="">Select a Sort Type</option>
          <option>sort by name A-Z</option>
          <option>sort by name Z-A</option>
          <option>expensive price</option>
          <option>cheaper price</option>
        </select>
      </div>
    </div>
</template>