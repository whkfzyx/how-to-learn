var active = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

var todo = new Vue({
  el: '#todo',
  data: {
    todoNew: '',
    todoList: []
  },
  methods: {
    todoAdd: function () {
      if (!!this.todoNew) {
        this.todoList.push({ 
          text: this.todoNew, 
          completed: false, 
          editable: false 
        });
        this.todoNew = '';
      }
    },
    todoRemove: function (index) {
      this.todoList.splice(index, 1);
    },
    editTodo: function (index) {
      this.todoList[index].editable = !this.todoList[index].editable;
    }
  },
  filters: {
    editShow: function (value) {
      return value ? '确认' : '编辑';
    }
  },
  computed: {
    todoTotal: function () {
      var actives = active(this.todoList);
      return actives.length;
    }
  }
})
