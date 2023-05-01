import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './assets/sass/main.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faLocation, faLocationDot, faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret,faLocationDot,faPhone)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
