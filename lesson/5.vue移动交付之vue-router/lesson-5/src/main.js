// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
// import Todo from './pages/todo.vue'
// import Page1 from './pages/page1.vue'
import router from './router'

// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Todo
// }, {
//   path: '/page1',
//   component: Page1
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   // console.log(from)
//   next({path: '/page1'})
// })

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
