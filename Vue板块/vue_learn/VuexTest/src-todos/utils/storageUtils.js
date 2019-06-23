/*
向local中存储数据的工具模块
1. 向外暴露一个函数(功能)
   只有一个功能需要暴露
2. 向外暴露一个对象(包含多个功能)
   有多个功能需要暴露
 */
const TODOS_KEY = 'todos_key'
export default {
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },
  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}

/*
export function xxx() {

}

export function yyy () {

}*/
