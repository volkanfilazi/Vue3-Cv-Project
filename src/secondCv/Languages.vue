<script setup lang="ts">
import { useLanguagesStore } from '../Store/Languages.store'

const languagesStore = useLanguagesStore()

</script>

<template>
  <div class="flex flex-col h-full md:flex-row w-3/3 md:h-full">
    <div class="flex items-center w-full md:w-1/4">
      <h1 class="text-white w-full text-center p-5 md:-rotate-90 font-bold tracking-widest text-3xl md:text-5xl">Languages</h1>
    </div>
    <div class="md:w-3/4 flex flex-col gap-5 items-center justify-center text-white">
      <div
      class="w-full md:w-full md:p-5 gap-5 grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div v-for="languages in languagesStore.languagesArray"
        class="flex p-5 md:p-10 h-full transition-all duration-300 flex-col items-center space-y-2">
        <h1 class="font-bold text-yellow-400">{{ languages.name }}</h1>
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
          style="--back:rgb(5 46 22 / var(--tw-bg-opacity));--progColor:yellow"
          :style="{ '--value': languages.value }">
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
div[role="progressbar"] {
  --size: 15rem;
  --fg: var(--progColor);
  --bg: rgb(247, 247, 247);
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
    --size: 8rem;
  }
}
</style>