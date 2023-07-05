import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.css';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCoffee,
    faSpinner,
    faEdit,
    faCircle,
    faCheck,
    faPlus,
    faEquals,
    faArrowRight,
    faPencilAlt,
    faComment,
    faPhone,
    faPerson,
    faClose,
    faRobot,
    faTrash,
    faSearch,
    faShoppingCart,
    faUser,
    faHeart,
    faJedi,
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faCoffee,
    faSpinner,
    faEdit,
    faCircle,
    faCheck,
    faPlus,
    faEquals,
    faArrowRight,
    faPencilAlt,
    faComment,
    faPhone,
    faPerson,
    faClose,
    faRobot,
    faTrash,
    faSearch,
    faShoppingCart,
    faUser,
    faHeart,
    faJedi,
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
