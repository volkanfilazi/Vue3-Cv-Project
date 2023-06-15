<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import Tools from './components/Tools.vue'
import Footer from './components/Footer.vue'
import Specialization from './components/Specialization.vue'
import Languages from './components/Languages.vue'
import VProjectInfoModal from './restaurantComponents/V-Model/V-ProjectInfoModal.vue'
import { ref, watchEffect } from 'vue'
import { Icon } from '@iconify/vue';
import { useScroll, watchDebounced } from '@vueuse/core'
import MyResume from './components/MyResume.vue'
import { useStorage } from '@vueuse/core'


const projectInfoToogle = ref(false)
const darkmode = useStorage("darkmode", Boolean)




function openProjectInfoToogle() {
  projectInfoToogle.value = true

}
function closeProjectInfoToogle() {
  projectInfoToogle.value = false
}

const sections = ref()

const { y, directions, isScrolling } = useScroll(window)

watchEffect(() => {
  if (y.value !== -1)
    sections.value = Array.prototype.slice.call(document?.querySelectorAll('body .observed-sections'))
})

const currentIndex = ref(0)

watchDebounced(y, () => {
  if (y.value >= 0 && sections.value?.length) {
    currentIndex.value = sections.value.findIndex((e) => {
      const clientRect = e.getBoundingClientRect()
      return clientRect.top >= 0
    })
  }
}, { debounce: 50, maxWait: 100 })
</script>

<template>
  <div id="test" class="h-full flex-col bg-gray-700 flex" :style="{backgroundColor : darkmode ? 'white' : ''}">
    <!-- <Particles></Particles> -->
    <Navbar></Navbar>
    <div class="w-full h-full flex md:px-0 lg:px-20 xl:px-40">
      <div class="w-full flex relative h-full flex-col md:w-full bg-gray-800" :style="{backgroundColor : darkmode ? '#f9f8f8' : ''}">
        <button @click="openProjectInfoToogle"
          class="absolute z-20 cursor-pointer p-1 text-white right-[45%] md:right-40 top-5 md:top-20 hover:border-yellow-400 transition-all duration-300 border-[1px] rounded-md"
          :class="[{'hover:border-red-500' : darkmode},{'border-black' : darkmode}]">
          <Icon class="text-yellow-400" icon="mdi:robot" width="36" height="36" 
          :style="{color : darkmode ? 'red' : ''}"/>
        </button>
        <Intro id="intro"></Intro>
        <Tools id="tools"></Tools>
        <Languages id="languages"></Languages>
        <Specialization id="specialization"></Specialization>
        <MyResume id="myresume"></MyResume>
        <VProjectInfoModal :open="projectInfoToogle" @close="closeProjectInfoToogle()"></VProjectInfoModal>
        <div
          class="text-white z-50 fixed md:hidden bottom-0 flex justify-between bg-gray-800 h-[50px] w-full mr-5 border-t-[1px] text-xl p-4 shadow-md shadow-black"
          :style="{backgroundColor : darkmode ? 'red' : ''}">
          <a href="#intro"><Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 0 }" icon="mdi:home-outline"
            width="24" height="24" /></a>
          <a href="#tools"><Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 1 }" icon="et:tools-2" width="24"
            height="24" /></a>
          <a href="#languages"><Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 2 }"
            icon="material-symbols:language" width="24" height="24" /></a>
          <a href="#specialization"><Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 3 }"
            icon="material-symbols:group-work-outline" width="24" height="24" /></a>
          <a href="#myresume"><Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === 4 }" icon="game-icons:skills"
            width="24" height="24" /></a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
