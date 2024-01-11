<template>
  <div class="content-wrapper">
      <ProductsDetails :item="selectedProduct" :loading="loading" />
    </div> 
</template>

<script setup>  
import ProductsDetails from '@/components/ProductDetail.vue';
import { ref, computed, onMounted } from 'vue';
import { productsStore } from '@/stores/products';
import { useRoute } from 'vue-router';

// const router = useRouter();
const route = useRoute();
const store = productsStore();
const loading = ref(true);

onMounted(async () => {
  await store.fetchProductsFromDB(); // replace with your method to load products
  loading.value = false;
});

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