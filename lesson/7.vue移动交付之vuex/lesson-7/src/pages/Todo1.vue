<template>
  <div class="todo">
    <swipeout>
      <swipeout-item v-for="(item,index) in todoList"
                     :key="index"
                     :disabled="item.done"
                     ref="swipeoutItem"
                     :right-menu-width="140"
                     :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('delete', index)"
                           type="warn"
                           :width="70">删除</swipeout-button>
          <swipeout-button @click.native="onButtonClick('edit', index)"
                           type="default"
                           :width="70">编辑</swipeout-button>
        </div>
  
        <div slot="left-menu">
          <swipeout-button @click.native="onButtonClick('done', index)"
                           type="primary">完成</swipeout-button>
        </div>
  
        <div slot="content"
             class="demo-content vux-1px-b"
             :class="item.done ? 'completed' : ''">
          {{item.todo}}
        </div>
      </swipeout-item>
    </swipeout>
     <!-- <group>
      <x-input title="新待办"
               v-model="newTodo"></x-input>
    </group>
    <box gap="10px">
      <x-button type="primary"
                @click.native="addTodo">添加待办</x-button>
    </box>  -->
    <div v-transfer-dom>
      <popup v-model="popShow"
             position="bottom"
             max-height="50%">
        <group>
          <x-input title="修改"
                   v-model="editTodo"></x-input>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="editTodos"
                    plain
                    type="primary">确认修改</x-button>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  XInput,
  XButton,
  Swipeout,
  SwipeoutItem,
  SwipeoutButton,
  Box,
  TransferDom,
  Popup
} from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    XInput,
    XButton,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    Box,
    Popup
  },
  data () {
    return {
      // todoList: [],
      newTodo: '',
      editTodo: '',
      popShow: false,
      editNum: 0
    }
  },
  computed: {
    todoList () {
      return this.$store.state.todoList
    },
    todoUndo () {
      return this.todoList.filter((todo) => {
        return !todo.done
      })
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo) {
        const t = {
          todo: this.newTodo,
          done: false
        }
        this.todoList.push(t)
        this.newTodo = ''
      }
    },
    onButtonClick (val, i) {
      switch (val) {
        case 'done':
          console.log(this.$store.state.todoList)
          this.todoList[i].done = true
          break
        case 'delete':
          this.todoList.splice(i, 1)
          break
        case 'edit':
          this.editNum = i
          this.popShow = true
          break
        default:
          break
      }
    },
    editTodos () {
      if (this.editTodo) {
        this.todoList[this.editNum].todo = this.editTodo
        this.popShow = false
        this.editTodo = ''
      }
    }
  }
}
</script>

<style lang="less">
.demo-content {
  line-height: 40px;
  padding: 0 10px;
}

.completed {
  text-decoration: line-through;
  color: #666;
}
</style>

