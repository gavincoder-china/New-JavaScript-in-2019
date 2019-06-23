<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{totalSize}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['totalSize', 'completeSize']),

      checkAll: {
        get () { // 决定是否勾选
          return this.$store.getters.isAllSelect
        },

        set (value) {// 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
          // this.selectAll(value)
          this.$store.dispatch('selectAll', value)
        }
      },
    },

    methods: {
      deleteAllCompleted () {
        if(window.confirm('确定清除已完成的吗?')) {
          // this.deleteCompleteTodos()
          this.$store.dispatch('deleteCompleteTodos')
        }
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>