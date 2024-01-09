import { createRouter, createWebHistory } from 'vue-router'
import Product from '../views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
    },
    {
      path: '/products',
      name: 'Products',
      component: Product,
    }
  ]
})

export default router
