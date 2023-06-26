import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCareerStore = defineStore('career', () => {
  const careerArray = [
    {
      mainTitle: 'Education',
      carrerItems: [
        {
          id: '1',
          name: 'CODINGSCHOOL WÖRTHERSEE',
          date: '10/2022 - 03/2023',
          title: 'Web Development',
          description: 'Modern Web Design. Full Stack Frontend and Backend.'
        },
        {
          id: '2',
          name: 'CODINGSCHOOL WÖRTHERSEE',
          date: '10/2020 - 03/2021',
          title: 'Mobile App Development',
          description: 'Modern Android App Frontend Design And Frameworks. Programm languages are Kotlin and Java.'
        },
        {
          id: '3',
          name: 'WIFI ÖSTERREICH',
          date: '02/2020 - 07/2020',
          title: 'Java Software Engineering',
          description: 'Java Fullstack programming. Desktop and Frontend. Data Managment.'
        },
        {
          id: '4',
          name: 'TU WIEN',
          date: '03/2011 - 06/2017',
          title: 'Architektur',
          description: 'I didnt complete universität I left it halfway. Autocad and some design programms.'
        }
      ]
    },
    {
      mainTitle: 'Work',
      carrerItems: [
        {
          id: '5',
          name: 'Upwork',
          date: '03/2022 - Now',
          title: 'Freelance Web Developer',
          description: 'I work on entry level projects for a short time.'
        },
        {
          id: '6',
          name: 'I&F Anadolu Backshop GMBH',
          date: '03/2021 - 03/2022',
          title: 'Sachbearbeiter',
          description: 'I have experience in sales and production.I am very good at communicating with customers.'
        },
        {
          id: '7',
          name: 'Rota Möbel',
          date: '01/2020 - 03/2021',
          title: 'Web Design & Online Seller',
          description: 'Online sales and product addition was my main duty.I was also changing the advertisement and product prices.'
        },
        {
          id: '8',
          name: 'I&F Anadolu Backshop GMBH',
          date: '03/2019 - 01/2020',
          title: 'Sachbearbeiter',
          description: 'I have experience in sales and production.I am very good at communicating with customers.'
        },
      ]
    }
  ];



  return {
    careerArray,
  }
})
