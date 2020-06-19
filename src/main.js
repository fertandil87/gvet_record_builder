// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


// ================
// Use Element UI
// ----------------
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' // Default lang is Chinese
import './assets/scss/_var.scss'
Vue.use(Element, { locale })
import './assets/scss/main.scss'


import App from './App'

// ================
// Transitions
// ----------------
import Animate from 'vue2-animate/dist/vue2-animate.min.css'
Vue.use(Animate)

// ================
// Lodash
// ----------------
import VueLodash from 'vue-lodash'
Vue.use(VueLodash)

// ================
// Use Vue Router
// ----------------
import router from './router'


// ================
// Use Layouts
// ----------------
import Default from './layouts/Default'
Vue.component('default-layout', Default);

import Output from './components/Output'
Vue.component('Output', Output);


// ================
// Vue-stash aka simple vuex alternative
// ----------------
import VueStash from 'vue-stash'
import store from './store/store'
Vue.use(VueStash)



Vue.config.productionTip = false

export const Bus = new Vue();
window.Bus = Bus

const axios = require('axios').default;
window.axios = axios

var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  data: { store },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

global.vm = vm;