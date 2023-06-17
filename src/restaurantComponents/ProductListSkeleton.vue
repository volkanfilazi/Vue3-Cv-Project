<script setup lang="ts">
import { useShopStore } from '../Store/Shop';

const shopStore = useShopStore()

</script>

<template>
  <div v-if="!shopStore.allProductsClone.length" class="grid lg:grid-cols-3 gap-2 ">
    <div class="p-2 rounded-md bg-white h-[200px] relative md:mt-3 cursor-pointer flex" v-for="products in 18">
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