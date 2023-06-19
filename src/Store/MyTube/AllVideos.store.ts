import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { VideoInterface } from '../../interfaces/videos'

export const useVideoStore = defineStore('video',() =>{
  const config = {
    headers: { Authorization: `ABTmFnkL3Q7RceX6vekx2dAbihKt5Yy2aIKN7sQrJPK88FFZP5XfIUrA`}
  }
  const allVideos = ref<VideoInterface[]>([])

  async function getAllVideos() {
    try {
      let response = await axios.get<VideoInterface[]>("https://api.pexels.com/videos/search?query=nature&per_page=2",config)
      allVideos.value = response.data
      console.log(response.data);
      
      return response.data
    } catch (error) {

    }
  }
  return{
    getAllVideos,
    allVideos
  }
})
