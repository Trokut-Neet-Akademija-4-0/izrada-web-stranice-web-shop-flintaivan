<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="full-width dark">
            <div class="content-wrapper py30">
                <Footer />
            </div>
        </div>
  </footer>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
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
