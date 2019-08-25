<template>
  <div>
    <p>{{$store.state.num}}</p>
    <button @click="increase(1)">加</button>
    <button @click="decrease">减</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState(["num"])
  },

  methods: {
    ...mapActions(["increase", "decrease"])
  }
};
</script>

<style>
</style>
