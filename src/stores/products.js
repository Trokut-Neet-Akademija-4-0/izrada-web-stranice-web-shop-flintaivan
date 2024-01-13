import { defineStore } from 'pinia'

export const productsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    highlightedProducts: [],
    cart: [],
    categories: [],
    categoryProducts: [],
  }),

  actions: {
    async fetchProductsFromDB() {
      await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json.products;
        })
    },
    async fetchCategories() {
      await fetch('https://dummyjson.com/products/categories')
          .then(res => res.json())
          .then(json => {
            this.categories = json.slice(0, 6);
          })
          .catch(err => {
              console.error('Failed to fetch categories:', err);
          });
    },
    async fetchByCategory(category) {
      await fetch(`https://dummyjson.com/products/category/` + category)
        .then(res => res.json())
        .then(json => {
          this.categoryProducts = json.products
          // console.log(this.categoryProducts)
        });
    },
    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id)
    },

    async fetchHighlightedProducts() {
      await this.fetchProductsFromDB();
      this.highlightedProducts = this.products.filter((item) => item.rating > 4).slice(0, 8);
      return this.highlightedProducts
    }
  }
})


