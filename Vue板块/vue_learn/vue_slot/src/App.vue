<template>
  <div id="app">

    <HelloWorld >
      <div slot="slotTest">

         <span>slot test 1</span><br />
         <span>slot test 2</span><br />
         slot test 3<br />
      </div>
<!--      <div slot="slotTest2"></div>-->


    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
