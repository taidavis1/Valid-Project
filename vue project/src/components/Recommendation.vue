<script setup>
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import { onMounted, ref } from "vue"

const recommendationRef = ref();

const recommendation = ref([
  {
    src: '/img/apartment_1_1625465608.jpg',
    header: 'VI VU NGOẠI THÀNH HÀ NỘI',
    sub: 'Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội',
  },
  {
    src: '/img/apartment_1_1614660728.jpg',
    header: 'HÀ NỘI NỘI THÀNH LÃNG MẠN',
    sub: 'Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội',
  },
  {
    src: '/img/apartment_2_1614588617.jpg',
    header: 'Vũng tàu biệt thự hồ bơi',
    sub: 'Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội',
  },
  {
    src: '/img/apartment_2_1615794965.jpg',
    header: 'Sài Gòn cần là có ngay',
    sub: 'Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng',
  }
])

const configs = ref({
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    340: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
})

onMounted(() => {
  const swiper = new Swiper(recommendationRef.value, {
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
  <div class="swiper" ref="recommendationRef">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div v-for="item, index in recommendation" :key="index" class="swiper-slide">
      <a href="" class="pro__place-link block">
        <img :src="item.src" alt="Hà Nội" class="pro__place-img rounded-[5px]">
        <div class="pro__place-title mt-2">
          <p class="text-header font-semibold text-[12px] mb-2.5">{{ item.header }}</p>
          <p class="pro__place-decs-place mr-2 text-content duration-300">{{ item.sub }}</p>
        </div>
      </a>
    </div>
  </div>
  <div class="swiper-button-prev" @click="prev"></div>
  <div class="swiper-button-next" @click="next"></div>
</div>
</template>