import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { Products } from '../interfaces/products'
import { useStorage } from "@vueuse/core";

export const useShopStore = defineStore('shop', () => {
  const allProducts = ref<Products[]>([])
  const allProductsClone = ref<Products[]>([])
  const allProductsSecondClone = ref<Products[]>([])
  const filterProdcutsByTitle = ref<Products[]>([])
  const allCategories = ref<any>()
  const singleProduct = ref<any>()
  const cartData = ref([])
  const calculatedTotalPrice = useStorage("totalPrice", Number)
  const calculatedTotalOrder = useStorage("totalOrder", Number)



  async function getAllProducts() {
    try {
      let response = await axios.get<Products[]>(`https://fakestoreapi.com/products`)
      allProducts.value = response.data
      allProductsSecondClone.value = response.data
      return response.data
    } catch (error) {

    }
  }

  async function getSingleProduct(id: number) {
    try {
      let response = await axios.get<Products>(`https://fakestoreapi.com/products/${id}`)
      singleProduct.value = response.data
      return response.data
    } catch (error) {

    }
  }

  async function getAllCategories() {
    try {
      let response = await axios.get<any>(`https://fakestoreapi.com/products/categories`)
      allCategories.value = response.data
      console.log(response.data);
      return response.data
    } catch (error) {

    }
  }

  function addToCart(productsId: number, productsTitle: string, productPrice: string, productCounter: string, productImage: string) {
    const cartData = JSON.parse(localStorage.getItem('pompa') || '{}') || {};
    if (cartData[productsId.toString()]) {
      const existingProduct = cartData[productsId.toString()];
      existingProduct.count = parseInt(existingProduct.count) + 1;
      existingProduct.price = parseFloat(productPrice) * existingProduct.count;
    } else {
      cartData[productsId.toString()] = {
        id: productsId,
        title: productsTitle,
        price: parseFloat(productPrice),
        count: 1,
        image: productImage
      };
    }
    calculatedTotalOrder.value = totalOrder(cartData)
    calculatedTotalPrice.value = totalPrice(cartData);

    localStorage.setItem('pompa', JSON.stringify(cartData));
    getCarts()
  }

  function totalPrice(cartData) {
    let totalPrice = 0;
    for (const productId in cartData) {
      const product = cartData[productId];
      const productPrice = parseFloat(product.price);
      totalPrice += productPrice;
    }

    return totalPrice;
  }

  function totalOrder(cartData) {
    let totalOrder = 0;
    for (const productId in cartData) {
      const product = cartData[productId];
      const productOrder = parseFloat(product.count);
      totalOrder += productOrder;
    }

    return totalOrder;
  }

  function deleteItem(productId: number) {
    const cartData = JSON.parse(localStorage.getItem('pompa') || '{}') || {};
    delete cartData[productId]
    calculatedTotalPrice.value = totalPrice(cartData);
    calculatedTotalOrder.value = totalOrder(cartData)
    localStorage.setItem('pompa', JSON.stringify(cartData));
    getCarts()
  }

  function updateItem(productId: number, newCount: number) {
    const cartData = JSON.parse(localStorage.getItem('pompa') || '{}') || {};
    if (cartData[productId]) {
      const currentCount = parseInt(cartData[productId].count);
      const newCountValue = newCount;
  
      if (newCountValue >= currentCount) {
        // Ürün miktarı artıyorsa, fiyatı güncelle
        const pricePerItem = parseFloat(cartData[productId].price) / currentCount;
        cartData[productId].price = (pricePerItem * newCountValue).toFixed(2);
      } else {
        // Ürün miktarı azalıyorsa, fiyatı güncelle
        const pricePerItem = parseFloat(cartData[productId].price) / currentCount;
        cartData[productId].price = (pricePerItem * newCountValue).toFixed(2);
      }
  
      cartData[productId].count = newCount;
      localStorage.setItem('pompa', JSON.stringify(cartData));
      calculatedTotalPrice.value = totalPrice(cartData);
      getCarts();
    }
  
  }

  function getCarts() {
    const cartDataString = localStorage.getItem('pompa');
    if (cartDataString) {
      try {
        cartData.value = JSON.parse(cartDataString);
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }
  }

  function searchProducts(title: string) {
    const searchFilterProduct = allProducts.value.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()))
    filterProdcutsByTitle.value = searchFilterProduct
  }

  function sortAToZ() {
    const sortedProducts = allProductsClone.value.sort((a, b) => {
      const productA = a.title.toLowerCase();
      const productB = b.title.toLowerCase();

      if (productA < productB) {
        return -1;
      }
      if (productA > productB) {
        return 1;
      }
      return 0;
    });
    allProductsClone.value = sortedProducts
    return sortedProducts;
  }

  function sortZToA() {
    const sortedProducts = allProductsClone.value.sort((a, b) => {
      const productA = a.title.toLowerCase();
      const productB = b.title.toLowerCase();

      if (productA < productB) {
        return 1;
      }
      if (productA > productB) {
        return -1;
      }
      return 0;
    });
    allProductsClone.value = sortedProducts
    return sortedProducts;
  }

  function sortExpensiveToCheap() {
    const sortedProducts = allProductsClone.value.sort((a, b) => {
      const productA = parseFloat(a.price)
      const productB = parseFloat(b.price)

      if (productA < productB) {
        return 1
      }
      if (productA > productB) {
        return -1
      }
      return 0
    })
    allProductsClone.value = sortedProducts
  }

  function sortCheapToExpensive() {
    const sortedProducts = allProductsClone.value.sort((a, b) => {
      const productA = parseFloat(a.price)
      const productB = parseFloat(b.price)

      if (productA < productB) {
        return -1
      }
      if (productA > productB) {
        return 1
      }
      return 0
    })
    allProductsClone.value = sortedProducts
  }

  return {
    getAllProducts,
    getSingleProduct,
    allProducts,
    getAllCategories,
    allCategories,
    allProductsClone,
    searchProducts,
    filterProdcutsByTitle,
    sortAToZ,
    sortZToA,
    sortExpensiveToCheap,
    sortCheapToExpensive,
    singleProduct,
    addToCart,
    getCarts,
    cartData,
    deleteItem,
    updateItem,
    totalPrice,
    allProductsSecondClone
  }
})