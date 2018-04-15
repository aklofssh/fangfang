// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import  store from './store'
import './assets/css/base.css';
import './assets/css/shop_common.css';
import './assets/css/shop_header.css';
import './assets/css/shop_home.css';
import './assets/css/global.css';
import './assets/css/login-register.css';
import $ from 'jquery';

import axios from 'axios'

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.window = window;

/* eslint-disable no-new */
window.$app=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
