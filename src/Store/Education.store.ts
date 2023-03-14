import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEducationStore = defineStore('education', () => {
    const eduArray = ref([
        {
            schoolName: 'CODINGSCHOOL WÖRTHERSEE',
            date: '10/2022 - 03/2023',
            title: 'Web Development',
            description: 'Modern Frontend Design And Frameworks.'
        },
        {
            schoolName: 'CODINGSCHOOL WÖRTHERSEE',
            date: '10/2020 - 03/2021',
            title: 'Mobile App Development',
            description: 'Modern Android App Frontend Design And Frameworks.Programm languages are Kotlin and Java'
        },
        {
            schoolName: 'WIFI ÖSTERREICH',
            date: '02/2020 - 07/2020',
            title: 'Java Software Engineering',
            description: 'Java Fullstack programming.Desktop and Frontend.Data Managment'
        },
        {
            schoolName: 'TU WIEN',
            date: '03/2011 - 06/2017',
            title: 'Architektur',
            description: 'I didnt complete universität I left it halfway.Autocad and some design programms'
        },
        {
            schoolName: 'UNIVERSITÄT WIEN',
            date: '01/2011 - 03/2011',
            title: 'Deutchkurs B2/2',
            description: '3 Months Full German Course'
        },
    ])
    
    const workArray = ref([
        {
            shopName: 'I&F Anadolu Backshop GMBH',
            date: '03/2021 - Now',
            title: 'Sachbearbeiter',
            description: 'I have experience in sales and production.I am very good at communicating with customers.'
        },
        {
            shopName: 'Rota Möbel',
            date: '01/2020 - 03/2021',
            title: 'Web Design & Online Seller',
            description: 'Online sales and product addition was my main duty.I was also changing the advertisement and product prices.'
        },
        {
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
