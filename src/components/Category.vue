<template>
    <router-link :to="{name: 'Category', params: {category: props.cat}}">
    <div class="category-item">
        <div class="category-item-content">
                <i :class="catIcon()"></i>
                <p class="mt-4">{{ props.cat }}</p>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    cat: String,
}) 

const catIcon = () => {
    let iconClass = '';
    if(props.cat) {
        switch (props.cat) {
            case 'smartphones':
                iconClass = 'bi bi-phone'
            break;
            case 'laptops':
                iconClass = 'bi bi-laptop'
            break;
            case 'fragrances':
                iconClass = 'bi bi-eyedropper'
            break;
            case 'skincare':
                iconClass = 'bi bi-hand-index-thumb'
            break;
            case 'groceries':
                iconClass = 'bi bi-handbag'
            break;
            case 'home-decoration':
                iconClass = 'bi bi-house'
            break;
        }
        return iconClass
    }
}
</script>

<style scoped>
</style>