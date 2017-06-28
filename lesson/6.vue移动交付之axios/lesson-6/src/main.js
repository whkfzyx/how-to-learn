// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import Axios from 'axios'
import './mock'
import { ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

// Vue.prototype.$axios = Axios

// 带配置的Axios
Vue.prototype.$axios = Axios.create({
  baseURL: 'http://localhost:8000/'
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
