import { defineStore } from 'pinia'
import { ref } from 'vue'
import  axios  from 'axios'
import { Products } from '../interfaces/products'

export const useShopStore = defineStore('shop', () => {
  const allProducts = ref<Products[]>([])
  const allProductsClone = ref<Products[]>([]) 
  const filterProdcutsByTitle = ref<Products[]>([])
  const allCategories = ref<any>() 

  async function getAllProducts(){
    try {
      let response = await axios.get<Products[]>(`https://fakestoreapi.com/products`)
      allProducts.value = response.data
      return response.data
    } catch (error) {
      
    }
  }

  async function getSingleProduct(id: number){
    try {
      let response = await axios.get<Products>(`https://fakestoreapi.com/products/${id}`)

      return response.data
    } catch (error) {
      
    }
  }

  async function getAllCategories(){
    try {
      let response = await axios.get<any>(`https://fakestoreapi.com/products/categories`)
      allCategories.value = response.data
      console.log(response.data);
      return response.data
    } catch (error) {
      
    }
  }

  function searchProducts(title: string){
    const searchFilterProduct = allProducts.value.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()))
    filterProdcutsByTitle.value = searchFilterProduct
    console.log(searchFilterProduct);
    
    
  }
    
    return {
        getAllProducts,
        getSingleProduct,
        allProducts,
        getAllCategories,
        allCategories,
        allProductsClone,
        searchProducts,
        filterProdcutsByTitle
    }
})