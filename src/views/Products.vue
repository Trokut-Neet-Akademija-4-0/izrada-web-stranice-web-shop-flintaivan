<template>
    <h1>Products</h1>
    <div class="products-list">
      <div class="product" v-for="product in productStore.products">
        <h2>{{ product.title }}</h2>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Products',
})
</script>

<script setup>
import { onMounted } from 'vue';
import { productsStore } from '@/stores/products';

const productStore = productsStore();

onMounted(() => {
  console.log('mounted');
  productStore.fetchProductsFromDB();
});
</script>

<style>

</style>