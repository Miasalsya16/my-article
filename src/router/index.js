import Vue from 'vue';
import VueRouter from 'vue-router';
import TestHome from '@/pages/TestHome.vue';
import ReadLater from '@/pages/ReadLater.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: TestHome },
  { path: '/read-later', component: ReadLater }
];

const router = new VueRouter({ mode: 'history', routes });
router.beforeEach((to, from, next) => {
  next();
});

export default router;
