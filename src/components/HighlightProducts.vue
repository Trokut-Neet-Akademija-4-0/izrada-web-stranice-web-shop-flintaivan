<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div class="products-list" v-else-if="store.highlightedProducts">
            <ProductItem v-for="item in store.highlightedProducts" :key="item.id" :product="item" @click="goToProductPage(item.id)"/>
            <!-- {{console.log(store.highlightedProducts)}} -->
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import ProductItem from './ProductItem.vue';
import { productsStore } from '@/stores/products';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = productsStore();
// const highlightedProducts = ref([])
const loading = ref(true);
const goToProductPage = (id) => {
  router.push({ name: 'ProductDetails', params: {id: id} });
}

onMounted(async () => {
    const highlightedProducts = await store.fetchHighlightedProducts();
    loading.value = false;
    console.log(highlightedProducts)
})

</script>

<style>

</style>