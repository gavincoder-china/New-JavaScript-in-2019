<template>
  <div>
    <p>{{$store.state.num}}</p>
    <button @click="increase">加</button>
    <button @click="decrease">减</button>
  </div>
</template>
<script>
export default {
  
methods: {
  
increase:function(){
this.$store.dispatch("increase");

},
decrease:function(){
this.$store.dispatch("decrease");
}

},

}



</script>
<style>
</style>
