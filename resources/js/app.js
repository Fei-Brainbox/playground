import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue';

// Vite render all asset
import.meta.glob([
    '../images/**',
]);
import AppBase from '@comps/AppBase.vue';

const app = createApp(AppBase);

app.mount('#app');



