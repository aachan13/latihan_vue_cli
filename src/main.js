import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueHeadful from 'vue-headful'
import store from './store'
import router from './route'

Vue.component('vue-headful', VueHeadful)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
