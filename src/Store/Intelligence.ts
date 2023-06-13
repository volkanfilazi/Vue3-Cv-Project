import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIntelligenceStore = defineStore('intelligence', () => {
  const dataCopy = ref<any[]>([])

  const categories = ref([
    {
      category: 'Music',
      image: 'mdi:music'
    },
    {
      category: 'Spor',
      image: 'solar:football-bold-duotone'
    },
    {
      category: 'Software',
      image: 'carbon:cics-program'
    },
  ])

  const mainData = ref([
    {
      id:1,
      category: 'Music',
      question: 'Who is the lead vocalist of the band Coldplay?',
      answer: 'Chris Martin'
    },
    {
      id:2,
      category: 'Music',
      question: 'Which singer-songwriter released the hit single "Hello" in 2015?',
      answer: 'Adele'
    },
    {
      id:3,
      category: 'Music',
      question: `What is the name of Beyoncé's critically acclaimed visual album released in 2016?`,
      answer: 'Lemonade'
    },
    {
      id:4,
      category: 'Music',
      question: 'Which British rock band wrote and performed the song "Bohemian Rhapsody"?',
      answer: 'Queen'
    },
    {
      id:5,
      category: 'Music',
      question: 'Who is the Canadian singer known for hits like "Sorry" and "Love Yourself"?',
      answer: 'Justin Bieber'
    },
    {
      id:6,
      category: 'Spor',
      question: 'In which sport are the four major tournaments called "Grand Slam" events?',
      answer: 'Tennis'
    },
    {
      id:7,
      category: 'Spor',
      question: 'In which sport is the final game called the "Super Bowl"?',
      answer: 'American Football'
    },
    {
      id:8,
      category: 'Spor',
      question: `Which country has won the most FIFA World Cup titles in football (soccer)?`,
      answer: 'Brazil'
    },
    {
      id:9,
      category: 'Spor',
      question: 'Who is the most decorated Olympian of all time, with a total of 28 Olympic medals?',
      answer: 'Michael Phelps'
    },
    {
      id:10,
      category: 'Spor',
      question: `Which sport is known as "The Gentleman's Game"?`,
      answer: 'Cricket'
    },
    {
      id:11,
      category: 'Software',
      question: `What is the abbreviation for the database language?`,
      answer: 'Sql'
    },
    {
      id:12,
      category: 'Software',
      question: `What is the tool that converts the source code of a software into an executable program?`,
      answer: 'Compiler'
    },
    {
      id:13,
      category: 'Software',
      question: `What is the process of finding and fixing errors or defects in a software called?`,
      answer: 'Debugging'
    },
    {
      id:14,
      category: 'Software',
      question: `What is the term for a software program that maliciously disrupts or damages computer systems?`,
      answer: 'Malware'
    },
    {
      id:15,
      category: 'Software',
      question: `What is the practice of using multiple programming languages or technologies in a single software project called?`,
      answer: 'Polyglot'
    }
  ])


    return {
      categories,  
      mainData,
      dataCopy  
    }
})