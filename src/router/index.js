import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/products/Products.vue'
import ProductDetails from '../views/products/ProductsDetails.vue'
import Cart from '../views/Cart.vue'
import Categories from '../views/categories/Categories.vue'
import Category from '../views/categories/Category.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/blog/Blog.vue'
import BlogDetails from '../views/blog/BlogDetails.vue'

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
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/categories/:category',
      name: 'Category',
      component: Category,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blog/1',
      name: 'BlogDetails',
      component: BlogDetails
    }
  ]
})

export default router
