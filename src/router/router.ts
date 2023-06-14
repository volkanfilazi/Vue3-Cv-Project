import { createRouter, createWebHistory } from 'vue-router';
import BeforeApp from '../BeforeApp.vue';
import ShopPortfolio from '../pages/ShopPortfolio.vue';
import ShopDetailPage from '../pages/ShopDetailPage.vue';
import ShopBasket from '../pages/ShopBasket.vue';
import IntelligenceSquare from '../pages/IntelligenceSquare.vue';
import IntelligenceCategory from '../pages/IntelligenceCategory.vue';
import IntelligenceGameArea from '../pages/IntelligenceGameArea.vue';

const routes = [
  { path: '/', name:'beforeApp', component: BeforeApp},
  { path: '/shop', name: 'shop', component: ShopPortfolio},
  { path: '/shop/:id', name: 'shopDetail', component: ShopDetailPage},
  { path: '/basket', name: 'basket', component: ShopBasket},
  { path: '/intelligencesquare', name: 'intelligenceSquare', component: IntelligenceSquare},
  { path: '/intelligencecategory', name: 'intelligenceCategory', component: IntelligenceCategory},
  { path: '/intelligencegamearea', name: 'intelligenceGameArea', component: IntelligenceGameArea},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  next();
});

export default router;