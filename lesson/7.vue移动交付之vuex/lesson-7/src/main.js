// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import Axios from 'axios'
import './mock'
import Vuex from 'vuex'
import { ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(Vuex) // 在vue实例中加入vuex插件
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

// Vue.prototype.$axios = Axios

// 带配置的Axios
Vue.prototype.$axios = Axios.create({
  baseURL: 'http://localhost:8000/'
})

const store = new Vuex.Store({
  state: {
    todoList: [{
      'todo': '待办1',
      'done': false
    },
    {
      'todo': '待办2',
      'done': false
    },
    {
      'todo': '待办3',
      'done': false
    },
    {
      'todo': '待办4',
      'done': false
    },
    {
      'todo': '待办5',
      'done': false
    }]
  },
  getters: {
    undos (state) {
      return state.todoList.filter(todo => !todo.done)
    }
  },
  mutations: {
    TODO_ADD (state, payload) {
      state.todoList.push(payload.todo)
    },
    TODO_DONE (state, payload) {
      state.todoList[payload.index].done = true
    },
    TODO_DEL (state, payload) {
      state.todoList.splice(payload.index, 1)
    }
  },
  actions: {
    todoAdd ({ commit }, todo) {
      commit({
        type: 'TODO_ADD',
        todo: todo,
        done: todo.done
      })
    },
    todoControl ({ commit }, payload) {
      switch (payload.cmd) {
        case 'done':
          commit({
            type: 'TODO_DONE',
            index: payload.index
          })
          break
        case 'delete':
          commit({
            type: 'TODO_DEL',
            index: payload.index
          })
          break
        default:
          break
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
