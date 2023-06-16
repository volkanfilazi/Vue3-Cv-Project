import { createRouter, createWebHistory } from 'vue-router';
import BeforeApp from '../pages/Cv/CvMain.vue';
import ShopPortfolio from '../pages/Shop/ShopPortfolio.vue';
import ShopDetailPage from '../pages/Shop/ShopDetailPage.vue';
import ShopBasket from '../pages/Shop/ShopBasket.vue';
import IntelligenceSquare from '../pages/IntelligenceSquare/IntelligenceSquare.vue';
import IntelligenceCategory from '../pages/IntelligenceSquare/IntelligenceCategory.vue';
import IntelligenceGameArea from '../pages/IntelligenceSquare/IntelligenceGameArea.vue';

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