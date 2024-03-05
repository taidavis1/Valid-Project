<script setup>
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import { onMounted, ref } from "vue"

const specialEventRef = ref();

const specialEvent = ref([
  {
    src: '/img/no-content/nocontent.png'
  },
  {
    src: '/img/no-content/nocontent.png'
  },
  {
    src: '/img/no-content/nocontent.png'
  }
])

const configs = ref({
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    620: {
      slidesPerView: 1.5,
      spaceBetween: 15,
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
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
})

onMounted(() => {
  const swiper = new Swiper(specialEventRef.value, {
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
  <div class="swiper" ref="specialEventRef">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div v-for="item, index in specialEvent" :key="index" class="swiper-slide">
        <a href="" class="pro__place-link block">
        <img :src="item.src" alt="Hà Nội" class="pro__place-img rounded-[5px] hover:scale-110 duration-300 border">
        </a>
    </div>
  </div>
  <div class="swiper-button-prev" @click="prev"></div>
  <div class="swiper-button-next" @click="next"></div>
</div>
</template>