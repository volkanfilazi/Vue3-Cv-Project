<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useSpecializationStore } from '../Store/Specialization';
const vue = ref(false)
const typescript = ref(false)
const kotlin = ref(false)

const specializationStore = useSpecializationStore()

function zero() {
  if (vue.value === true) {
    specializationStore.copySpecializationArray = specializationStore.specializationArray.filter((item) =>
      item.frameworks.includes('Vue.js')
    );
  } else {
    specializationStore.copySpecializationArray = specializationStore.specializationArray.slice();
  }
}

function one() {
  if (typescript.value === true) {
    const typeCheckResults = specializationStore.specializationArray.filter((item) =>
      item.frameworks.includes('Typescript')
    );
    specializationStore.copySpecializationArray = typeCheckResults;
  } else {
    specializationStore.copySpecializationArray = specializationStore.specializationArray.slice();
  }
}

function second() {
  if (kotlin.value === true) {
    specializationStore.copySpecializationArray = specializationStore.specializationArray.filter((item) =>
      item.frameworks.includes('Kotlin')
    );
  } else {
    specializationStore.copySpecializationArray = specializationStore.specializationArray.slice();
  }
}
watchEffect(() => {  
  zero()
})

watchEffect(() => {  
  one()
}, { flush: 'post' })

watchEffect(() => {  
  second()
}, { flush: 'post' })
</script>

<template>
  <div class=" lg:w-1/5 md:mt-5 border-[1px] p-2">
        <h1>Filter</h1>

        <div>
          <h2 class="text-yellow-400">Program Languages</h2>
          <div class="flex flex-col px-2 text-white">
            <div class="flex items-center gap-2">
              <input v-model="vue" class="w-4 h-4" id="vue.js" type="checkbox">
              <label for="vue.js">Vue.js</label>
            </div>
            <div class="flex items-center gap-2">
              <input v-model="typescript" class="w-4 h-4" id="typescript" type="checkbox">
              <label for="typescript">Typescript</label>
            </div>
            <div class="flex items-center gap-2">
              <input v-model="kotlin" class="w-4 h-4" id="kotlin" type="checkbox">
              <label for="kotlin">Kotlin</label>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-yellow-400">Hosting(Coming Soon)</h2>
          <div class="flex flex-col px-2 text-white">
            <div class="flex items-center gap-2">
              <input class="w-4 h-4" id="vue.js" type="radio">
              <label for="vue.js">Online</label>
            </div>
            <div class="flex items-center gap-2">
              <input class="w-4 h-4" id="html" type="radio">
              <label for="html">Offline</label>
            </div>
            <div class="flex items-center gap-2">
              <input class="w-4 h-4" id="css" type="radio">
              <label for="css">Coming Soon</label>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-yellow-400">Rating(Coming Soon)</h2>
          <div class="flex flex-col px-2 text-white">
            <div class="flex items-center gap-2">
              <input class="w-4 h-4" id="vue.js" type="radio">
              <label for="vue.js">High rating</label>
            </div>
            <div class="flex items-center gap-2">
              <input class="w-4 h-4" id="html" type="radio">
              <label for="html">Low rating</label>
            </div>
          </div>
        </div>

      </div>
</template>