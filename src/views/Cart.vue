<template>
    <div class="content-wrapper mt-5 mb-5">
        <div class="main-title">
            <h2>Cart</h2>
            <button @click="router.go(-1)" class="btn btn-light-outline">Back</button>
        </div>
        <div class="container">
            <div class="col-8">
                <div class="contact-wrapper">
                    <div v-if="!cart.cart.length">
                        <h2>Empty cart...</h2>
                        <button @click="router.push({name: 'Products'})" class="btn btn-light-outline">Back to Products</button>
                    </div>
                    <div v-for="item in cart.cart" :key="item.id" v-else class="h-card-wrapper">
                        <div class="h-card-image">
                            <img :src="item.thumbnail" alt="" width="200" height="120" />
                        </div>
                        <div class="h-card-content">
                            <div class="h-card-info">
                                <router-link class="h-card-title-link" :to="{name: 'ProductDetails', params: {id: item.id}}">
                                    {{ item.title }}
                                </router-link>
                                <h3 class="price">Price: ${{ item.price }}</h3>
                            </div>
                            <div class="h-card-action">
                                <button @click="removeFromCart(item)" class="btn btn-danger">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <Sidebar align="left">
                    <h2>Checkout</h2>
                    <div class="blog-aside-wrapper">
                        <h3>Total items: {{ totalCartItems }}</h3>
                        <h2 class="price">Total price: ${{ totalCartPrice }}</h2>
                        <button class="btn btn-primary">Checkout</button>
                    </div>
                </Sidebar>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { productsStore } from '@/stores/products';

const router = useRouter();
const cart = productsStore();

const removeFromCart = (id) => {
    cart.removeFromCart(id)
}
const totalCartPrice = computed (() => {
    return cart.cart.reduce((total, item) => {
        console.log(item)
        return total + item.price 
    }, 0)
})
const totalCartItems = computed(() => {
    return cart.cart.length
})

</script>

<style>
.h-card-wrapper {
    width: calc(100% - 50px);
    padding: 15px;
    margin: 10px;
    border: 1px solid rgba(1,1,1,0.3);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
}
.h-card-img {
    width: 30%;
}
.h-card-img img {
    width: 100%;
}
.h-card-title-link {
    font-size: 1.5rem;
    font-family: var(--primary-font);
    color: var(--primary-color);
    text-decoration: underline;
}
.h-card-title-link:hover {
    color: var(--secondary-color);
    /* text-decoration: underline; */
}
h3.price {
    font-size: 1.2rem;
    margin: 0;
}
.h-card-content {
    width: 70%;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
}
.h-card-info {
    display: flex;
}
.h-card-info h3 {
    margin-left: auto;
}
.h-card-action {
    display: flex;
    justify-content: end;
    align-items: end;
    margin-top: auto;
}

</style>