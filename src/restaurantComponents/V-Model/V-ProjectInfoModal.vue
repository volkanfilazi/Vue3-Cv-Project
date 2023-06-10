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

const test = ref<any>('Hi,you have reached the life model virtual of volkan filazi.If you want information about the project, you can use the commands below...')
const programLanguages = ref<string>('Vue.js, HTML, Css, Tailwindcss, Js, Java, Kotlin')
const whoIam = ref<string>('About 3 years i am learning software development.I have successfully completed 2 separate programming courses.')
const errorHandling = ref<string>('Invalid command.Please dont forget to use / before command')

const webCertificate = ref<string>('Web Development - CodingSchool.Wörthersee/Fh Kärnten')
const mobileCertificate = ref<string>('Mobile App Development - CodingSchool.Wörthersee/Fh Kärnten')

const displayText = ref<any>('')
const displayText2 = ref<any>('')
const displayText3 = ref<any>('');
const displayText4 = ref<any>('');
const displayText5 = ref<any>('');
const displayText6 = ref<any>('')
const displayText6Second = ref<any>('')

const isTyping = ref<boolean>(false)
const isTyping3 = ref<boolean>(false);
const isTyping4 = ref<boolean>(false);
const isTyping5 = ref<boolean>(false);
const isTyping6 = ref<boolean>(false);

let timer: NodeJS.Timeout | null = null;
let timer3: NodeJS.Timeout | null = null;
let timer4: NodeJS.Timeout | null = null;
let timer5: NodeJS.Timeout | null = null;
let timer6: NodeJS.Timeout | null = null;

const questions = ref('')

function typeText() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  isTyping.value = true;
  let i = 0;

  timer = setInterval(() => {
    if (i <= test.value.length) {
      displayText.value = test.value.substring(0, i);
      i++;
    } else {
      clearInterval(timer);
      isTyping.value = false;
    }
  }, 50);
}

function certificate() {
  if (timer6) {
    clearInterval(timer6);
    timer6 = null;
  }
  isTyping6.value = true;
  let i = 0;
  let a = 0;

  timer6 = setInterval(() => {
    if (i <= webCertificate.value.length) {
      displayText6.value = webCertificate.value.substring(0, i);
      i++;
    }  else if (a <= mobileCertificate.value.length) {
      displayText6Second.value = mobileCertificate.value.substring(0, a);
      a++;
    }else {
      clearInterval(timer6);
      isTyping6.value = false;
    }
  }, 50);
}


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
    displayText5.value = '';
    displayText6.value = '';
    displayText6Second.value = '';
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
    if (timer5) {
      clearInterval(timer5);
      timer5 = null;
    }
    if (timer6) {
      clearInterval(timer6);
      timer6 = null;
    }

  }
})

function questionFunction() {
  if (questions.value === `/p.languages`) {
    clearInterval(timer)
    clearInterval(timer4)
    clearInterval(timer5)
    clearInterval(timer6)
    displayText.value = '';
    displayText2.value = '';
    displayText4.value = '';
    displayText5.value = '';
    displayText6.value = '';
    displayText6Second.value = '';
    programLanguagesAi();
    questions.value = ''
  }
  else if (questions.value === '/whoIam') {
    clearInterval(timer);
    clearInterval(timer3);
    clearInterval(timer5);
    clearInterval(timer6)
    displayText.value = '';
    displayText2.value = '';
    displayText3.value = '';
    displayText5.value = '';
    displayText6.value = '';
    displayText6Second.value = '';
    themaAi()
    questions.value = ''
  }else if(questions.value === '/certificates'){
    clearInterval(timer);
    clearInterval(timer3);
    clearInterval(timer4);
    clearInterval(timer5);
    displayText.value = '';
    displayText2.value = '';
    displayText4.value = '';
    displayText3.value = '';
    displayText5.value = '';
    certificate()
    questions.value = ''
  }
  else{
    clearInterval(timer)
    clearInterval(timer3)
    clearInterval(timer4)
    clearInterval(timer6)
    displayText.value = '';
    displayText2.value = '';
    displayText3.value = '';
    displayText4.value = '';
    displayText6.value = '';
    displayText6Second.value = '';
    invalidMessage()
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

function themaAi() {
  isTyping4.value = true;
  let i = 0;

  timer4 = setInterval(() => {
    if (i <= whoIam.value.length) {
      displayText4.value = whoIam.value.substring(0, i);
      i++;
    } else {
      if (timer4) {
        clearInterval(timer4);
        timer4 = null;
      }
    }
  }, 50);
}

function invalidMessage() {
  isTyping5.value = true;
  let i = 0;

  timer5 = setInterval(() => {
    if (i <= errorHandling.value.length) {
      displayText5.value = errorHandling.value.substring(0, i);
      i++;
    } else {
      if (timer5) {
        clearInterval(timer5);
        timer5 = null;
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
            <div class="w-[300px] md:w-[550px] min-h-[100px]">
              <p class="text-green-500 w-[300px] md:w-[450px]">{{ displayText }}</p>
              <p class="text-green-500 w-[300px] md:w-[450px]">{{ displayText2 }}</p>
              <p class="text-green-500 w-[300px] md:w-[450px]">{{ displayText3 }}</p>
              <p class="text-green-500 w-[300px] md:w-[450px]">{{ displayText4 }}</p>
              <p class="text-green-500 w-[300px] md:w-[450px]">{{ displayText5 }}</p>
              <p class="text-green-500 w-[300px] md:w-[450px]">{{ displayText6 }}</p>
              <p class="text-green-500 w-[300px] md:w-[450px]">{{ displayText6Second }}</p>
            </div>
            <div class="flex gap-2" v-if="!isTyping">
              <div>
                <p class="text-yellow-400">/p.languages</p>
                <p class="text-yellow-400">/whoIam</p>
              </div>
              <div>
                <p class="text-yellow-400">/certificates</p>
              </div>
            </div>
            <div v-if="!isTyping" class="flex gap-2">
              <input v-model="questions" type="text" class="border-[1px] focus:border-green-500 outline-none text-white bg-transparent rounded-md">
              <button @click="questionFunction()" class="text-white border-[1px] hover:border-green-500 transition-all duration hover:text-green-500 px-1">Ask</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
Ö .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>