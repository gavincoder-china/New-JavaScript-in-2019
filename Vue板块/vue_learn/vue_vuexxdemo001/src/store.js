import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {

num:10
}
const mutations = {
  INCREASE: function (state) {
    state.num++
  },
  DECREASE: function (state) {
    state.num--
  }

}
const actions = {

  increase: function ({ commit }) {
    console.log("increase");
    commit("INCREASE");
  },
  decrease: function ({ commit }) {
    console.log("decrease");
    commit("DECREASE");
  }
}
const getters = {


}



export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
