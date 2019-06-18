<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{test}}</h2>
<button @click="send">传送</button>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    test:String
  },
  data(){
    return{
      testPubsub:"test pubsub"
    }
  },
  methods:{
    send(){
      // 发布搜索的消息,这边的数据需要加上 this
      PubSub.publish("test",this.testPubsub)
    }
  }
  // ,
  //不是在这个生命周期发布
  // mounted() {
  //   //发布信息
  //   PubSub.publish("test",testPubsub)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
