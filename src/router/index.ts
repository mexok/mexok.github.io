import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog/:article?',
      name: 'blog',
      component: () => import('@/views/Blog.vue')
    },
    {
      path: '/authors/:author?',
      name: 'authors',
      component: () => import('@/views/Authors.vue')
    },
    {
      path: '/philosophy',
      name: 'philosophy',
      component: () => import('@/views/Philosophy.vue')
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: () => import('@/views/Imprint.vue')
    },
  ]
})

export default router
