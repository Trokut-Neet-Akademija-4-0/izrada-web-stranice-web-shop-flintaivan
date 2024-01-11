<template>
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
        <li>
            <router-link :to="{name: 'Categories'}">Categories</router-link>
        </li>
        <li>
            <router-link :to="{name: 'Contact'}">Contact</router-link>
        </li>
    </ul>
</template>

<script setup></script>

<style scoped>
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