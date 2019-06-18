<template>
  <div id="app">

    <HelloWorld msg="Welcome to Your Vue.js App"  :test="test" />
    <input type="text" v-model="testPub">
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      test:"hello test prop",
      testPub:''
    }
  },

  mounted() {
    // 订阅输入的搜索的消息   pubsub 前一个参数是发送方设置的名称  后面两个参数,第一个 msg 没啥用,第二个才是真实数据

    PubSub.subscribe("test",(msg,testPubsub)=>{
      this.testPub=testPubsub;
    })

  }
}
</script>

<style>

</style>
