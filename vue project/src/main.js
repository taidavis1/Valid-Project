import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import '@/styles/index.css'
import '@/styles/app.css'
import '@/styles/custom.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faRotateRight, faSquareParking, faCalendar, faSearch, 
    faUser, faPhone, faRightFromBracket, faHome, faDesktop, faBed , faPlus , faMinus , faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { faClock , faSquareCheck , faFaceSmileBeam} from '@fortawesome/free-regular-svg-icons'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
// Import Flowbite styles
import 'flowbite/dist/flowbite.css';
// Import Flowbite JavaScript
import 'flowbite/dist/flowbite.min.js';
import { faFacebookMessenger, faSignalMessenger } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faCalendar, faRotateRight , faSquareParking , faHome , faDesktop , 
    faBed , faPlus , faMinus , faClock , faStopwatch , faSquareCheck , faFaceSmileBeam, 
    faSearch, faUser, faPhone, faFacebookMessenger, 
    faSignalMessenger, faRightFromBracket)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(createPinia())
    .mount('#app')
