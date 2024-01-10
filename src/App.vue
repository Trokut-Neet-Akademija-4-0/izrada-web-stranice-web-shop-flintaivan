<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>


<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
