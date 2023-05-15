<script setup lang="ts">
import { ref } from 'vue';
import "vue3-circle-progress/dist/circle-progress.css";


const progressLine = ref(0)
const progressLine2 = ref(0);
const progressLine3 = ref(0)

function progressAnimationLine() {
  let i = 0;
  const timer = setInterval(() => {
    progressLine.value = i;
    progressLine2.value = (i * 80) / 90;
    progressLine3.value = (i * 80) / 90;
    i++;
    if (i > 90) {
      clearInterval(timer);
    }
  }, 10);
}

progressAnimationLine()

</script>
<template>
  
</template>

<style scoped></style>