import './assets/main.css'
// import {PgButton} from "opentiny-vue-charts/dist/button/button.esm.js";
import {Button} from "opentiny-vue-charts/dist/button/button.esm.js";
// import {Button} from "opentiny-vue-charts/src/button";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('Btutton', Button)

app.mount('#app')
