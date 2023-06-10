<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import CareerSections from './components/CareerSections.vue'
import Tools from './components/Tools.vue'
import Footer from './components/Footer.vue'
import Specialization from './components/Specialization.vue'
import Languages from './components/Languages.vue'
import VProjectInfoModal from './restaurantComponents/V-Model/V-ProjectInfoModal.vue'
import { ref } from 'vue'
import { Icon } from '@iconify/vue';

const projectInfoToogle = ref(false)

function openProjectInfoToogle() {
  projectInfoToogle.value = true
  console.log(projectInfoToogle.value);

}
function closeProjectInfoToogle() {
  projectInfoToogle.value = false
}
</script>

<template>
  <div id="test" class="h-full flex-col bg-gray-700 flex">
    <!-- <Particles></Particles> -->
    <Navbar></Navbar>
    <div class="w-full h-full flex md:px-0 lg:px-20 xl:px-40">
      <div class="w-full flex relative h-full flex-col md:w-full bg-gray-800">
        <button @click="openProjectInfoToogle"
          class="absolute z-20 cursor-pointer p-1 text-white right-[175px] md:right-40 top-2 md:top-20 hover:border-yellow-400 transition-all duration-300 border-[1px] rounded-md">
          <Icon class="text-yellow-400" icon="mdi:robot" width="36" height="36" />
        </button>
        <Intro id="intro"></Intro>
        <Tools id="tools"></Tools>
        <Languages id="languages"></Languages>
        <Specialization id="specialization"></Specialization>
        <CareerSections class="flex"></CareerSections>
        <VProjectInfoModal :open="projectInfoToogle" @close="closeProjectInfoToogle()"></VProjectInfoModal>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
