// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui';
// import 'vuetify/dist/vuetify.min.css'
// import Vuetify from 'vuetify'
//
// Vue.use(Vuetify)
window.axios = require('axios')
window.NProgress = require('nprogress')
window.axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App  }
})
