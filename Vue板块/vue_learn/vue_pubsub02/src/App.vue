<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    接收内容:<input  type="text" v-model="jieshou">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PubSub from "pubsub-js"
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      "jieshou":''
    }
  },
  mounted () {

    PubSub.subscribe("sign",(msg,sss)=>this.jieshou=sss)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
