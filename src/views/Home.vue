<template>
    <Header />
        <div class="content-wrapper">
            <h2 class="mt-5 mb-5">Check out our products</h2>
            <HighlightProducts />
        </div>
        <div class="full-width secondary mt-5">
            <div class="content-wrapper">
                <h2 class="mb-5 mt-5">Search by Categories</h2>
                <div class="category-list">
                    <Category v-for="cat in categories.categories" :key="cat.id" :cat="cat"/>
                </div>
            </div>
        </div>
        <div class="content-wrapper">
            <h2 class="mt-5">Whats new</h2>
            <BlogItem class="mt-5"/>
        </div>
        <div class="full-width primary mt-5">
            <div class="content-wrapper">
                <Newsletter />
            </div>
        </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import HighlightProducts from '@/components/HighlightProducts.vue';
import Category from '../components/Category.vue'
import BlogItem from '@/components/BlogItem.vue';
import Newsletter from '../components/Newsletter.vue'
import { productsStore } from '@/stores/products'
import { onMounted } from 'vue';

const categories = productsStore()

onMounted(() => {
    categories.fetchCategories();
})
</script>

<style scoped>
h2 {
    text-align: center;
}
.content-wrapper {
    padding: 50px 0;
}
</style>