<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useIntelligenceStore } from '../Store/Intelligence';
import router from '../router/router';
import VGameOverModal from '../IntelligenceComponents/V-Modal/V-GameOverModal.vue'
import { useStorage } from "@vueuse/core";

const intelligenceStore = useIntelligenceStore()
const showQuestion = ref<any[]>([])
const currentIndex = ref(0)
const intervalId = ref(null)
const startingCountDown = ref<number>(5)
const answerInput = ref<string>('')
const score = ref<any[]>([])
const scoreHistory = useStorage('history',[])
const afterPass = ref<boolean>(false)

const questionQuantity = ref<number>(5)


function timeCounter() {
  const interval = setInterval(() => {
    startingCountDown.value--;
    if (startingCountDown.value === 0) {
      if (answerInput.value === '') {
        score.value.push('X');
      }
    }
    else if (startingCountDown.value < 0) {
      startingCountDown.value = 0
      clearInterval(interval);
    }
  }, 1000);
}

function showNextQuestion() {
  startingCountDown.value = 5;
  clearInterval(intervalId.value);
  if (currentIndex.value > 0) {
    showQuestion.value[currentIndex.value - 1] = false;
  }
  showQuestion.value[currentIndex.value] = true;
  currentIndex.value++;
  startingCountDown.value = 5;
  if (currentIndex.value < intelligenceStore.dataCopy.length) {
    intervalId.value = setTimeout(() => {
      showQuestion.value[currentIndex.value - 1] = false;
      showNextQuestion();
    }, 5000);
  }
}

function checkAnswer(question: string) {
  const response = intelligenceStore.dataCopy.filter((item) => item.question === question)
  if (answerInput.value === response[0].answer) {
    score.value.push('O')
    answerInput.value = ''
  }
  else {
    score.value.push('X')
    answerInput.value = ''
  }
  if (currentIndex.value < intelligenceStore.dataCopy.length) {
    showNextQuestion();
  }
}

function passButtonCheck(){
  answerInput.value = ''
  if(afterPass.value = true){
    score.value.push('PASS')
  }
  
  if (score.value.length < questionQuantity.value) {
    showNextQuestion();
  }
  if(score.value.length === questionQuantity.value){
    startingCountDown.value = 0;
  }
}
watchEffect(() =>{
  if(score.value.length >= questionQuantity.value){
    scoreHistory.value.push(score.value)
  }
})
onMounted(() => {
  if (intelligenceStore.dataCopy.length <= 0) {
    router.push({ name: 'intelligenceCategory' });
  } else {
    timeCounter();
    showNextQuestion();
  }
});

</script>

<template>
  <div class="h-full w-full items-center flex flex-col">

    <h1 class="font-bold" v-if="score.length === questionQuantity">GAME OVER</h1>
    <h1 class="font-bold mt-5">SCORE</h1>
    <div class="flex gap-2 mt-5">
      <div v-for="item in score">
        <p class="border-[1px] text-center min-w-[50px] p-2 text-white"
          :class="[{ 'bg-red-500': item === 'X' }, { 'bg-green-500': item === 'O' },{ 'bg-orange-500': item === 'PASS' }]">
          {{ item }}</p>
      </div>
    </div>
    <div class="border-[2px] mt-5 w-14 h-14 border-red-600 flex rounded-full items-center justify-center">
      <p>{{ startingCountDown }}</p>
    </div>
    <div class="items-center w-full px-2 sm:px-5 md:px-10 mt-10 grid grid-cols-1">
      <div v-for="(item, index) in intelligenceStore.dataCopy" :key="index" class="">
        <div :class="{ 'hidden': !showQuestion[index] }"
          class="h-[300px] bg-white text-center relative p-2 rounded-md flex items-center justify-center">
          <p class="font-bold text-lg sm:text-2x1 md:text-3xl">{{ item.question }}</p>
          <div class="flex absolute -top-5 right-0 gap-2">
            <div class="bg-red-500 w-10 h-10 rounded-full text-white font-bold flex items-center justify-center">
              <span>{{ item.answer.charAt(0) }}</span>
            </div>
            <div class="bg-red-500 w-10 h-10 rounded-full text-white font-bold flex items-center justify-center">
              <span>{{ item.answer.length }}</span>
            </div>
          </div>
        </div>
        <div :class="{ 'hidden': !showQuestion[index] }" class="h-1/2 gap-1 flex items-center justify-center w-full">
          <div class="flex mt-10 items-center relative w-full justify-center">
            <input id="answerInp"
              class="rounded-md border-[1px] transition-all duration-300 pl-2 focus:border-red-500 h-10 w-full outline-none"
              :maxlength="item.answer.length" v-model="answerInput" type="text">
          </div>
        </div>

        <div :class="{ 'hidden': !showQuestion[index] }" class="h-1/2 flex items-center justify-center">
          <button :disabled="score.length === questionQuantity" v-if="answerInput.length <= 0" @click="passButtonCheck()" class="mt-10 border-[2px] p-2 rounded-md border-red-600">Pass</button>
          <button :disabled="score.length === questionQuantity" v-else @click="checkAnswer(item.question)" class="mt-10 border-[2px] p-2 rounded-md border-red-600">Answer</button>
        </div>

      </div>
    </div>
  </div>
  <VGameOverModal :open="score.length === questionQuantity">
    <p class="text-center font-bold">Game is Over</p>
    <p class="text-center font-bold">Results</p>
    <div v-for="item in score">
        <p class="border-[1px] text-center min-w-[50px] p-2 text-white"
          :class="[{ 'bg-red-500': item === 'X' }, { 'bg-green-500': item === 'O' },{ 'bg-orange-500': item === 'PASS' }]">
          {{ item }}</p>
      </div>
    <div class="flex justify-center items-center mt-5 gap-1">
      <button @click="router.push({name: 'intelligenceCategory'})" class="p-1 border-red-500 border-[2px] transition-all duration-300 hover:bg-red-500 hover:text-white">Play Again</button>
      <button @click="router.push({name: 'intelligenceSquare'})" class="p-1 border-red-500 border-[2px] transition-all duration-300 hover:bg-red-500 hover:text-white">Home Page</button>
    </div>  
  </VGameOverModal>
</template>