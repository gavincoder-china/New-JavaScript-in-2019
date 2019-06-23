<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputTodo" @keyup.enter="add"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputTodo: ''  // 不需要使用vuex管理(只有当前组件使用)
      }
    },
    methods: {
      add () {
        // 得到输入的数据
        const inputTodo = this.inputTodo.trim()
        // 检查合法性
        if(!inputTodo) {
          alert('必须输入')
          return
        }
        // 封装一个todo对象
        const todo = {
          title: inputTodo,
          complete: false
        }
        // 添加到todos中显示
        // this.addTodo(todo)
        this.$store.dispatch('addTodo', todo)
        // 清除输入
        this.inputTodo = ''
      }
    }
  }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>