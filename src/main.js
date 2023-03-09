import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import rout from './router/index.js'
import store from './store/index'
import 'animate.css';
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:rout,
  store
}).$mount('#app')
