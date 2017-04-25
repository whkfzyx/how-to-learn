//字面量语法
Vue.component('table-item', {
  //驼峰式命名，会转换成'another-text'
  props: ['text', 'anotherText'],
  template: '<th>{{text}}-{{anotherText}}</th>'
})

new Vue({
  el: '#lesson1',
  data: {
    people: [
      { name: '侯亮平', birth: 1970 },
      { name: '陈岩石', birth: 1940 },
      { name: '李达康', birth: 1961 },
      { name: '高小琴', birth: 1976 }
    ]
  }
})

//动态语法
Vue.component('child', {
  props: ['myMessage'],
  template: '<p>{{myMessage}}</p>'
})

new Vue({
  el: '#lesson2',
  data: {
    parentMsg: 'Hello World!'
  }
})

//prop验证
Vue.component('table-type', {
  props: {
    sn: Number,
    text: String,
    'another-text': {
      type: String,
      required: true
    }
  },
  template: '<th>{{sn}}.{{text}} {{anotherText}}</th>'
})

new Vue({
  el: '#lesson3'
})