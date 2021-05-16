import { createApp } from 'vue'
import App from './App.vue';
import {router} from "./router.js";
import {store} from "./store.js";
import 'bootstrap';
import 'jQuery';
import {i18n} from "./i18n.js";


const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
