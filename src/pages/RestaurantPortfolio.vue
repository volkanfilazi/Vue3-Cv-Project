<script setup lang="ts">
import { onMounted } from 'vue';
import AllProducts from '../restaurantComponents/AllProducts.vue';
import Navbar from '../restaurantComponents/NavBar.vue';
import Drawer from '../restaurantComponents/Drawer.vue';

</script>

<template>
  <div class="flex">
    <div class="flex flex-col w-full">
      <Navbar></Navbar>
      <AllProducts></AllProducts>
    </div>
    <Drawer></Drawer>
  </div>
</template>
