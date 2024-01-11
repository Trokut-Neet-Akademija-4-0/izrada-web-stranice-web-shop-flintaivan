<template>
    <div class="content-wrapper mt-5 mb-5">
        <h2 class="main-title">Contact us</h2>
        <div class="container">
            <div class="col-8">
                <div class="contact-wrapper">
                    <h2>Send us a message</h2>
                    <div class="contact-content">
                        <form action="">
                            <div class="from-group">
                                <label for="name">Full name</label>
                                <input type="text" name="name">
                            </div>
                            <div class="from-group">
                                <label for="phone">Phone number</label>
                                <input type="tel" name="phone">
                            </div>
                            <div class="from-group">
                                <label for="email">Email</label>
                                <input type="email" name="email">
                            </div>
                            <div class="from-group">
                                <label for="Message">Message</label>
                                <br>
                                <textarea name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </form>      
                    </div>
                </div>
            </div>
            <div class="col-4">
                <Sidebar align="left">
                    <h2>Contact info</h2>
                    <div class="contact-aside-wrapper">

                        <div class="contact-info">
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
                        <div class="contact-social">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </Sidebar>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<style scoped>
label {
  text-transform: capitalize;
  display: inline-block;
  font-size: 0.8rem;
  margin: 10px 0;
}
input, textarea {
  background-color: #fff;
  margin-bottom: 15px;
  padding: 8px 12px;
  width: calc(100% - 24px);
  border-radius: 4px;
  display: block;
  border: none;
  border-bottom: 1px solid var(--dark-color);
  color: var(--dark-color);
  outline: none;
}
input:hover, textarea:hover {
    border-bottom: 1px solid var(--primary-color);
}
input:focus {
    border-bottom: 1px solid var(--primary-color);
}
a {
    color: var(--dark-color);
}
a:hover {
    color: var(--primary-color);
    text-decoration: underline;
}
ul li {
    margin-top: 10px;
}
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
.contact-aside-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.contact-social {
    margin-top: 20px;
}
.contact-social a{
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-right: 10px;
}

</style>