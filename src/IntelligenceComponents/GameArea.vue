<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntelligenceStore } from '../Store/Intelligence';
import router from '../router/router';

const intelligenceStore = useIntelligenceStore()
const showQuestion = ref<any[]>([])
const currentIndex = ref(0)
const intervalId = ref(null)
const startingCountDown = ref<number>(5)
const answerInput = ref<string>('')
const score = ref<any[]>([])

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
  answerInput.value = ''
  const response = intelligenceStore.dataCopy.filter((item) => item.question === question)
  if (answerInput.value === response[0].answer) {
    score.value.push('O')
  } else {
    score.value.push('X')
  }
}

onMounted(() => {
  if (currentIndex.value < intelligenceStore.dataCopy.length) {
    timeCounter()
  }
  showNextQuestion();

  if (intelligenceStore.dataCopy.length <= 0) {
    router.push({ name: 'intelligenceCategory' })
  }
});

</script>

<template>
  <div class="h-full w-full items-center flex flex-col">

    <h1 class="font-bold" v-if="score.length === 5">GAME OVER</h1>
    <h1 class="font-bold mt-5">SCORE</h1>
    <div class="flex gap-2 mt-5">
      <div v-for="item in score">
        <p class="border-[1px] p-2 text-white"
          :class="[{ 'bg-red-500': item === 'X' }, { 'bg-green-500': item === 'O' }]">
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
          <button @click="checkAnswer(item.question)" class="mt-10 border-[2px] p-2 rounded-md border-red-600">
            <span v-if="answerInput.length <= 0">Pass</span> 
            <span v-else>Answer</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
