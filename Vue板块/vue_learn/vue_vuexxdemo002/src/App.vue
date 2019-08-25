<template>
  <div>
    <p>{{num}}</p>
    <p>{{numType}}</p>
    <button @click="increase(1)">加</button>
    <button @click="decrease">减</button>
    <button @click="print">打印</button>
    <button @click="print02"  value="我是一个测试传值的标签">打印自身的value</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {
      //这个测试一下从state中获取值
      p1: this.$store.state.pp
    };
  },
  computed: {
    ...mapState(["num"]),
    ...mapGetters(["numType"])
  },

  methods: {
    ...mapActions(["increase", "decrease"]),
    print: function() {
      alert(this.p1);
    },
    print02:function(event) {
      //这边测试把数值传给vuex去管理
     var str=event.target.value;

     this.$store.dispatch('strUpdate',str)
    
    }
  }
};
</script>

<style>
</style>
