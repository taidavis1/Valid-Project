<template>
    <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full">
            <div class="md:flex flex-row justify-center grid-cols-2 sm:pr-5 sm:pl-5 lg:pr-28 lg:pl-28 pt-[48px]"
                style="margin: 0 1.25rem 0 1.25rem">
                <div class="px-2">
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="flex justify-start mb-6">
                            <!-- <svg version="1.1" viewBox="0 0 244 50" class="svg-icon svg-fill"
                                style="width: 170px; height: 35px;">
                                <path pid="0" d="M25.093 0c13.781.06 24.94 11.317 24.882 25.106C49.917 38.894 38.663 50.058 24.88 50 11.1
                                     49.942-.059 38.683.001 24.894.057 11.106 11.31-.058 25.092 0zm11.801 31.9L14.398 16.053c.241-.26.48-.518.74-.777
                                      2.7-2.687 5.971-4.031 9.775-4.015 3.804.015 7.064 1.388 9.741 4.098.238.241.476.482.694.743l-5.951 4.133 2.381 1.688
                                        5.153-3.576v.02L39.33 16.7c-.692-1.203-1.584-2.325-2.616-3.39-3.231-3.292-7.167-4.947-11.788-4.967-4.6-.019-8.53 1.603-11.809 4.867a17.806
                                        17.806 0 00-2.682 3.408l1.429 1.004 23.429 16.51c-.24.26-.48.518-.74.777-2.7 2.687-5.971 4.011-9.775 3.996-3.803-.016-7.063-1.37-9.74-4.08-.258-.26-.496-.521-.734-.782l6.111-4.251-.139-.181-2.183-1.528-5.373 3.735v-.021l-2.377
                                        1.65a17.824 17.824 0 002.654 3.43c3.253 3.291 7.169 4.946 11.769 4.965 4.62.021 8.549-1.602 11.83-4.866 1.06-1.075 1.96-2.21 2.682-3.406l-2.383-1.67zm45.839 2.652l-12.45-.05.096-21.789a.957.957 0 00-.965-.945l-.678-.003a.96.96
                                        0 00-.974.939v.047c-.048.095-.05.236-.05.33l-.098 22.636a1.337 1.337 0 001.351 1.326l13.805.056a.958.958 0 00.973-.938l.003-.662a1.037 1.037 0 00-1.013-.946v-.001zm27.64-22.67l-.871-.003c-.563-.003-1.027.42-1.027.937l-.075 15.878c-.014 3.157-3.252
                                        5.735-7.197 5.72-3.943-.014-7.158-2.618-7.144-5.775l.123-15.5.052-.282a.957.957 0 00-.201-.756 1.128 1.128 0 00-.767-.332l-.87-.004c-.513-.002-.924.326-1.028.75a.857.857 0 00-.156.47l-.073 15.69c-.02 4.616 4.47 8.402 9.95 8.424 5.48.022 10.004-3.73
                                        10.025-8.3l.122-15.5.054-.282a.952.952 0 00-.203-.755c-.152-.189-.458-.379-.714-.38zm48.638 11.226c-3.275-1.249-6.696-2.496-6.688-4.393.01-2.42 2.721-4.401 6.05-4.387 3.331.014 6.025 2.017 6.014 4.436l-.002.38a.96.96 0 00.961.953l.675.003a.96.96 0 00.971-.945v-.38c.009-1.66-.709-3.276-2.006-4.515-1.635-1.618-4.092-2.532-6.65-2.494-4.873-.02-8.698 3.047-8.715 6.938.03 3.748 4.416 5.38
                                        8.656 6.962 3.324 1.247 6.795 2.495 6.785 4.487-.01 2.372-3.155 4.399-6.775 4.385-3.668-.016-6.747-2.07-6.737-4.44l.001-.38a.961.961 0 00-.96-.954l-.676-.002a.96.96 0 00-.97.945v.38c-.018 3.843 4.215 6.991 9.38 7.012 5.163.022 9.423-3.092 9.44-6.934-.033-3.796-4.464-5.427-8.754-7.057zM193.66 11.84l-18.844-.076c-.547-.003-.996.42-.999.94l-.002.66c-.002.52.443.946.99.949l8.103.032-.095
                                        21.802c-.003.52.443.947.99.949l.696.002c.546.003.996-.42 1-.94l.095-21.802 8.055.031c.547.003.996-.42.999-.94l.003-.66c.003-.52-.443-.946-.99-.947zm49.264.515c-.144-.33-.481-.52-.867-.52l-.87-.005a.963.963 0 00-.677.28l-.145.14-.147.142-6.609 9.677-6.72-9.734c-.048-.046-.096-.094-.096-.14l-.143-.143a.97.97 0 00-.675-.285l-.774-.003a1.021 1.021 0 00-.872.515 1.03 1.03 0 00.045.988l7.966
                                        11.576-.049 11.307c.006.527.437.95.964.946l.675.002a.957.957 0 00.97-.937l.049-11.308 7.923-11.509c.194-.329.243-.705.052-.989zm-37.898 12.047l3.75-7.994 3.728 8.023-7.478-.03zm15.615 10.954v-.047l-10.5-22.733c-.15-.425-.549-.71-1.102-.807-.603-.049-1.156.231-1.41.703v.046l-10.705 22.697v.047l-.204.471c-.095.283-.06.595.097.849.188.258.483.416.802.428l.854.004c.453.001.806-.282.958-.657l.05-.141
                                        4.314-9.277 9.95.04 4.28 9.31.049.14c.15.38.5.664.952.667l.854.002c.352.002.654-.139.806-.422.152-.281.254-.563.104-.847l-.149-.473zm-86.008-15.15l.817.003a.963.963 0 00.729-.347l4.755-6.218.412-.478a.763.763 0 00.095-.915c-.135-.306-.453-.482-.816-.483l-.863-.004a.929.929 0 00-.868.608l-4.983 6.522a.94.94 0 00-.096.915c.135.22.453.394.816.397h.002zm-6.998 8.45l-.819-.002a.96.96 0 00-.728.347l-4.755
                                        6.207-.413.48a.77.77 0 00-.094.92c.135.309.452.485.816.488l.864.002a.91.91 0 00.82-.478l5.03-6.601a.949.949 0 00.095-.92 1.027 1.027 0 00-.816-.443zm8.019-.453l.148.14 5.55 7.248c.248.284.246.662.095.99-.15.332-.5.519-.9.517l-.896-.004a1.013 1.013 0 01-.697-.286l-.149-.14c-.03-.002-.042-.02-.059-.044a.212.212 0 00-.04-.052l-5.501-7.151a1.005 1.005 0 01-.15-.237l-11.694-15.39-.446-.521c-.248-.285-.246-.662-.096-.993.15-.33.501-.518.9-.516l.897.004a.99.99
                                        0 01.845.428l.15.19 11.992 15.721s.05.048.05.096z">
                                </path>
                            </svg> -->
                            <img class="w-32 h-16 rounded-lg" src="/img/logo/logo-anstay.png" />
                        </li>
                        <li class="flex  mb-4">
                            <div class="flex flex-col">
                                <div class="flex justify-start mb-4 max-w-[300px]">
                                    Nền tảng đặt Homestay, căn hộ dịch vụ dành cho giới trẻ hàng đầu Việt Nam
                                </div>
                                <div>
                                    <p>CTY TNNN ANSTAY</p>
                                    <p>MST: 010101010101</p>
                                    <p>Cầu giấy, Hà Nội</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- <div class="px-2">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">TOP HOMESTAY ĐƯỢC YÊU
                        THÍCH</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium" v-for="(item, index) in homestayItems"
                        :key="index">
                        <li class="mb-4">
                            <a href="#" class=" hover:underline">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div class="px-2">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">KHÔNG GIAN ƯA THÍCH</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium" v-for="(favorType) in favorTypes"
                        :key="favorType">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">{{ favorType }}</a>
                        </li>
                    </ul>
                </div> -->
                <div class="px-2">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white mt-2">LIÊN HỆ CHÚNG TÔI
                    </h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4 flex items-center">
                            <div class="w-12 h-12 flex justify-center rounded-full border-2">
                                <div class="flex flex-col justify-center">
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                </div>
                            </div>
                            <span class="ml-2">0889866666</span>
                        </li>
                        <li class="mb-4 flex items-center">
                            <div class="w-12 h-12 flex justify-center rounded-full border-2">
                                <div class="flex flex-col justify-center">
                                    <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
                                </div>
                            </div>
                            <span class="ml-2">Messenger</span>
                        </li>
                        <li class="mb-4 flex items-center">
                            <div class="w-12 h-12 flex justify-center rounded-full border-2">
                                <div class="flex flex-col justify-center w-12 h-12">
                                    <img class="w-12 h-12" src="/icons/zalo.png" />
                                </div>
                            </div>
                            <span class="ml-2">0889866666</span>
                        </li>
                        <li class="mb-4 flex justify-center items-center">
                            <button type="button"
                                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white
                                    rounded-lg border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700 mt-2
                                    focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800
                                    dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <font-awesome-icon :icon="['fa', 'right-from-bracket']" />
                                Book now
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- <div class="px-2">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">TẢI ỨNG DỤNG LUXSTAY</h2>
                    <div class="flex space-x-2">
                        <div>
                            <div class="border-2 p-2">
                                <img src="https://raw.githubusercontent.com/ubeevn/luxstay-v2/main/assets/img/qr-code.png"
                                    class="h-16 w-16" alt="Flowbite Logo" />
                            </div>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <img src="https://raw.githubusercontent.com/ubeevn/luxstay-v2/main/assets/img/huawei.svg"
                                class="w-28" alt="Flowbite Logo" />
                            <img src="https://raw.githubusercontent.com/ubeevn/luxstay-v2/main/assets/img/google-play.svg"
                                class="w-28" alt="Flowbite Logo" />
                            <img src="https://raw.githubusercontent.com/ubeevn/luxstay-v2/main/assets/img/apple-store.svg"
                                class="w-28" alt="Flowbite Logo" />
                        </div>
                    </div>
                </div> -->
            </div>
            <div
                class="sm:pr-5 sm:pl-5 lg:pr-28 lg:pl-28 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a
                        href="https://flowbite.com/">Anstay</a>. All Rights Reserved.
                </span>
                <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 8 19">
                            <path fill-rule="evenodd"
                                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Facebook page</span>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 21 16">
                            <path
                                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                        </svg>
                        <span class="sr-only">Discord community</span>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 17">
                            <path fill-rule="evenodd"
                                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Twitter page</span>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">GitHub account</span>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Dribbble account</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            homestayItems: [
                'Homestay Đà Lạt',
                'Homestay Hà Nội',
                'Homestay Hồ Chí Minh',
                'Homestay Sapa',
                'Homestay Vũng Tàu',
            ],
            favorTypes: [
                'Căn hộ dịch vụ',
                'Biệt thự',
                'Nhà riêng',
                'Studio',
                'Travel Guide',
            ],
            aboutUsItems: [
                'Blog',
                'Điều khoản hoạt động',
                '1800 6586',
                '+84 8898 66666',
                'info@luxstay.com',
                'Cơ hội nghề nghiệp',
                'Tạp chí du lịch'
            ]
        }
    }
}
</script>

<style></style>