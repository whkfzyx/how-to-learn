//全局注册
Vue.component('table-title', {
  template: '<p>我是一个全局注册的组件!</p>'
})

Vue.component('table-item', {
  template: '<th>{{text}}</th>',
  //组件中的data属性要以函数的形式表现
  data: function () {
    return {
      text: '全局注册的表格组件'
    }
  }
})

new Vue({
  el: '#lesson1'
})

//局部注册
var Child1 = {
  template: '<div>我是一个局部注册的组件!</div>'
}

new Vue({
  el: '#lesson2',
  components: {
    //驼峰式命名，会转换成'table-comp'
    tableChild: Child1
  }
})

//组件内部局部注册
var Child2 = {
  template: '<div>我是一个组件内的局部组件!</div>'
}

//在组件内部引用其他子组件
Vue.component('table-father', {
  //此处的子组件必须包在父组件内，因为template内仅能包含一个根节点
  template: '<div><table-title></table-title>我是另一个全局注册的组件！<table-child></table-child></div>',
  components: {
    'table-child': Child2
  }
})

new Vue({
  el: '#lesson3'
})