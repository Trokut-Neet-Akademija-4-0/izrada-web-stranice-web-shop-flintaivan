<template>
    <div class="content-wrapper mt-5 mb-5">
        <h2 class="main-title">Blog</h2>
        <div class="container">
            <div class="col-8">
                <div class="contact-wrapper">
                    <h2>Check out whats new</h2>
                    <div class="contact-content">
                        <BlogItem />
                    </div>
                </div>
            </div>
            <div class="col-4">
                <Sidebar align="left">
                    <h2></h2>
                    <div class="blog-aside-wrapper">
                        <ProductItem v-for="product in sidebarProducts" :key="product.id" :product="product"/>
                    </div>
                </Sidebar>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import BlogItem from '@/components/BlogItem.vue';
import ProductItem from '@/components/ProductItem.vue';
import { productsStore } from '@/stores/products';
import { ref,onMounted } from 'vue';

const store = productsStore()
const sidebarProducts = ref([])

onMounted(async() => {
    await store.fetchProductsFromDB()
    sidebarProducts.value = store.products.slice(0, 3)
})
</script>

<style>

</style>