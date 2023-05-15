<script setup>
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import Drawer from './components/Drawer.vue'
import Particles from './components/Particles.vue'
import CareerSections from './components/CareerSections.vue'
import CareerSectionsCopy from './components/CareerSectionsCopy.vue'
import Portfolio from './components/Portfolio.vue'
import Tools from './components/Tools.vue'
import Footer from './components/Footer.vue'
import Test from './components/Test.vue'
</script>

<template>
  <div id="test" class="h-full flex-col flex">
    <!-- <Particles></Particles> -->
    <Navbar></Navbar>
    <Drawer></Drawer>
    <div class="w-full h-full flex ">
      <div class="w-full flex h-full flex-col md:w-full bg-[#000000]">
        <Intro></Intro>
        <Tools></Tools>
        <CareerSections class="flex sm:flex md:hidden"></CareerSections>
        <CareerSectionsCopy class="hidden sm:hidden md:flex"></CareerSectionsCopy>
        <Test></Test>
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
