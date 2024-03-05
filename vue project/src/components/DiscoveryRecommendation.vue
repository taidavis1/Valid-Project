<script setup>
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import { onMounted, ref } from "vue"

const recommendationDiscoveryRef = ref();

const recommendationDiscovery = ref([
  {
    src: '/img/explore.jpg',
    text: '5 resort hạng sang ở Việt Nam trên tạp chí du lịch của Anh'
  },
  {
    src: '/img/explore2.jpg',
    text: 'Du lịch Cần Thơ nhất định phải ghé thăm những địa điểm này'
  },
  {
    src: '/img/explore3.jpg',
    text: 'Tuần lễ “Tôi yêu bánh mì Sài Gòn” chính thức diễn ra từ ngày 24/3'
  }
])

const configs = ref({
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    620: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
})

onMounted(() => {
  const swiper = new Swiper(recommendationDiscoveryRef.value, {
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
  <div class="swiper" ref="recommendationDiscoveryRef">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div v-for="item, index in recommendationDiscovery" :key="index" class="swiper-slide">
      <a href="" class="pro__place-link block">
        <img :src="item.src" alt="Hà Nội" class="pro__place-img rounded-[5px] h-[230px] w-full object-cover">
        <div class="pro__place-title mt-2 absolute bottom-[10px] left-[20px]">
          <p class="text-white font-semibold text-[10px] mb-[7rem] bg-gray-700 !bg-opacity-60 w-max py-1 px-3 rounded-full">THÔNG TIN HOMESTAY</p>
          <p class="text-white font-medium text-[18px] mb-2.5">{{ item.text }}</p>
        </div>
      </a>
    </div>
  </div>
  <div class="swiper-button-prev" @click="prev"></div>
  <div class="swiper-button-next" @click="next"></div>
</div>
</template>