import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
