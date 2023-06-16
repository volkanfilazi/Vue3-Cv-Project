import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useIntroAnimationStore = defineStore('animation', () => {
  const projects = ref(0)
  const certificate = ref(0)
  const experience = ref(0)
  const languages = ref(0)
  function introAnimation(displayText: any) {
    const animationText = ref<any>('Creative, patient and innovative')
    let i = 0;
    let lastIndex = 3;
    const timer = setInterval(() => {
      if (i < animationText.value.length) {
        displayText.value = animationText.value.substring(0, i + 1);
        lastIndex = i;
      } else if (lastIndex > 0) {
        displayText.value = animationText.value.substring(0, lastIndex);
        lastIndex--;
      } else {
        displayText.value = '';
        i = 0;
        lastIndex = 0;
      }
      i++;
    }, 200);
  }

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

  return {
    introAnimation,
    progressAnimation,
    projects,
    certificate,
    experience,
    languages
  }
})