<script setup lang="ts">
import { Ref, ref, watchEffect } from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";

let router = useRouter()
const projectLoadingMessage = ref('Shop loading')
const apiResponseMessage = ref('Api response testing')
const allTestingMessage = ref('Testing')
const loadingToogle = useStorage('laoading',Boolean)


export interface Props {
  open: boolean
  firstStep?: boolean
  firstStepPulse?: boolean
  secondStep?: Ref<boolean>
  secondStepPulse?: boolean
  thirdStepPulse?: boolean
  thirdStep?: boolean
}

const prop = withDefaults(defineProps<Props>(), {
  open: false
})
const firstStep = ref(false)
const firstStepPulse = ref(true)
const secondStep = ref(false) as Ref<boolean>;
const secondStepPulse = ref(false)
const thirdStepPulse = ref(false)
const thirdStep = ref(false)

watchEffect(() => {
  if (prop.open) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  if(loadingToogle){
    const firstStepPromise = new Promise<void>((resolve) => {
    setTimeout(() => {
      firstStepPulse.value = false;
      firstStep.value = true;
      resolve();
    }, 2000);
  });

  const secondStepPromise = firstStepPromise.then(() => {
    if (firstStep.value) {
      projectLoadingMessage.value = 'Project loading passed';
      secondStepPulse.value = true;
    }
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        secondStepPulse.value = false;
        secondStep.value = true;
        resolve();
      }, 2000);
    });
  });

  const thirdStepPromise = secondStepPromise.then(() => {
    if (secondStep.value) {
      thirdStepPulse.value = true;
      apiResponseMessage.value = 'Api response testing passed';
    }
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        thirdStepPulse.value = false;
        thirdStep.value = true;
        resolve();
      }, 2000);
    });

  });
  }

})

function showMe(){
  router.push({ name: 'shop' })
  loadingToogle.value = false
  firstStep.value = false
  firstStepPulse.value = false
  secondStep.value = false
  secondStepPulse.value = false
  thirdStepPulse.value = false
  thirdStep.value = false
}

</script>

<template>
      <div v-show="prop.open" class="fixed flex justify-center items-center left-0 top-0 right-0 bottom-0 z-50">
        <div class="absolute flex-col gap-5 w-full h-full bg-black flex justify-center items-center">
          <div class="text-yellow-400 w-[300px] font-bold flex gap-2 p-1 border-[1px] border-white  text-xl">
            <div v-if="firstStepPulse" class="w-1/3 bg-green-500 animate-pulse h-5"></div>
            <div v-if="firstStep" class="w-1/3 bg-[#0fe70f] h-5"></div>
            <div v-if="secondStepPulse" class="w-1/3 bg-green-500 animate-pulse h-5"></div>
            <div v-if="secondStep" class="w-1/3 bg-[#0fe70f] h-5"></div>
            <div v-if="thirdStepPulse" class="w-1/3 animate-pulse bg-green-500 h-5"></div>
            <div v-if="thirdStep" class="w-1/3 bg-[#0fe70f] h-5"></div>
          </div>
          <div class="w-[300px]">
            <div class="flex gap-1">
              <Icon class="text-yellow-400" :style="{ color: firstStep ? '#0fe70f' : '' }"
                :icon="firstStep ? 'material-symbols:check' : 'line-md:uploading-loop'" width="24" height="24" />
              <div class="text-yellow-400 font-bold text-[14px]" :style="{ color: firstStep ? '#0fe70f' : '' }"> {{
                projectLoadingMessage }} </div>
            </div>
            <div class="flex gap-1">
              <Icon class="text-yellow-400" :style="{ color: secondStep ? '#0fe70f' : '' }"
                :icon="secondStep ? 'material-symbols:check' : 'line-md:uploading-loop'" width="24" height="24" />
              <div class="text-yellow-400 transition-all duration-300 font-bold text-[14px]"
              :style="{ color: secondStep ? '#0fe70f' : '' }">{{ apiResponseMessage }}</div>
            </div>
            <div class="flex gap-1">
              <Icon class="text-yellow-400" :style="{ color: thirdStep ? '#0fe70f' : '' }"
                :icon="thirdStep ? 'material-symbols:check' : 'line-md:uploading-loop'" width="24" height="24" />
              <div class="text-yellow-400 font-bold text-[14px]" :style="{ color: thirdStep ? '#0fe70f' : '' }">{{
                allTestingMessage }}</div>
            </div>
          </div>
          <div  v-if="thirdStep" class="flex items-center gap-1">
            <h1 class="text-white">control successful</h1>
            <button @click="showMe()" class="font-bold text-[#0fe70f] p-2 rounded-md hover:bg-green-500 hover:text-black transition-all duration-300">go to shop</button>
          </div>
        </div>
      </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}</style>