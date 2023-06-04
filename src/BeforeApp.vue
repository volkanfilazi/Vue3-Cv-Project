<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import Drawer from './components/Drawer.vue'
import CareerSections from './components/CareerSections.vue'
import Tools from './components/Tools.vue'
import Footer from './components/Footer.vue'
import Test from './components/Test.vue'
import Specialization from './components/Specialization.vue'

</script>

<template>
  <div id="test" class="h-full flex-col flex">
    <!-- <Particles></Particles> -->
    <Navbar></Navbar>
    <Drawer></Drawer>
    <div class="w-full h-full flex">
      <div class="w-full flex h-full flex-col md:w-full bg-gray-800">
        <Intro id="intro"></Intro>
        <Tools id="tools"></Tools>
        <Specialization id="specialization"></Specialization>
        <CareerSections class="flex"></CareerSections>
        <Test ></Test>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
  #test{
    cursor: url('./image/icons8-cursor-50.png')10 10,auto;
  }
</style>
