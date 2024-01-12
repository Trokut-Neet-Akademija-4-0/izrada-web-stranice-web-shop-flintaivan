<template>
    <div class="content-wrapper py50">
        <h2 class="main-title">Search by Categories</h2>
        <div class="category-list mt-5">
            <Category v-for="cat in categories.categories" :key="cat.id" :cat="cat"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Category from '../../components/Category.vue'
import { productsStore } from '@/stores/products'

const categories = productsStore();
onMounted(() => {
    categories.fetchCategories()
})
</script>

<style scoped>
h2 {
    text-align: center;
}
</style>