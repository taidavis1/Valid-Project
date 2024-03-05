<template>
    <Categories />
    <section style="margin: 0 1.25rem 0 1.25rem" class="sm:pr-5 sm:pl-5 lg:pr-28 lg:pl-28">
        <div class=" grid mt-28 lg:mt-44 grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-6 lg:gap-y-12">
            <div class="" v-for="(item, index) in listItem" :key="index">
                <img class=" rounded-lg" :src="'http://149.28.134.218:8080/' + item.img_url" />
                <div class=" flex mt-2 px-2 space-x-1 items-center">
                    <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path clip-rule="evenodd" d="M11.5 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" stroke="#8C8C8C"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path clip-rule="evenodd"
                            d="M9 19C7.8 19 1.5 13.898 1.5 8.563 1.5 4.387 4.857 1 9 1c4.142 0 7.5 3.387 7.5 7.563C16.5 13.898 10.198 19 9 19z"
                            stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span class=" text-sm font-thin">{{ item.short_address }}</span>
                </div>
                <div class=" flex px-2 items-center space-x-1">
                    <svg width="18" height="18" fill="#30db66" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path
                            d="M16.918 13.32a1.1 1.1 0 00-.319.97l.89 4.92a1.08 1.08 0 01-.45 1.08 1.1 1.1 0 01-1.17.08l-4.43-2.31a1.13 1.13 0 00-.5-.13h-.27a.812.812 0 00-.27.09l-4.43 2.32c-.22.11-.468.15-.71.11a1.112 1.112 0 01-.89-1.27l.89-4.92a1.119 1.119 0 00-.32-.98l-3.61-3.5a1.08 1.08 0 01-.27-1.13c.134-.396.476-.685.89-.75l4.97-.72c.377-.04.71-.27.88-.61l2.19-4.49c.051-.1.118-.192.2-.27l.09-.07a.671.671 0 01.16-.13l.11-.04.17-.07h.42c.376.04.707.264.88.6l2.22 4.47c.16.327.47.554.83.61l4.97.72c.42.06.77.35.91.75.13.401.017.841-.29 1.13l-3.74 3.54z"
                            stroke="#30db66" stroke-width="1.5"></path>
                    </svg>
                    <span class=" text-sm">5.0 (8 đánh giá)</span>
                </div>
                <div class=" px-2">
                    <span class="">{{ item.name2 }}</span>
                </div>
                <div class=" px-2">
                    <span class=" font-bold tracking-wide text-green-500">{{ item.base_price }} đ</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Categories from "@/components/Categories.vue";
import { onMounted, ref } from "vue";
import axios from 'axios';

export default {
    name: 'itemList',
    components: {
        Categories,
    },
    data() {
        return {
            listItem: [],
        }
    },
    mounted() {
        axios.get('http://149.28.134.218:8080/listings').then((result) => {
            // console.log(result.data)
            this.listItem = result.data;
            // console.log(this.listItem);
        }).catch((err) => {
            console.log(err);
        });
    }
}

// onMounted(async () => {
//     try {
//         const resp = await axios.get('http://149.28.134.218:8080/categories');
//         proPlace.value = resp.data;
//         console.log(resp.data)
//         this.listItem = resp.data;
//     } catch (error) {
//         console.error(error);
//     }
// });

</script>