import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToolsStore = defineStore('tools', () => {
  const toolsAray = ref([
    {
      toolName: 'Javascript',
      image: 'fluent:javascript-16-regular'
    },
    {
      toolName: 'Vue',
      image: 'carbon:logo-vue'
    },
    {
      toolName: 'Node',
      image: 'la:node'
    },
    {
      toolName: 'Java',
      image: 'mdi:language-java'
    },
    {
      toolName: 'Kotlin',
      image: 'mdi:language-kotlin'
    },
    {
      toolName: 'MongoDB',
      image: 'fontisto:mongodb'
    },
    {
      toolName: 'Typescript',
      image: 'mdi:language-typescript'
    },
    {
      toolName: 'Tailwind',
      image: 'file-icons:tailwind'
    },
    {
      toolName: 'Html',
      image: 'icomoon-free:html-five'
    },
    {
      toolName: 'GIT',
      image: 'ph:git-branch-bold'
    },

  ])

  return {
    toolsAray
  }
})