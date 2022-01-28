import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import "./index.css";
import {createPinia} from "pinia";
const usePinia = createPinia();
const app = createApp(App)
app.use(usePinia)
app.use(router)
app.mount('#app')
