<template>
    <div class="app overflow-hidden">
        <!-- navbar -->
        <NavBar />
        <div :class="MainClass" id="wrap" :style="MainStyle">
            <router-view></router-view>
        </div>
        <!-- footer -->
        <Footer />
    </div>
</template>
<script>
import Footer from './components/layouts/Footer.vue';
import NavBar from './components/layouts/NavBar.vue';
export default {
    name: 'App',
    components: {
        NavBar,
        Footer
    },
    setup() {
    },
    computed:{
        MainClass(){
            const name = this.$route.name;
            switch(name){
                case 'ItemList':
                    return '';
                default:
                    return 'sm:pr-5 sm:pl-5 lg:pr-28 lg:pl-28';
            }
        }
    },
    computed:{
        MainStyle(){
            const name = this.$route.name;
            switch(name){
                case ('ItemList'):
                    return '';
                default:
                    return 'margin: 7rem 1.25rem 0 1.25rem'
            }
        }
    },

    data() {
        return {
            homestayItems : [
                'Homestay Đà Lạt',
                'Homestay Hà Nội',
                'Homestay Hồ Chí Minh',
                'Homestay Sapa',
                'Homestay Vũng Tàu',
            ],
            favorTypes : [
                'Căn hộ dịch vụ',
                'Biệt thự',
                'Nhà riêng',
                'Studio',
                'Travel Guide',
            ],
            aboutUsItems : [
                'Blog',
                'Điều khoản hoạt động',
                '1800 6586',
                '+84 8898 66666',
                'info@anstay.com',
                'Cơ hội nghề nghiệp',
                'Tạp chí du lịch'
            ]
        }
    }
}
</script>


<style scoped></style>
