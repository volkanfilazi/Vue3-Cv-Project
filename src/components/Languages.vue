<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>
<template>
  <div id="tools"
    class="observed-sections target md:mt-[300px] mt-10 flex p-2 md:p-0 flex-col justify-center w-full items-center relative sm:h-full gap-5 transition-all duration-200">
    <div class="flex flex-col md:mt-0 w-full justify-center items-center">
      <div class="w-[150px] md:w-[180px] flex justify-end">
        <div class="border-r-[2px] border-t-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
      <h1 class="text-white font-bold text-[20px] md:text-[30px]">Languages</h1>
      <div class="w-[150px] md:w-[180px] flex justify-start">
        <div class="border-l-[2px] border-b-[2px] w-5 h-5 border-yellow-400"></div>
      </div>
    </div>

    <div
      class="w-full md:w-4/5  md:p-5 gap-5 grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div
        class="flex border-[1px] p-5 md:p-10 hover:border-yellow-400 transition-all duration-300 flex-col items-center space-y-2">
        <h1 class="font-bold text-yellow-400">Turkish</h1>
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:100"></div>
      </div>
      <div
        class="flex border-[1px] p-5 md:p-10 hover:border-yellow-400 transition-all duration-300 flex-col items-center space-y-2">
        <h1 class="font-bold text-yellow-400">German</h1>
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:75"></div>
      </div>
      <div
        class="flex border-[1px] p-5 md:p-10 hover:border-yellow-400 transition-all duration-300 flex-col items-center space-y-2">
        <h1 class="font-bold text-yellow-400">English</h1>
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:70"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div[role="progressbar"] {
  --size: 12rem;
  --fg: rgb(250, 204, 21);
  --bg: rgb(255, 255, 255);
  --pgPercentage: var(--value);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(closest-side, rgb(31, 41, 55) 80%, transparent 0 99.9%, white 0),
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