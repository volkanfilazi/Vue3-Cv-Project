<script setup lang="ts">
import { useScroll, useStorage, watchDebounced } from '@vueuse/core';
import { ref, watchEffect } from 'vue';
import { useIntroRightNavs } from '../Store/IntroRightNav.store';
import { Icon } from '@iconify/vue';


const darkmode = useStorage("cvDarkmode", Boolean)
const { y } = useScroll(window)
const IntroRightNav = useIntroRightNavs()
const sections = ref()
const currentIndex = ref(0)

watchEffect(() => {
  if (y.value !== -1)
    sections.value = Array.prototype.slice.call(document?.querySelectorAll('body .observed-sections'))
})

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
  <div
    class="text-white z-50 fixed md:hidden bottom-0 flex justify-between bg-gray-800 h-[50px] w-full mr-5 border-t-[1px] text-xl p-4 shadow-md shadow-black"
    :style="{ backgroundColor: darkmode ? 'red' : '' }">
    <div v-for="(rightNav, index) in IntroRightNav.rightNavElements" :key="index">
      <a :href="rightNav.linkPath">
        <Icon class="text-yellow-400!" :class="{ 'text-yellow-400': currentIndex === index }" :icon="rightNav.image"
          width="24" height="24" />
      </a>
    </div>
  </div>
</template>