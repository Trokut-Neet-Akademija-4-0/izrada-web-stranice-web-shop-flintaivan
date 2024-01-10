<template>
  <div class="content-wrapper">
      <h1>Products</h1>
      <div class="products-list">
        <ProductItem v-for="item in products.products" :key="item.id" :product="item" @click="goToProductPage(item.id)" />
      </div>
    </div>
</template>

<script setup>
import ProductItem from '@/components/ProductItem.vue';
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

</style>