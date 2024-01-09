<template>
  <header>
    <div class="cart-items" @click="router.push({name: 'Cart'})">
      <p>Items in Cart: {{ products.cart.length }}</p>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { productsStore } from './stores/products';

const router = useRouter();
const products = productsStore();
</script>


<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
