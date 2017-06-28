import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/pages/Todo.vue'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Todo
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
