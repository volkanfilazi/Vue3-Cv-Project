import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguagesStore = defineStore('languages', () => {
  const languagesArray = ref([
    {
      name: 'Turkish',
      value: 100
    },
    {
      name: 'German',
      value: '75'
    },
    {
      name: 'English',
      value: '70'
    },
   

  ])

  return {
    languagesArray
  }
})