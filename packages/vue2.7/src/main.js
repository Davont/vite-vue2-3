import Vue from "vue";
import App from "./App.vue";
import Btutton from "opentiny-vue-charts/dist/button/button.esm.js";

import "./assets/main.css";

Vue.use(Btutton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
