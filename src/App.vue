<script setup>
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import Footer from './components/Footer.vue'
import Drawer from './components/Drawer.vue'
import LeftIntro from './components/LeftIntro.vue'
import Particles from './components/Particles.vue'
import CareerSections from './components/CareerSections.vue'
import Portfolio from './components/Portfolio.vue'
</script>

<template>
  <div class="h-full flex-col flex">
    <Particles></Particles>
    <Navbar></Navbar>
    <Drawer></Drawer>
    <div class="w-full h-full flex ">
      <div class="w-full flex h-full flex-col md:px-20 md:w-full bg-[#000000]">
        <Intro></Intro>
        <CareerSections></CareerSections>
        <Portfolio></Portfolio>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
