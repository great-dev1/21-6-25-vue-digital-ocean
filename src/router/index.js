import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AirportDetail from '@/views/AirportDetail.vue'
import AirportDestinations from '@/views/AirportDestinations.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/airport/:code',
    name: 'AirportDetail',
    component: AirportDetail,
    children: [
      {
        path: 'destinations',
        name: 'AirportDestinations',
        component: AirportDestinations
      }
    ]
  },
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
