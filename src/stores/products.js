import { defineStore } from 'pinia'

export const productsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    cart: [],
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json.products;
        })
    },

    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.od !== product.id)
    }
  }
})


