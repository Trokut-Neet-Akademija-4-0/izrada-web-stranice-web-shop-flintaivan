<template>
    <div class="content-wrapper mt-5 mb-5">
        <div class="main-title">
            <h2>Some Blog title</h2>
            <button @click="router.go(-1)" class="btn btn-light-outline">Back</button>
        </div>
        <div class="container">
            <div class="col-8">
                <div class="contact-wrapper">
                    <div class="contact-content">
                        <div class="blog-card-content">
                            <div class="blog-card-img">
                                <img src="../../assets/images/blog-img-lg.jpg" alt="" width="600" height="400">
                            </div>
                            <div class="blog-card-info mt-4">
                                <h3 class="mt-5">Some subtitle</h3>
                                <p class="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolores et. Soluta adipisci error repellendus voluptatum sint blanditiis deleniti officiis qui, hic voluptate eum harum nemo minima quis? Suscipit labore atque quos a corporis, rerum iusto odit totam maxime blanditiis consequuntur beatae impedit dolorem aspernatur nostrum ipsa earum perferendis aperiam vitae. Libero temporibus qui asperiores recusandae quos laborum enim dolorem maxime delectus dolor, doloremque ipsa quasi repellat quisquam tenetur pariatur amet ipsam eos. Provident reiciendis consectetur quod iusto tempore harum. Perferendis culpa ratione accusamus, nobis fugit cupiditate nam illum vel nemo minus quae in labore aut aspernatur libero voluptates.</p>
                                <h3 class="mt-3">Some subtitle</h3>
                                <p class="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolores et. Soluta adipisci error repellendus voluptatum sint blanditiis deleniti officiis qui, hic voluptate eum harum nemo minima quis? Suscipit labore atque quos a corporis, rerum iusto odit totam maxime blanditiis consequuntur beatae impedit dolorem aspernatur nostrum ipsa earum perferendis aperiam vitae. Libero temporibus qui asperiores recusandae quos laborum enim dolorem maxime delectus dolor, doloremque ipsa quasi repellat quisquam tenetur pariatur amet ipsam eos. Provident reiciendis consectetur quod iusto tempore harum. Perferendis culpa ratione accusamus, nobis fugit cupiditate nam illum vel nemo minus quae in labore aut aspernatur libero voluptates.</p>
                                <h3 class="mt-3">Some subtitle</h3>
                                <p class="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolores et. Soluta adipisci error repellendus voluptatum sint blanditiis deleniti officiis qui, hic voluptate eum harum nemo minima quis? Suscipit labore atque quos a corporis, rerum iusto odit totam maxime blanditiis consequuntur beatae impedit dolorem aspernatur nostrum ipsa earum perferendis aperiam vitae. Libero temporibus qui asperiores recusandae quos laborum enim dolorem maxime delectus dolor, doloremque ipsa quasi repellat quisquam tenetur pariatur amet ipsam eos. Provident reiciendis consectetur quod iusto tempore harum. Perferendis culpa ratione accusamus, nobis fugit cupiditate nam illum vel nemo minus quae in labore aut aspernatur libero voluptates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <Sidebar align="left">
                    <h2></h2>
                    <div class="blog-aside-wrapper">
                        <ProductItem v-for="product in sidebarProducts" :key="product.id" :product="product" @click="goToProductPage(product.id)"/>
                    </div>
                </Sidebar>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import ProductItem from '@/components/ProductItem.vue';
import { productsStore } from '@/stores/products';
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = productsStore()
const sidebarProducts = ref([])
const goToProductPage = (id) => {
  router.push({ name: 'ProductDetails', params: {id: id} });
}


onMounted(async() => {
    await store.fetchProductsFromDB()
    sidebarProducts.value = store.products.slice(0, 3)
})
</script>

<style scoped>
.detail-card-title {
    padding: 20px;
    margin: 10px 30px 10px 10px;
}
.blog-card-img img {
    width: 100%;
}
.blog-card-info {

}
</style>