<template>
  <swiper
  v-if="props.images && props.images.length > 0"
  :style="{
    '--swiper-navigation-color': 'var(--dark-color)',
    '--swiper-pagination-color': '#000',
  }"
    :thumbs="{ swiper: thumbsSwiper }"
    :spaceBetween="10"
    :navigation="true"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide v-for="image in props.images" :key="image">
      <img :src="image" />
    </swiper-slide>
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  </swiper>
</template>

<script>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  // import required modules
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const thumbsSwiper = ref(null);

      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };

      return {
        thumbsSwiper,
        setThumbsSwiper,
        modules: [FreeMode, Navigation, Thumbs],
      };
    },
  };
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    images: Array,
})
</script>




<style>
.mySwiper2 {
    width: calc(100% - 40px);
    height: 400px;
    cursor: grab;
}
.mySwiper2 img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>