<template>
  <div class="content-wrapper">
    <h2 class="main-title">Products</h2>
    <div class="container">
      <div class="col-4">
        <Sidebar align="right">
          <h2>Filter</h2>
          <form action="">
            <div class="form-group">
              <label for="name" class="block">Search by name</label>
              <br>
              <input class="filter" type="text" name="name">
            </div>
            <h3>Price</h3>
            <div class="form-group-two">
              <div class="left">
                <label for="price_from" class="block">From</label>
                <input class="filter" type="number" name="price_from">
              </div>
              <div class="right">
                <label for="price_to" class="block">To</label>
                <input class="filter" type="number" name="price_to">
              </div>
            </div>
            <h3 class="mb-2">Categories</h3>
            <div class="form-group" v-for="(cat, index) in categories.categories" :key="index" >
              <input type="checkbox" :id="cat" :value="cat">
              <label :for="cat" class="check"> {{ cat }}</label>
            </div>
            <h3 class="mb-2 mt-3">Brand</h3>
            <div class="form-group" v-for="brand in products.products" :key="brand.id" >
              <input type="checkbox" :id="brand.id" :value="brand.brand">
              <label :for="brand.id" class="check"> {{ brand.brand }}</label>
            </div>
          </form>
        </Sidebar>
      </div>
      <div class="col-8">
        <div class="products-list">
          <ProductItem v-for="item in products.products" :key="item.id" :product="item" @click="goToProductPage(item.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductItem from '@/components/ProductItem.vue';
import Sidebar from '@/components/Sidebar.vue'
import { onMounted } from 'vue';
import { productsStore } from '@/stores/products';
import { useRouter } from 'vue-router';

const products = productsStore();
const categories = productsStore();
const router = useRouter();

const goToProductPage = (id) => {
  router.push({ name: 'ProductDetails', params: {id: id} });
}

onMounted(() => {
  products.fetchProductsFromDB();
  categories.fetchCategories()
});
</script>

<style scoped>
.main-title {
    margin: 50px 10px 30px;
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    border-radius: 8px;
    -webkit-box-shadow: 0px 7px 40px -3px rgba(61,60,61,0.5);
    -moz-box-shadow: 0px 7px 40px -3px rgba(61,60,61,0.5);
    box-shadow: 0px 7px 40px -3px rgba(61,60,61,0.5);
}
label {
  text-transform: capitalize;
  font-size: 0.8rem;
}

label.check {
  cursor: pointer;
  margin-left: 5px;
}
input.filter {
  padding: 6px;
  margin-bottom: 15px;
  width: calc(100% - 12px);
  border-radius: 4px;
  border: 1px solid rgba(1, 1, 1, 0.3);
}
form {
  display: flex;
  flex-direction: column;
}
.form-group-two {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.left , .right {
  flex: 1 0 45%;
  box-sizing: border-box; 
}

.left {
  margin-right: 10px; 
}
.form-group input[type="text"] {
  flex: 1;
  margin-right: 10px;
}

.form-group:last-child input[type="text"] {
  margin-right: 0;
}

.categories {
  display: flex;
  flex-direction: column;
}

.categories .form-control {
  margin-bottom: 10px;
}
</style>