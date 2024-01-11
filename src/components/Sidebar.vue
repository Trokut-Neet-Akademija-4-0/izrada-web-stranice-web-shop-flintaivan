<template>
    <div>
        <aside :class="props.align">
            <slot></slot>
        </aside>
    </div>
</template>

<script setup>

const props = defineProps ({
    align: String
})
</script>

<style>
.left {
    margin-left: auto;
}
.right {
    margin-left: 10px;
    margin-right: auto;
}
</style>