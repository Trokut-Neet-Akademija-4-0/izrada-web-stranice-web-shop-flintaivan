<template>
    <div>
        <div class="product-item" :key="props.product.id">
            <img :src="props.product.thumbnail" alt="" width="300" height="170">
            <div class="product-item-content">
                <div class="product-item-info">
                    <h2>{{ props.product.title }}</h2>
                    <p>${{ props.product.price }}</p>
                </div>
                <div class="product-item-desc">
                    <p>{{ props.product.description }}</p>
                </div>
                <div class="product-item-links">
                    <router-link :to="{name: 'ProductDetails', params: {id: props.product.id}}" class="btn btn-light-outline">Show more</router-link>
                    <button @click.stop="addToCart(props.product.id)" class="btn btn-primary-outline">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { productsStore } from '@/stores/products';

const props = defineProps({
    product: Object
})
const products = productsStore();
const addToCart = (id) => {
    products.addToCart(id)
}
</script>

<style scoped>
h2 {
    margin: 12px 0;
}
button {
    margin-left: 10px;
}

</style>