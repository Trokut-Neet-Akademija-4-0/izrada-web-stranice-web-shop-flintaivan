import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/products/Products.vue'
import ProductDetails from '../views/products/ProductsDetails.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Product,
    },
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: ProductDetails,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    }
  ]
})

export default router
