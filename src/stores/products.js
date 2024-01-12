import { defineStore } from 'pinia'

export const productsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    highlightedProducts: [],
    cart: [],
    categories: [],
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json.products;
        })
    },
    fetchCategories() {
      fetch('https://dummyjson.com/products/categories')
          .then(res => res.json())
          .then(json => {
            this.categories = json.slice(0, 6);
          })
          .catch(err => {
              console.error('Failed to fetch categories:', err);
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
      this.highlightedProducts = this.products.filter((item) => item.price > 1000).slice(0, 8);
      return this.highlightedProducts
    }
  }
})


