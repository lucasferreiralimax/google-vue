import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/Notfound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
