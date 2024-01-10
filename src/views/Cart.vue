<template>
    <div class="content-wrapper">
        <button @click="router.go(-1)">Back</button>
        <h1>Cart</h1>        
        <div v-if="!cart.cart.length">
            <p>Empty cart...</p>
            <button @click="router.push({name: 'Products'})">Back to Products</button>
        </div>
        <div v-for="item in cart.cart" :key="item.id" v-else>
            <h2>{{ item.title }}</h2>
            <p>Price: {{ item.price }}</p>
            <img :src="item.thumbnail" alt="" width="300" height="170" />
            <button @click="removeFromCart(item.id)">Remove</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { productsStore } from '@/stores/products';

const router = useRouter();
const cart = productsStore();

const removeFromCart = (id) => {
    cart.removeFromCart(id)
}

</script>

<style>

</style>