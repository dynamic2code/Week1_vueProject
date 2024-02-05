import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CanvasJSChart from '@canvasjs/vue-charts';

const app = createApp(App)

app.use(CanvasJSChart);
app.use(router)
app.component('Marquee', Marquee)
app.mount('#app')
