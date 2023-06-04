import { START_LOCATION, createRouter, createWebHistory } from 'vue-router';
import Documents from '../../docs/.vuepress/.temp/pages/index.html.vue';
import BeforeApp from '../BeforeApp.vue';

const routes = [
  { path: '/', component: BeforeApp},
  { path: '/documents', name: 'documents', component: Documents},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;