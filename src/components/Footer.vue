<template>
    <div>
        <div class="footer">
            
            <div class="footer-content mt-4">
                <div class="box footer-links">
                    <h3>Footer Links</h3>
                    <ul>    
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                        <li>
                            <a href="#">Cookies policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of business</a>
                        </li>
                        <li>
                            <a href="#">Terms of use</a>
                        </li>
                    </ul>
                </div>
                <div class="box footer-contact">
                    <h3>Footer Contact</h3>
                    <div class="footer-contact-info">
                        <ul>
                            <li>
                                <i class="bi bi-telephone-fill"></i> <a href="tel:09999999">+385 99 9999 999</a>
                            </li>
                            <li>
                                <i class="bi bi-envelope-fill"></i> <a href="mailto:example@webshop.com">example@webshop.com</a>
                            </li>
                            <li>
                                <i class="bi bi-house-fill"></i> <a href="https://maps.app.goo.gl/y4KXf6Uv9ZNVNpXB8">Ulica ulice 18, 22000 Šibenik</a>
                            </li>
                        </ul>
                    </div>
                    <br>
                    <div class="footer-social">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                </div>
                <div class="box footer-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46120.4324315563!2d15.844415654460736!3d43.74115145095853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352615d088d09d%3A0x400ad50862bcc20!2zxaBpYmVuaWs!5e0!3m2!1shr!2shr!4v1704973138234!5m2!1shr!2shr" width="300" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="footer-nav">
                <NavbarLinks />
            </div>
        </div>
    </div>
</template>


<script setup>
import NavbarLinks from './NavbarLinks.vue';

</script>

<style scoped>
a {
    color: var(--light-color);
}
a:hover {
    color: var(--secondary-color);
    text-decoration: underline;
}
ul li {
    margin-top: 10px;
}
h3 {
    color: var(--light-color);
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(255,255,255,0.5);
}
.footer-nav {
    width: 100%;
}
.footer-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 50px;
}
.footer-social a{
    margin-right: 10px;
}
</style>