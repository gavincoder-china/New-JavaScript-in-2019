/*
包含n个用于直接更新状态的方法的对象模块
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS} from './mutation-types'

export default {
  [ADD_TODO] (state, {todo}) {  // 方法名不是ADD_TODO, 而是add_todo
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL_TODOS] (state, {isCheck}) {
    state.todos.forEach(todo => todo.complete = isCheck)
  },

  [DELETE_COMPLETE_TODOS] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  }
}