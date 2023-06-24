import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSliderStore = defineStore('slider', () => {
  const intro = ref(true)
  const tools = ref(false)
  const languages = ref(false)
  const specialization = ref(false)
  const resume = ref(false)

  function introTrigger() {
    tools.value = false
    languages.value = false
    specialization.value = false
    resume.value = false
  }

  function toolsTrigger() {
    tools.value = true
    languages.value = false
    specialization.value = false
    resume.value = false
  }

  function languagesTrigger() {
    languages.value = true
    tools.value = false
    specialization.value = false
    resume.value = false
  }

  function specializationTrigger() {
    specialization.value = true
    languages.value = false
    tools.value = false
    resume.value = false
  }

  function resumeTrigger() {
    resume.value = true
    specialization.value = false
    languages.value = false
    tools.value = false
  }

  return {
    introTrigger,
    toolsTrigger,
    languagesTrigger,
    specializationTrigger,
    resumeTrigger,
    intro,
    tools,
    languages,
    specialization,
    resume
  }
})