<template>
    <div v-if="props.loading">Loading...</div>
    <div class="detail-card" v-else-if="props.item">
        <div class="detail-card-title">
            <h2>{{ props.item.title }}</h2>
            <button @click="router.go(-1)" class="btn btn-light-outline">Back</button>
        </div>
        <div class="detail-card-content">
            <div class="detail-card-image">
                <img :src="props.item.thumbnail" alt="">
            </div>
            <div class="detail-card-info">
                <h2 class="price">Price: ${{ props.item.price }}</h2>
                <hr>
                <p>Brand: {{ props.item.brand }}</p>
                <p>Description: <br>{{ props.item.description }}</p>
                <hr>
                <p v-if="props.item.stock" :class="stockAndAvailability().class">Availability: {{ stockAndAvailability().text }}</p>
                <button @click="addToCart(props.item.id)" class="btn btn-primary-outline">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import { productsStore } from '@/stores/products';

const router = useRouter();
const store = productsStore();

const props = defineProps({
    item: Object,
    loading: Boolean
})
const stockAndAvailability = () => {
    const inStock = props.item.stock
    return {
        class: inStock ? 'success' : 'danger',
        text: inStock ? 'Available' : 'Not Available'
    }
}

const addToCart = (id) => {
    store.addToCart(id)
}
</script>

<style scoped>
.detail-card-info p {
    margin: 10px 0;
}
.price {
    color: var(--primary-color);
    font-size: 2rem;
    margin: 1rem 0;
}
.detail-card-info button {
    float: right;
    margin-top: 1.2rem;
}

.success {
    color: var(--success-color);
}
.danger {
    color: var(--danger-color);
}

</style>  