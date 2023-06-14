import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCareerStore = defineStore('career', () => {
  const eduArray = ref([
    {
      id: '1',
      schoolName: 'CODINGSCHOOL WÖRTHERSEE',
      date: '10/2022 - 03/2023',
      title: 'Web Development',
      description: 'Modern Web Design.Full Stack Frontend and Backend.'
    },
    {
      id: '2',
      schoolName: 'CODINGSCHOOL WÖRTHERSEE',
      date: '10/2020 - 03/2021',
      title: 'Mobile App Development',
      description: 'Modern Android App Frontend Design And Frameworks.Programm languages are Kotlin and Java'
    },
    {
      id: '3',
      schoolName: 'WIFI ÖSTERREICH',
      date: '02/2020 - 07/2020',
      title: 'Java Software Engineering',
      description: 'Java Fullstack programming.Desktop and Frontend.Data Managment'
    },
    {
      id: '4',
      schoolName: 'TU WIEN',
      date: '03/2011 - 06/2017',
      title: 'Architektur',
      description: 'I didnt complete universität I left it halfway.Autocad and some design programms'
    },
 
  ])

  const workArray = ref([
    {
      id: '5',
      shopName: 'Upwork',
      date: '03/2022 - Now',
      title: 'Freelance Web Developer',
      description: 'I have experience in sales and production.I am very good at communicating with customers.'
    },
    {
      id: '6',
      shopName: 'I&F Anadolu Backshop GMBH',
      date: '03/2021 - 03/2022',
      title: 'Sachbearbeiter',
      description: 'I have experience in sales and production.I am very good at communicating with customers.'
    },
    {
      id: '7',
      shopName: 'Rota Möbel',
      date: '01/2020 - 03/2021',
      title: 'Web Design & Online Seller',
      description: 'Online sales and product addition was my main duty.I was also changing the advertisement and product prices.'
    },
    {
      id: '8',
      shopName: 'I&F Anadolu Backshop GMBH',
      date: '03/2019 - 01/2020',
      title: 'Sachbearbeiter',
      description: 'I have experience in sales and production.I am very good at communicating with customers.'
    },
  ])


  return {
    eduArray,
    workArray
  }
})
