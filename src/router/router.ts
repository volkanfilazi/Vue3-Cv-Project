import { START_LOCATION, createRouter, createWebHistory } from 'vue-router';
import Documents from '../../docs/.vuepress/.temp/pages/index.html.vue';
import BeforeApp from '../BeforeApp.vue';
import RestaurantPortfolio from '../pages/RestaurantPortfolio.vue';

const routes = [
  { path: '/', name:'beforeApp', component: BeforeApp},
  { path: '/documents', name: 'documents', component: Documents},
  { path: '/shop', name: 'shop', component: RestaurantPortfolio},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;