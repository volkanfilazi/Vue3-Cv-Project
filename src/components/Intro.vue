<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, ref, watch, watchEffect } from 'vue';
import { useScroll, useWindowScroll, watchDebounced } from '@vueuse/core'



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
const socialCheck = ref<boolean>(false)

function socialMediaSwipper(){
  socialCheck.value = !socialCheck.value
}
const sections = ref()

const { y, directions, isScrolling } = useScroll(window)

watchEffect(() => {
  if (y.value !== -1)
    sections.value = Array.prototype.slice.call(document?.querySelectorAll('body .observed-sections'))
})

const currentIndex = ref(0)

watchDebounced(y, () => {
  if (y.value >= 0 && sections.value?.length) {
    currentIndex.value = sections.value.findIndex((e) => {
      const clientRect = e.getBoundingClientRect()
      return clientRect.top >= 0
    })
  }
}, { debounce: 50, maxWait: 100 })

watchEffect(()=>{
  console.log("alo",currentIndex.value)
})

</script>
<template>
  <div id="intro"
    class="flex relative flex-col h-full mb-10 md:mb-0 sm:mt-20 md:mt-0 sm:flex-col md:h-full md:z-10 md:flex-row md:justify-center md:items-center">
    <div
      class="text-white fixed right-0 hidden md:flex flex-col justify-between items-center bg-[#0e152f] h-1/3 w-12 mr-5 border-[1px] text-xl rounded-full p-4 shadow-md shadow-black">
      <Icon class="text-yellow-400!" :class="{'text-yellow-400' : currentIndex === 0} " icon="mdi:home-outline" width="24" height="24" />
      <Icon class="text-yellow-400!" :class="{'text-yellow-400' : currentIndex === 1} " icon="game-icons:skills" width="24" height="24" />
      <Icon class="text-yellow-400!" :class="{'text-yellow-400' : currentIndex === 2} " icon="et:tools-2" width="24" height="24" />
      <Icon class="text-yellow-400!" :class="{'text-yellow-400' : currentIndex === 3} " icon="material-symbols:group-work-outline" width="24" height="24" />
      <Icon class="text-yellow-400!" :class="{'text-yellow-400' : currentIndex === 4} " icon="bytesize:portfolio" width="24" height="24" />
    </div>
    <div class="observed-sections w-full relative flex h-screen justify-center items-center">
      <Transition>
        <div v-if="introToogleOne"
          class="flex absolute text-white flex-col items-center sm:items-center md:justify-center md:items-center w-full space-y-10 p-2 sm:w-full md:w-1/2">
          <div
            class="border-[1px] w-full sm:w-[300px] md:w-[500px] border-yellow-400 font-bold flex justify-center items-center h-[100px]">
            <p class="text-yellow-400 text-lg font-bold">&lt;code&gt;</p>
            <p class="text-white">{{ displayText }}<span class=" text-yellow-400 animate-ping">|</span></p>
            <p class="text-yellow-400 text-lg font-bold">&lt;/code&gt;</p>
          </div>
          <h1 class="text-2xl md:text-4xl font-bold text-white">MY NAME IS <span class="text-yellow-400">VOLKAN
              FILAZI</span></h1>
              <VolkiButton>hahaha</VolkiButton>
          <h2 class="text-sm md:text-2xl text-center sm:text-center md:text-start font-bold text-white">IAM A WEB and
            ANDROID DEVELOPER
          </h2>
          <div class="flex flex-col sm:flex-col md:flex-row text-white gap-3">
            <p><span class="text-yellow-400">+{{ projects }}</span> projects</p>
            <p><span class="text-yellow-400">+{{ certificate }}</span> certificate</p>
            <p><span class="text-yellow-400">+{{ experience }}</span> years experience</p>
            <p><span class="text-yellow-400">+{{ languages }}</span> program languages</p>
          </div>
          <button @click="introTwoShowing()"
            class="text-yellow-400 hover:text-white hover:transition-all hover:duration-500 top-0 mt-20">Do you need more
            info?</button>
          <div class="relative w-full flex items-center justify-center">
            <div @click="socialMediaSwipper()" class="w-[180px] cursor-pointer hover:border-yellow-400 group transition-all duration-500 h-14 absolute bg-[#0e152f] border-[1px] hover:bg-black border-gray-500 z-10 flex items-center justify-between p-3" :class="[{'border-yellow-400' : socialCheck},{'bg-black' : socialCheck}]">
              <p class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500" :class="{'text-yellow-400' : socialCheck}" >Fallow Me</p>
              <button class="w-10 h-10 border-[1px] flex items-center justify-center group-hover:border-yellow-400 transition-all duration-500 border-gray-500 rounded-full" :class="{'border-yellow-400' : socialCheck}">
                <div class="w-3 h-3 bg-yellow-400 rounded-full relative">
                  <div class="w-3 h-3 bg-yellow-400 rounded-full absolute animate-ping"></div>
                </div>
              </button>
            </div>
            <div class="flex gap-5 absolute p-2 transition-all duration-500" :class="{'translate-y-full transition-all duration-500' : socialCheck}">
              <a class="w-10 h-10 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
                href="https://www.linkedin.com/in/volkan-filazi-ba49b0239/">
                <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500"
                  icon="ri:linkedin-fill" />
              </a>
              <a class="w-10 h-10 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
                href="https://www.linkedin.com/in/volkan-filazi-ba49b0239/">
                <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500"
                  icon="ic:outline-facebook" />
              </a>
              <a class="w-10 h-10 flex group cursor-pointer justify-center items-center transition-all duration-500 border-[2px] border-gray-500 rounded-full hover:border-yellow-400"
                href="https://www.linkedin.com/in/volkan-filazi-ba49b0239/">
                <Icon class="text-gray-500 group-hover:text-yellow-400 transition-all duration-500"
                  icon="ph:github-logo-fill" />
              </a>
            </div>
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
            <button @click="introGoBack"
              class="border-[1px] hover:text-yellow-400 hover:transition-all hover:duration-500 hover:border-white border-yellow-400 p-2">Go
              Back</button>
            <button @click="introWhoAmI"
              class="border-[1px] hover:text-yellow-400 hover:transition-all hover:duration-500 hover:border-white border-yellow-400 p-2">Who
              am i?</button>
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

            <button @click="introGoBack"
              class="border-[1px] hover:text-yellow-400 hover:transition-all hover:duration-500 hover:border-white border-yellow-400 p-2">Go
              Back</button>
          </div>
        </div>
      </Transition>
    </div>

  </div>
</template>

<style scoped>
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
