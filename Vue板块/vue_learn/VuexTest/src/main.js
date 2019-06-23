/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'


// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})

/*
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>', // 指定需要渲染到页面的模板
  store
})*/