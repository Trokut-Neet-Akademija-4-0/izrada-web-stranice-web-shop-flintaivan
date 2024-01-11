<template>
    <div class="newsletter">
        <div class="newsletter-title">
            <h2>Want 15% off?</h2>
            <p>Register to our newsletter</p>
        </div>
        <div class="newsletter-content">
            <form>
                <input type="email" placeholder="Email" required>
                <input type="submit" class="btn-newsletter btn-dark">
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
h2 {
    font-size: 2.5rem;
    color: var(--light-color);
}
.newsletter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.newsletter-title {
}
.newsletter-content {
    margin-left: 4rem;
}
input[type="email"] {
    padding: 15px 21px;
    border: none;
    border-radius: 4px;
}
input[type="submit"] {
    margin-left: 10px;
}
.btn-newsletter {
    display: inline-block;
    text-decoration: none;
    margin: 6px 0;
    border: none;
    padding: 15px 25px;
    border-radius: 4px;
    font-size: 0.8em;
    transition: all 0.3s linear;
    cursor: pointer;
}

</style>