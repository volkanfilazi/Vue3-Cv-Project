import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIntroRightNavs = defineStore('rightNav', () => {

  const rightNavElements = ref([
    {
      linkPath: '#intro',
      image: 'mdi:home-outline'
    },
    {
      linkPath: '#tools',
      image: 'et:tools-2'
    },
    {
      linkPath: '#languages',
      image: 'material-symbols:language'
    },
    {
      linkPath: '#specialization',
      image: 'material-symbols:group-work-outline'
    },
    {
      linkPath: '#myresume',
      image: 'game-icons:skills'
    },
   
  ])
    return {
      rightNavElements  
    }
})