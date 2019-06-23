/*
包含n个用于间接更新状态的方法的对象模块
 */
import axios from 'axios'
import {REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR} from './mutation-types'

export default {

  search({commit}, searchName) {
    // 提交mutation: 更新状态(请求中)
    commit(REQUESTING)
    // 发送异步ajax请求获取数据
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        // 成功了, 提交mutation: 更新状态(成功)
        const users = response.data.items.map(item => ({
          url: item.html_url,
          avatarUrl: item.avatar_url,
          username: item.login
        }))
        commit(REQUEST_SUCCESS, {users})
      })
      .catch(error => {
        // 失败了, 提交mutation: 更新状态(失败)
        commit(REQUEST_ERROR, {msg: '请求失败'})
      })
  }
}