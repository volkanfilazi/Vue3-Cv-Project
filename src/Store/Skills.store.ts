import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSkillsStore = defineStore('skills', () => {
    const androidSkills = ref([
        { skill: "Android Advanced" },
        { skill: "Android BuildeSystem" },
        { skill: "Datamanagement" },
        { skill: "Kotlin" },
        { skill: "Java" },
        { skill: "Networking" },
        { skill: "ReactiveX" },
        { skill: "Android User Interface" },
        { skill: "Introduction in java for Android" },
        { skill: "Softwarearchitekturen" },
        { skill: "Source Code Versionin" },
        { skill: "User Centered Design" },
        { skill: "System Components,SDK" },
    ]);

    const webSkills = ref([
        "HTML",
        "CSS",
        "SCSS",
        "TailwindCSS",
        "Javascript",
        "Vuejs",
        "Node",
        "Networking",
        "Projectmanagement",
        "GIT",
        "User Centered Design",
        "Authentication and Databases",
    ])

    const bookingImages = ref([
        {
            id: 0,
            imagePath: 'BookingAdmin.png'
        },
        {
            id: 0,
            imagePath: '.BoookingOffice.png'
        },
        {
            id: 0,
            imagePath: 'BookingBook.png'
        },
        {
            id: 0,
            imagePath: 'BookingAdmin.png'
        },
    ])


return {
    androidSkills,
    webSkills,
    bookingImages
}
})