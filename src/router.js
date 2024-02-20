import {createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', name: 'index', component: () => import('@/pages/index')},
  {path: '/gallery', name: 'gallery', component: () => import('@/pages/gallery')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
