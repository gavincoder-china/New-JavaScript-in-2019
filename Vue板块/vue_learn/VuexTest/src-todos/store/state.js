/*
状态对象模块
 */
import storageUtils from '../utils/storageUtils'

export default {
  todos: storageUtils.readTodos()
}