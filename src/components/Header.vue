<template>
    <header>
        <div class="content-wrapper">
            <h1>Discover Innovation at Techshop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto rerum suscipit nostrum dolorum esse consequuntur quidem, quod commodi ratione odit ab recusandae ipsa repudiandae sit modi, voluptatum dignissimos tempore.</p>
            <div class="divider"></div> 
            <router-link :to="{name: 'Products'}" class="btn btn-primary">Shop now</router-link>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
h1, p, a {
    margin: 0.4em 0;
}
div.divider {
    height: 20px;
}

</style>