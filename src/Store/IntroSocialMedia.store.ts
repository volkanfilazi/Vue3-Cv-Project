import { defineStore } from 'pinia'

export const useIntroSocialMedia = defineStore( 'socialMedia',() =>{

  const socialMediElements = [
    {
      link: 'https://www.linkedin.com/in/volkan-filazi-ba49b0239/',
      icon: 'ri:linkedin-fill'
    },
    {
      link: 'https://www.facebook.com/',
      icon: 'ic:outline-facebook'
    },
    {
      link: 'https://github.com/volkanfilazi',
      icon: 'ph:github-logo-fill'
    },
    {
      link: 'https://www.npmjs.com/~volkanfilazi',
      icon: 'tabler:brand-npm'
    }
  ]

  return{
    socialMediElements
  }
})