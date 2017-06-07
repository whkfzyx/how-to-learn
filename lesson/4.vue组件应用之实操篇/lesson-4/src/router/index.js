import Vue from 'vue'
import Router from 'vue-router'
import Todo from '../pages/todo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    }
  ]
})
