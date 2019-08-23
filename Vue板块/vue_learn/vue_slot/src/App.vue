<template>
  <div id="app">

    <HelloWorld >
      <div slot="slotTest">

         <span>这个是调用占位符1</span><br />
      
        
      </div>
      <div slot="slotTest2"></div>
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
