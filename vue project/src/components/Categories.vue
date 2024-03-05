<template>
  <div :class="['w-full mt-16 md:mt-28 xl:mt-20 lg:flex bg-white fixed top-2 lg:p-2', scroll ?'shadow-md':'shadow-none']" ref="categoriesRef">
    <!-- Additional required wrapper -->
    <div class=" p-4 swiper-wrapper flex"> 
      <!-- Slides -->
      <div v-for="item, index in Categories" :key="index" @click="selectedIndex = index" class="cursor-pointer swiper-slide opacity-70 hover:opacity-100">
        <div class="rounded-full pt-1 flex overflow-hidden flex-col space-y-1 items-center" :class="{'bg-green-300': selectedIndex == index}">
          <img :src="item.src" class="w-[16px] h-[16px]">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev " @click="prev"></div>
    <div class="swiper-button-next" @click="next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

  export default {
    data() {
      return {
        selectedIndex: 2,
        scroll: false,
        Categories: [
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_j7qkkkol',
            name: 'Tất Cả',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_g8nt1zk7',
            name: 'Ưu đãi',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_0xws3gb3',
            name: 'Giá Rẻ',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_ku59i26b',
            name: 'Máy Chiếu',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_nh893aib',
            name: 'Hoàn Kiếm',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_9ta2oxyl',
            name: 'Theo Giờ',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/us7cez0mnc_iu934mdb',
            name: 'Bồn Tắm',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_7da59xhj',
            name: 'Đống Đa',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_wnil5tn1',
            name: 'Tây Hồ',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_7aefjegv',
            name: 'Cầu giấy',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_pih7mvla',
            name: 'Phòng Vip',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_kneet47b',
            name: 'Ngân thành HN',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_qqas52yt',
            name: 'Gia Lâm',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_akb39ffo',
            name: 'Gần Bạn',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_fsgtuel8',
            name: 'Quay chụp',
          },
          {
            src: 'https://static.dayladau.com/dayladau/images/usiuyjzs94_u1ohxer4',
            name: 'Phú Quốc',
          }, 
        ],
        configs: {
          slidesPerView: 2,
          loop: true,
          autoplay: {
            delay: 2000,
          },
          breakpoints: {
            340: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            450: {
                slidesPerView: 4,
                spaceBetween: 5,
            },
            620: {
                slidesPerView: 6,
                spaceBetween: 5,
            },
            1020: {
                slidesPerView: 8,
                spaceBetween: 5,
            },
            1300: {
                slidesPerView: 12,
                spaceBetween: 5,
            },
          },
        },
        swiper: ''
      };
    },
    methods: {
      setScroll() {
        this.scroll = window.scrollY >= 20;
      },
      prev() {
        this.swiper.slidePrev();
      },
      next() {
        this.swiper.slideNext();
        },
      },
      mounted() {
        this.swiper = new Swiper(this.$refs.categoriesRef, {
          ...this.configs,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        });
        this.swiper.slideTo(this.selectedIndex, 300, false);
        window.addEventListener('scroll', this.setScroll);
      },
      beforeUnmount() {
        window.removeEventListener('scroll', this.setScroll);
    },
  };
</script>