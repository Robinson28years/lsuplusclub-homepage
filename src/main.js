// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueMarkdown from 'vue-markdown'

window.axios = require('axios')
window.axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('jwt');
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueMarkdown);
Vue.config.productionTip = false
// var editor = require('./editor.vue');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App  }
})
