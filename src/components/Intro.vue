<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useFps } from '@vueuse/core'
import { useIntervalFn } from '@vueuse/core'
import { rand } from '@vueuse/shared'

const fps = useFps()

const greetings = ['Hallo', 'Hello', 'Merhaba', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut!', '你好', 'Привет']
const word = ref('Hallo')
const interval = ref(500)
const { pause, resume, isActive } = useIntervalFn(() => {
  word.value = greetings[rand(0, greetings.length - 1)]
}, interval)


const emailToogle = ref(false)
const phoneToogle = ref(false)

const projects = ref(0)
const certificate = ref(0)
const experience = ref(0)
const languages = ref(0)

const test = ref<any>('Creative, patient and innovative')
const displayText = ref<any>('')

function progressAnimation() {
  let i = 0;
  const timer = setInterval(() => {
    projects.value = i;
    certificate.value = (i * 2) / 10;
    experience.value = (i * 3) / 10;
    languages.value = (i * 3) / 10;

    i++;
    if (i > 10) {
      clearInterval(timer);
    }
  }, 40);
}

function alo() {
  let i = 0;
  let lastIndex = 3;
  const timer = setInterval(() => {
    if (i < test.value.length) {
      displayText.value = test.value.substring(0, i + 1);
      lastIndex = i;
    } else if (lastIndex > 0) {
      displayText.value = test.value.substring(0, lastIndex);
      lastIndex--;
    } else {
      displayText.value = '';
      i = 0;
      lastIndex = 0;
    }
    i++;
  }, 200);
}

progressAnimation()
alo()


function emailOpen() {
  emailToogle.value = !emailToogle.value
}
function phoneOpen() {
  phoneToogle.value = !phoneToogle.value
}

const introToogleOne = ref(true)
const introToogleTwo = ref(false)
const introToogleThree = ref(false)

function introTwoShowing() {
  introToogleOne.value = false
  introToogleTwo.value = true
  introToogleThree.value = false
}

function introGoBack() {
  introToogleTwo.value = false
  introToogleOne.value = true
  introToogleThree.value = false
}

function introWhoAmI() {
  introToogleThree.value = true
  introToogleTwo.value = false
  introToogleOne.value = false
}


</script>
<template>
  <div id="intro"
    class="flex relative flex-col h-full mt-20 mb-10 md:mb-0 sm:mt-20 md:mt-0 sm:flex-col md:h-screen md:z-10 md:flex-row md:justify-center md:items-center">
    <div class="w-full relative flex h-screen justify-center items-center">
      <Transition>
        <div v-if="introToogleOne"
          class="flex absolute text-white flex-col items-center sm:items-center md:justify-center md:items-center w-full space-y-10 p-2 sm:w-full md:w-1/2">

          <p class="text-yellow-400 font-bold text-xl">{{ word }}</p>
          <div class="flex gap-2 w-[350px]">
            <p>
              Speed:
              <input
                class="text-yellow-500 border-[1px] border-white focus:border-yellow-400 outline-none p-1 rounded-lg bg-transparent"
                v-model="interval" type="number" placeholder="interval">
            </p>
            <button v-if="isActive"
              class="orange w-[80px] bg-red-600 focus:border-yellow-400 outline-none p-1 rounded-lg bg-transparent"
              @click="pause">
              Pause
            </button>
            <button v-if="!isActive"
              class="w-[80px] bg-green-600 focus:border-yellow-400 outline-none p-1 rounded-lg bg-transparent"
              @click="resume">
              Resume
            </button>
          </div>
          <div
            class="border-[1px] w-full sm:w-[300px] md:w-[500px] border-yellow-400 font-bold flex justify-center items-center h-[100px]">
            <p class="text-yellow-400 text-lg font-bold">&lt;code&gt;</p>
            <p class="text-white">{{ displayText }}<span class=" text-yellow-400 animate-ping">|</span></p>
            <p class="text-yellow-400 text-lg font-bold">&lt;/code&gt;</p>
          </div>
          <h1 class="text-2xl md:text-4xl font-bold text-white">MY NAME IS <span class="text-yellow-400">VOLKAN
              FILAZI</span></h1>
          <h2 class="text-sm md:text-2xl text-center sm:text-center md:text-start font-bold text-white">IAM A WEB and
            ANDROID DEVELOPER
          </h2>


          <div class="flex flex-col sm:flex-col md:flex-row text-white gap-3">
            <p><span class="text-yellow-400">+{{ projects }}</span> projects</p>
            <p><span class="text-yellow-400">+{{ certificate }}</span> certificate</p>
            <p><span class="text-yellow-400">+{{ experience }}</span> years experience</p>
            <p><span class="text-yellow-400">+{{ languages }}</span> program languages</p>
          </div>
          <button @click="introTwoShowing()" class="text-yellow-400 hover:text-white hover:transition-all hover:duration-500 top-0 mt-20">Do you need more info?</button>
          <p class="text-white">Fallow Me</p>
          <div class="flex gap-5">
            <a class="w-10 h-10 flex cursor-pointer justify-center items-center transition-all duration-300 bg-white rounded-full hover:bg-yellow-400"
              href="https://www.linkedin.com/in/volkan-filazi-ba49b0239/">
              <Icon icon="ri:linkedin-fill" color="black" />
            </a>
            <a class="w-10 h-10 flex cursor-pointer justify-center items-center transition-all duration-300 bg-white rounded-full hover:bg-yellow-400"
              href="https://github.com/volkanfilazi">
              <Icon icon="ph:github-logo-fill" color="black" />
            </a>
            <a class="w-10 h-10 flex cursor-pointer justify-center items-center transition-all duration-300 bg-white rounded-full hover:bg-yellow-400"
              href="https://www.facebook.com/profile.php?id=850434189">
              <Icon icon="ic:outline-facebook" color="black" />

            </a>

          </div>
        </div>
      </Transition>
      <Transition>
        <div v-if="introToogleTwo"
          class="flex absolute text-white flex-col items-center sm:items-center md:justify-center md:items-center w-full space-y-10 p-2 sm:w-full md:w-1/2">
          <h1>Thank you for scan to the website in detail.</h1>
          <p>I have never worked in a software company before, but I am an experienced developer with my own projects.</p>
          <p>Of course, proving something is more important than claiming.</p>
          <p>You can find my projects below</p>
          <a class="w-10 h-10 flex cursor-pointer justify-center items-center transition-all duration-300 bg-white rounded-full hover:bg-yellow-400"
              href="https://github.com/volkanfilazi">
              <Icon icon="ph:github-logo-fill" color="black" />
            </a>
          <div class="flex gap-5">
            <button @click="introGoBack" class="border-[1px] hover:text-yellow-400 hover:transition-all hover:duration-500 hover:border-white border-yellow-400 p-2">Go Back</button>
            <button @click="introWhoAmI" class="border-[1px] hover:text-yellow-400 hover:transition-all hover:duration-500 hover:border-white border-yellow-400 p-2">Who am i?</button>
          </div>
        </div>
      </Transition>
      <Transition>
        <div v-if="introToogleThree"
          class="flex absolute text-white flex-col items-center sm:items-center md:justify-center md:items-center w-full space-y-10 p-2 sm:w-full md:w-1/2">
          <h1 class="w-full">About Me</h1>
          <p>As a passionate web designer, I am excited
            to apply for my first professional opportunity
            in this field. I have always been drawn to the
            creative process of designing websites, and
            I am confident that my skills and enthusiasm
            make me a strong candidate for any web
            design position.
            I have a strong understanding of HTML,
            CSS, JavaScript,Vue3 and I have
            experience using popular design tools like
            Adobe Photoshop and Sketch. I am also
            constantly learning and staying up to date
            with new technologies and trends in the
            field, which allows me to create modern and
            visually appealing websites.
            My ability to work well in a team and my
            attention to detail are also strengths that I
            believe would make me a valuable asset to
            any organization. I am a quick learner and
            am always willing to take on new challenges
            to expand my skill set.
            Thank you for considering my application. I
            look forward to the opportunity to further
            discuss how I can contribute to your team.</p>

          <div class="flex gap-5">
            
            <button @click="introGoBack" class="border-[1px] hover:text-yellow-400 hover:transition-all hover:duration-500 hover:border-white border-yellow-400 p-2">Go Back</button>
          </div>
        </div>
      </Transition>
    </div>

    <div class="hidden md:flex md:flex-col gap-2 absolute top-0 right-0 md:mr-20 mt-40">
      <div class="flex justify-end items-center gap-2">
        <Transition>
          <div v-if="emailToogle"
            class="w-50 h-10 flex justify-center items-center p-2 text-black font-bold text-center bg-white">
            <p>volkanfilazi@hotmail.com</p>
          </div>
        </Transition>
        <button @click="emailOpen()"
          class="w-12 h-12 sm:w-12 sm:h-12 md:w-20 md:h-20 cursor-pointer flex justify-center items-center  bg-white rounded-full"
          :class="{ 'bg-yellow-400 transition-all duration-500': emailToogle }">
          <Icon class="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] " icon="ic:round-email"
            color="black" width="36" height="36" />
        </button>
      </div>
      <div class="flex justify-end items-center gap-2">
        <Transition>
          <div v-if="phoneToogle"
            class="w-50 h-10 flex justify-center items-center p-2 text-black font-bold text-center bg-white">
            <p>+4368181287010</p>
          </div>
        </Transition>
        <button @click="phoneOpen()"
          class="w-12 h-12 sm:w-12 sm:h-12 md:w-20 md:h-20 cursor-pointer flex justify-center items-center  bg-white rounded-full"
          :class="{ 'bg-yellow-400 transition-all duration-500': phoneToogle }">
          <Icon class="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px]"
            icon="material-symbols:phone-android" color="black" width="36" height="36" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  cursor: url('../image/icons8-hand-cursor-50.png'), auto;
}

button {
  cursor: url('../image/icons8-hand-cursor-50.png'), auto;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>