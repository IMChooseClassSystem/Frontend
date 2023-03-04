import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.baseURL = "/api"; //关键代码

import "./assets/main.css";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import Header from "./layout/header.vue";
import Select from "./layout/select.vue";
const app = createApp(App);

app.use(createPinia());

app.component("Header", Header);
app.component("Select", Select);
app.use(router);

app.use(VueAxios, axios);
app.config.productionTip = false;
app.mount("#app");
