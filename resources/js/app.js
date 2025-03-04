import './bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 
import { createApp } from 'vue';

// Vite render all asset
import.meta.glob([
    '../images/**',
]);
import AppBase from '@comps/AppBase.vue';

const app = createApp(AppBase);

app.mount('#app');



