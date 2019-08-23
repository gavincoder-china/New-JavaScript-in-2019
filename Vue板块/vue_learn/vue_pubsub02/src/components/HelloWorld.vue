<template>
  <div class="hello">
  <h1>{{msg}}</h1>
  发送内容:<input type="text" value="" ref="input">
  <button @click="send"> send</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      "message":'zhebianmeishuju a '
    }
  },
  methods: {
    send:function(){
      var sss=this.$refs.input.value;
      console.log(sss);
     PubSub.publish("sign",sss);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
