<script setup>
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import { onMounted, ref } from "vue"

const guideRef = ref();

const guide = ref([
  {
    src: '/img/guide1.jpg'
  },
  {
    src: '/img/guide2.jpg'
  },
  {
    src: '/img/guide3.jpg'
  },
  {
    src: '/img/guide4.jpg'
  },
  {
    src: '/img/guide5.jpg'
  }
])

const configs = ref({
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    620: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1020: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
})

onMounted(() => {
  const swiper = new Swiper(guideRef.value, {
    ...configs.value,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const prev = () => {
    swiper.slidePrev()
  }

  const next = () => {
    swiper.slideNext()
  }
})
</script>
<template>
  <div class="swiper" ref="guideRef">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div v-for="item, index in guide" :key="index" class="swiper-slide">
        <a href="" class="pro__place-link block">
        <img :src="item.src" alt="Hà Nội" class="pro__place-img rounded-[5px] hover:scale-110 duration-300">
        </a>
    </div>
  </div>
  <div class="swiper-button-prev" @click="prev"></div>
  <div class="swiper-button-next" @click="next"></div>
</div>
</template>