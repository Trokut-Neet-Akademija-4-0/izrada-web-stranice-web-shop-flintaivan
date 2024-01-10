<template>
    <nav>
        <div class="info-bar">
            <div class="box">
                <i class="bi bi-telephone-fill"></i> <a href="tel:09999999">+385 99 9999 999</a>
                <i class="bi bi-envelope-fill"></i> <a href="mailto:example@webshop.com">example@webshop.com</a>
                <i class="bi bi-house-fill"></i> <a href="https://maps.app.goo.gl/y4KXf6Uv9ZNVNpXB8">Ulica ulice 18, 22000 Šibenik</a>
            </div>
            <div class="box">
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-twitter"></i></a>
            </div>
            <div class="box text-right">
                <router-link :to="{name: 'Cart'}">
                    <i class="bi bi-cart-fill"></i> Items: {{ products.cart.length }}
                </router-link>
            </div>
        </div>
        <div class="links">
            <ul>
                <li class="logo">
                    <img src="../assets/images/logo.png" alt="" width="" height="80">
                </li>
                <li>
                    <router-link :to="{name: 'Home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Products'}">Products</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { productsStore } from '../stores/products';

const products = productsStore();
</script>

<style scoped>
nav {
    font-family: var(--primary-font);
    background-color: var(--primary-color);
    color: var(--light-color);
    width: 100%;
    height: 140px;
}
ul {
    margin: 0;
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
}
li {
    margin: 10px;
}
a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}
.info-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: var(--dark-color);
    font-family: var(--secondary-font);
    color: var(--light-color);
    font-size: 0.8em;
    margin: 0 auto;
}

.box {
    text-align: center;
    margin: 0 50px;
    padding: 0 10px;
    width: 33.33%;
}
.box a {
    font-weight: 300;
    margin: 0 12px 0 6px;
}
.box a i {
    margin: 0 12px;
}
.box:nth-child(1) {
    justify-content: flex-start;
}
.text-right {
    text-align: end;
}

.box:nth-child(2) {
    justify-content: center;
}

.box:nth-child(3) {
    justify-content: flex-end;
}
.links a{
    text-transform: uppercase;
}

a:hover {
    color: var(--secondary-color);
}
.logo {
    margin-left: 50px;
    margin-right: auto;
} 
</style>