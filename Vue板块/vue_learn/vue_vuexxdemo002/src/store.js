import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //这边是基本变量
    num: 99
  },
  mutations: {
    //这边是方法的真正实现
    INCREASE: function (state,data) {
      state.num++
      console.log("我是mutations"+data)
    },
    DECREASE: function (state) {
      state.num--
    }

  },
  actions: {
    //这边是方法的传达
    increase: function ({ commit },data) {
      commit("INCREASE",data)
      console.log(data)
    },
    decrease: function ({ commit }) {


      commit("DECREASE")
    }



  },
  getters: {
    //这边是计算属性


  }
})
