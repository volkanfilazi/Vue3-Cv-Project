<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { useLanguagesStore } from '../Store/Languages.store'

const languagesStore = useLanguagesStore()
const darkmode = useStorage("cvDarkmode", Boolean)

</script>
<template>
  <div
    class="observed-sections target md:mt-[300px] mt-10 flex p-2 md:p-0 md:py-10 flex-col justify-center w-full items-center relative sm:h-full gap-5 transition-all duration-200">
    <div class="flex md:mt-0 w-full items-center justify-center mt-5">
          <h1
            class="text-white rounded-lg text-center p-1 font-bold text-[20px] md:text-[30px]"
            :style="[{ color: darkmode ? 'black' : '' }, { borderColor: darkmode ? 'black' : '' }]"
            :class="{ '!shadow-red-500': darkmode }">
            {{ $t('languages') }}</h1>
      </div>
    <div
      class="w-full md:w-4/5 md:p-5 gap-5 grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div v-for="languages in languagesStore.languagesArray"
        class="flex p-5 border-[1px] hover:border-yellow-400 transition-all duration-300 flex-col items-center space-y-2"
        :class="[{ 'border-black': darkmode }, { 'hover:!border-red-600': darkmode }]">
        <h1 class="font-bold text-yellow-400" :style="{ color: darkmode ? 'black' : '' }">{{ languages.name }}</h1>
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
          style="--back:black;--progColor:yellow" :style="[
            { '--value': languages.value },
            { '--back': darkmode ? 'white' : '#111827' },
            { '--fg': darkmode ? 'red' : 'yellow' }]
            ">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div[role="progressbar"] {
  --size: 15rem;
  --fg: var(--progColor);
  --bg: rgb(46, 46, 46);
  --pgPercentage: var(--value);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(closest-side, var(--back) 95%, transparent 0 99.9%, rgb(31, 30, 30) 0),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

div[role="progressbar"]::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
}

@media (max-width: 500px) {
  div[role="progressbar"] {
    --size: 6rem;
  }
}
</style>