import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core";

export const useNotificationCard = defineStore('notification', () => {
  const visitToogle = useStorage("visit",false)

  function visitButtonErrorAnimation(){
    visitToogle.value = true
    setTimeout(() =>{
      visitToogle.value = false
    },2000)
  }

    return {
      visitButtonErrorAnimation,
    }
})
