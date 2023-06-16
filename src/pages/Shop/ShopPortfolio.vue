<script setup lang="ts">
import { onMounted } from 'vue';
import AllProducts from '../../restaurantComponents/AllProducts.vue';
import Navbar from '../../restaurantComponents/NavBar.vue';
import Drawer from '../../restaurantComponents/Drawer.vue';
import Footer from '../../restaurantComponents/Footer.vue';

onMounted(() =>{
  window.scrollTo(0, 0);
})

</script>

<template>
  <div class="flex">
    <div class="flex flex-col w-full">
      <Navbar></Navbar>
      <AllProducts></AllProducts>
      <Footer></Footer>
    </div>
    <Drawer></Drawer>
  </div>
</template>
