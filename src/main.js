import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router"
import Vant from "vant"
import axios from "axios"
import 'vant/lib/index.css'
import createRouter from "./router"
import "./assets/rem"
import "./assets/css/main.styl"
Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
const router = createRouter(Router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
