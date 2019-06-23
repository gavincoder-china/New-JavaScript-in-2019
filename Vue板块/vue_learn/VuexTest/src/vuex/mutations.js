/*
包含n个用于直接更新状态的方法的对象模块
 */

import {REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR} from './mutation-types'

export default {
  [REQUESTING] (state ) {
    state.firstView = false
    state.loading = true
    state.users = []
    state.errorMsg = ''
  },

  [REQUEST_SUCCESS] (state, {users}) {
    state.loading = false
    state.users = users
  },

  [REQUEST_ERROR] (state, {msg}) {
    state.loading  = false
    state.errorMsg = msg
  },
}
