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
      path: '/philosophy',
      name: 'philosophy',
      component: () => import('@/views/Philosophy.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('@/views/Impressum.vue')
    },
  ]
})

export default router
