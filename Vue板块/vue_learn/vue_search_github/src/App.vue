<template>
  <div id="app">
    <div class="container">
      <Search/>
      <users-main/>
    </div>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Main from './components/Main.vue'

  export default{
    components:{
      Search,
      // 内部定义的关键词名称 不可以使用 所以赋值一个名 字
      UsersMain:Main

    }
  };
</script>

<style type="stylus">

</style>