/*
包含n个基于state的getter计算属性方法的对象模块
 */
export default {

  // 总数量
  totalSize (state) {
    return state.todos.length
  },
  // 完成的数量
  completeSize (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0)
  },

  // 判断是否需要全选
  isAllSelect (state, getters) {
    return getters.completeSize===getters.totalSize && getters.completeSize>0
  }
}