<template>
<div>
  <div>{{name}}</div>
  <div>{{html_url}}</div>
  <div>---------------------</div>
  <div>{{information}}</div>
</div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        name: "gavin",
        html_url:"",
        information:""

      }
    },
    mounted() {
      const url = `https://api.github.com/users/xunyegege`;
      axios.get(url).then(response => {
        console.log(response)
        //这边的 object 返回的是对象
        this.name=response.data.login;
        this.html_url=response.data.html_url;
        this.information=response.data;
      }).catch(error=>{
        alert(error.message)
      })



    }


  }
</script>

<style>


</style>