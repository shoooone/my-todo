import Vue from 'vue';
import VueRouter from 'vue-router';
import ToDos from '../views/Todos.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ToDos',
    component: ToDos,
  },
  {
    path: '/categories',
    name: 'Categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export const menuList = routes.map(e => {
  return {
    to: e.path,
    displayName: e.name,
  };
});

export default router;
