<script setup lang="ts">
import { ref, watchEffect } from 'vue';

export interface Props {
  open: boolean
}

export interface Emits {
  (e: 'close', value: boolean): void
}

const prop = withDefaults(defineProps<Props>(), {
  open: false
})

const test = ref<any>('Hi,you have reached the life model virtual of volkan filazi')
const test2 = ref<any>('If you want information about the project, you can use the commands below...')
const programLanguages = ref<string>('Vue.js, HTML, Css, Tailwindcss, Js')
const thema = ref<string>('I integrated a free API I found on the internet into my project, manipulated it with the local database and designed a store.')
const displayText = ref<any>('')
const displayText2 = ref<any>('')
const isTyping = ref<boolean>(false)
let timer: NodeJS.Timeout | null = null;
let timer3: NodeJS.Timeout | null = null;
let timer4: NodeJS.Timeout | null = null;
const displayText4 = ref<any>('');
const isTyping4 = ref<boolean>(false);

const questions = ref('')

function typeText() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  isTyping.value = true;
  let i = 0;
  let a = 0;

  timer = setInterval(() => {
    if (i <= test.value.length) {
      displayText.value = test.value.substring(0, i);
      i++;
    } else if (a <= test2.value.length) {
      displayText2.value = test2.value.substring(0, a);
      a++;
    } else {
      clearInterval(timer);
      isTyping.value = false;
    }
  }, 50);
}

const displayText3 = ref<any>('');
const isTyping3 = ref<boolean>(false);

watchEffect(() => {
  if (prop.open) {
    document.body.style.overflow = "hidden"
    typeText()
  } else {
    document.body.style.overflow = "auto"
    displayText.value = '';
    displayText2.value = '';
    displayText3.value = '';
    displayText4.value = '';
    questions.value = ''
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (timer3) {
      clearInterval(timer3);
      timer3 = null;
    }
    if (timer4) {
      clearInterval(timer4);
      timer4 = null;
    }
  }
})

function questionFunction() {
  if (questions.value === '/p.languages') {
    clearInterval(timer)
    clearInterval(timer4)
    displayText.value = '';
    displayText2.value = '';
    displayText4.value = '';
    programLanguagesAi();
    questions.value = ''
  }
  if(questions.value === '/thema'){
    clearInterval(timer);
    clearInterval(timer3); 
    displayText.value = '';
    displayText2.value = '';
    displayText3.value = '';
    themaAi()
    questions.value = ''
  }
}

function programLanguagesAi() {
  isTyping3.value = true;
  let i = 0;

  timer3 = setInterval(() => {
    if (i <= programLanguages.value.length) {
      displayText3.value = programLanguages.value.substring(0, i);
      i++;
    } else {
      if (timer3) {
        clearInterval(timer3);
        timer3 = null;
      }
    }
  }, 50);
}

function themaAi(){
  isTyping4.value = true;
  let i = 0;

  timer4 = setInterval(() => {
    if (i <= thema.value.length) {
      displayText4.value = thema.value.substring(0, i);
      i++;
    } else {
      if (timer4) {
        clearInterval(timer4);
        timer4 = null;
      }
    }
  }, 50);
}

const emit = defineEmits<Emits>()

</script>

<template>
  <Teleport to="#projectInfoTeleport">
    <Transition name="fade">
      <div v-show="prop.open" class="fixed flex justify-center items-center left-0 top-0 right-0 bottom-0 z-[9999]">
        <div class="absolute w-full h-full bg-black opacity-75" @click.self="emit('close', true)"></div>
        <div class="border-[1px] border-white min-w-[300px] md:w-[500px] min-h-[280px] bg-black p-2 rounded-lg z-10">
          <div class="w-full flex justify-end">
            <button
              class="bg-transparent border-[1px] hover:bg-yellow-400 pl-2 pr-2 transition-all ease-in duration-200 hover:text-black rounded-lg text-yellow-400"
              @click="emit('close', true)">X</button>
          </div>
          <div>
            <div class="w-[300px] md:w-[520px] min-h-[100px]">
              <p class="text-green-500 w-[300px] md:w-[500px]">{{ displayText }}</p>
              <p class="text-green-500 w-[300px] md:w-[400px]">{{ displayText2 }}</p>
              <p class="text-green-500 w-[300px] md:w-[500px]">{{ displayText3 }}</p>
              <p class="text-green-500 w-[300px] md:w-[500px]">{{ displayText4 }}</p>
            </div>
            <div class="flex gap-2" v-if="!isTyping">
              <div>
                <p class="text-yellow-400">/p.languages</p>
                <p class="text-yellow-400">/thema</p>
              </div>
            </div>
            <div v-if="!isTyping" class="flex gap-2">
              <input v-model="questions" type="text" class="border-[1px] text-white bg-transparent rounded-md">
              <button @click="questionFunction()" class="text-white border-[1px] px-1">Ask</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>Ö
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>