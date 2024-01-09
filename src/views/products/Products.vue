<template>
    <h1>Products</h1>
    <div class="products-list">
      <div class="product-item" v-for="product in products.products" :key="product.id" @click="goToProductPage(product.id)">
          <img :src="product.thumbnail" alt="" width="300" height="170">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <p>${{ product.price }}</p>
      </div>
    </div>
</template>

<!-- <script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Products',
})
</script> -->

<script setup>
import { onMounted } from 'vue';
import { productsStore } from '@/stores/products';
import { useRouter } from 'vue-router';

const products = productsStore();
const router = useRouter();

const goToProductPage = (id) => {
  router.push({ name: 'ProductDetails', params: {id: id} });
}

onMounted(() => {
  products.fetchProductsFromDB();
});
</script>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
}
.product-item {
  width: 30%;
  margin-bottom: 20px;
}
.product-item img {
  width: 100%;
}
</style>