import { createRouter, createWebHistory } from 'vue-router';
import BeforeApp from '../BeforeApp.vue';
import RestaurantPortfolio from '../pages/RestaurantPortfolio.vue';
import RestaurantDetailPage from '../pages/RestaurantDetailPage.vue';
import RestaurantBasket from '../pages/RestaurantBasket.vue';

const routes = [
  { path: '/', name:'beforeApp', component: BeforeApp},
  { path: '/shop', name: 'shop', component: RestaurantPortfolio},
  { path: '/shop/:id', name: 'shopDetail', component: RestaurantDetailPage},
  { path: '/basket', name: 'basket', component: RestaurantBasket},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;