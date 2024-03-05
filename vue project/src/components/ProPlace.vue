<script setup>
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import { onMounted, ref } from "vue";
import axios from "axios";

const proPlaceRef = ref();
const proPlace = ref([]);

onMounted(async () => {
    try {
        const resp = await axios.get('http://149.28.134.218:8080/categories');
        proPlace.value = resp.data;
        const swiper = new Swiper(proPlaceRef.value, {
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
    } catch (error) {
        console.error(error);
    }
});

const configs = ref({
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        340: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        620: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1020: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    },
    autoplay: {
        delay: 2000,
    },
    loop: true
})
</script>
<template>
    <div class="swiper" ref="proPlaceRef">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div v-for="item in proPlace" :key="item.id" class="swiper-slide">
                <a href="" class="pro__place-link block hover:-translate-y-[5px]">
                    <img :src="'http://149.28.134.218:8080/' + item.picture_url" alt="Hà Nội"
                        class="pro__place-img rounded-[5px] h-[308px] w-[266px]">
                    <div class="pro__place-title absolute bottom-[30px] left-[10px]">
                        <h3 class="pro__place-label text-white font-semibold text-[24px] duration-700">{{ item.name2 }}</h3>
                        <span class="pro__place-decs mr-2 text-white font-semibold duration-700">{{ item.count }}</span>
                        <span class="pro__place-decs-place text-white duration-700">Chỗ ở</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="swiper-button-prev" @click="prev"></div>
        <div class="swiper-button-next" @click="next"></div>
    </div>
</template>