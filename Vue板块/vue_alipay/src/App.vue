<template>
  <div id="app">

    <form :action="url">


      <button type="submit">表单支付</button>
    </form>
    <button @click="pay">支付</button>
   
  <div v-html="ali">

    
  </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      ali: "",
      url:"http://localhost:8080/alipay/pay"
    };
  },
  methods: {
    pay: function() {
      axios({
        method: "post",
        url: "http://localhost:8080/alipay/pay"
      }).then(result => {
        console.log(result.data);
         this.ali=result.data
       // eval(result.data);

      });
    }
  }
};
</script>

<style>
</style>
