<template>
    <button @click="router.go(-1)">Back</button>
  <div v-if="loading">Loading...</div>
  <div v-else-if="selectedProduct" class="product">
    <div class="product-image">
      <img :src="selectedProduct.thumbnail" alt="" width="400" height="250">
    </div>
    <div class="product-details">
        <h2>{{ selectedProduct.title }}</h2>
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <p>Price: {{ selectedProduct.price }}</p>
      <button @click="addToCart(selectedProduct.id)">Add to cart</button>
    </div>
  </div> 
</template>

<script setup>  
import { ref, computed, onMounted } from 'vue';
import { productsStore } from '@/stores/products';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const store = productsStore();
const loading = ref(true);

onMounted(async () => {
  await store.fetchProductsFromDB(); // replace with your method to load products
  loading.value = false;
});

const addToCart = (id) => {
    store.addToCart(selectedProduct.value)
}

const selectedProduct = computed(() => {
  return store.products.find((p) => p.id === Number(route.params.id))
});
</script>

<style scoped>
.product {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.product-image {
    /* width: 100%; */
    margin-right: 24px;
}
</style>