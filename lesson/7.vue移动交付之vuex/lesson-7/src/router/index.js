import Vue from 'vue'
import Router from 'vue-router'
import Todo1 from '@/pages/Todo1.vue'
import Todo2 from '@/pages/Todo2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Todo1
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo2
    }
  ]
})
