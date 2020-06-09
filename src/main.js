import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

import '@/styles/tailwind.css'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
