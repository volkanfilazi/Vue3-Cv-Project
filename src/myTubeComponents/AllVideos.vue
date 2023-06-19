<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue';
import { Icon } from '@iconify/vue';
import { useVideoStore } from '../Store/MyTube/AllVideos.store'

const videoStore = useVideoStore()

const videoElement = ref<HTMLVideoElement | null>(null);
const startStopToogle = ref(false)
const videTimeCounter = ref(0)
const intervalId = ref(null)

onMounted(async () =>{
  await videoStore.getAllVideos()
})

function start() {
  startStopToogle.value = !startStopToogle.value;

  if (startStopToogle.value === true) {
    videoElement.value.play();

    intervalId.value = setInterval(() => {
      if (videTimeCounter.value >= Math.floor(videoElement.value.duration)) {
        clearInterval(intervalId.value);
        startStopToogle.value = false;
        videTimeCounter.value = 0
      } else {
        videTimeCounter.value++;
      }
    }, 1000);
  } else {
    videoElement.value.pause();
    clearInterval(intervalId.value);
  }
}
//../assets/videos/pexels-pressmaster-3130182-3840x2160-30fps.mp4
            const images = [
                { url: '../public/BookingAdmin.png', alt: 'I love you nature' },
                { url: '../assets/BookingBook.png', alt: 'Now with dog - Rosé' }
            ]
</script>

<template>
  <div class="w-full h-full flex relative flex-col items-center justify-center">
    <div @click="start" class="group w-1/2 h-full bg-red-500">
      <video  class="w-full" ref="videoElement" playsinline muted poster=''>
      <source src="" type='video/mp4'>
    </video>
    <div class="text-white absolute bottom-0 hidden border-t-[1px] border-red-500 w-1/2 group-hover:flex">
      <div class="bg-red-500 z-10 cursor-pointer">
        <Icon class="w-[36px] h-[36px]" :icon="startStopToogle ? 'mdi:pause' : 'mdi:play'" color="white" />
      </div>
      <p>{{ videoElement ? videTimeCounter : '' }} / {{ videoElement ? Math.floor(videoElement.duration) : '' }}</p>
    </div>
  </div>

  <div v-for="asd in videoStore.allVideos">
    <div v-for="total in asd.videos">
      <p class="text-black">{{ total.height }}</p>
    </div>
  </div>
  </div>
</template>