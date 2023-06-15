import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar',() =>{

  const navbarElements = [
    {
      link: '#intro',
      name: 'Intro'
    },
    {
      link: '#tools',
      name: 'Tools'
    },
    {
      link: '#languages',
      name: 'Languages'
    },
    {
      link: '#specialization',
      name: 'Specialization'
    },
    {
      link: '#myresume',
      name: 'Resume'
    },
  ]

  return {
    navbarElements
  }
})