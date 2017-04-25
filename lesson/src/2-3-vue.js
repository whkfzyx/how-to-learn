Vue.component('lesson-content',{
  template: '\
    <div>\
      <header>\
        <slot name="header">\
        </slot>\
      </header>\
      <slot>\
      </slot>\
    </div>\
  '
})

Vue.component('table-item', {
  props: ['text', 'anotherText'],
  template: '<tr><th>{{text}}-{{anotherText}}</th></tr>'
})

Vue.component('table-add', {
  props: ['addName', 'addBirth'],
  template: '<button v-on:click="tableAdd">添加</button>',
  methods: {
    tableAdd: function () {
      var p = { name: this.addName, birth: this.addBirth }
      this.$emit('table-add', p)
    }
  }
})

Vue.component('table-del', {
  template: '<button v-on:click="tableDelete">删除<slot>最后一个</slot></button>',
  methods: {
    tableDelete: function () {
      this.$emit('table-delete');
    }
  }
})

new Vue({
  el: '#lesson1',
  data: {
    people: [
      { name: '侯亮平', birth: 1970 },
      { name: '陈岩石', birth: 1940 },
      { name: '李达康', birth: 1961 },
      { name: '高小琴', birth: 1976 }
    ],
    newName: '',
    newBirth: ''
  },
  computed: {
    lastName: function () {
      if (this.people.length > 0) {
        var last = this.people[this.people.length - 1];
        return last.name;
      }
    }
  },
  methods: {
    peopleAdd: function (data) {
      this.people.push(data);
    },
    peopleDel: function () {
      this.people.pop();
    }
  }
})
