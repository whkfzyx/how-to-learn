import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/pages/todo.vue'
import Page1 from '@/pages/page1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Page1,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/todo/:id?',
      name: 'todo',
      component: Todo,
      meta: {
        title: '待办'
      },
      beforeEnter: (to, from, next) => {
        console.log(to)
        next()
      }
    }
  ]
})
