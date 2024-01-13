<template>
    <div>
        <div class="product-item" :key="props.product.id">
            <img :src="props.product.thumbnail" alt="" width="230" height="120">
            <div class="product-item-content">
                <div class="product-item-info">
                    <h2 v-if="props.product.title.length<12">{{ props.product.title }}</h2>
                    <h2 v-else>{{ props.product.title.substring(0,12)+"..." }}</h2>
                    <p>${{ props.product.price }}</p>
                </div>
                <div class="product-item-desc">
                    <div v-if="props.product.description.length<50">Welcome, {{ props.product.description }}</div>
                    <div v-else>Welcome, {{ props.product.description.substring(0,20)+".." }}</div>
                </div>
                <div class="product-item-links">
                    <router-link :to="{name: 'ProductDetails', params: {id: props.product.id}}" class="btn btn-light-outline">Show more</router-link>
                    <button @click.stop="addToCart(props.product)" class="btn btn-primary-outline">Add to cart</button>
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

.align-between {
    justify-content: space-between;
}
.align-start {

}

</style>