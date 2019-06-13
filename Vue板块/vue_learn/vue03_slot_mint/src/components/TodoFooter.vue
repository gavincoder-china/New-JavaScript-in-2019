<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="status" @change="selAll()"/>
        </label>
        <span>
          <span>已完成{{finishedNum}}</span> / 全部{{things.length}}
        </span>
        <button class="btn btn-danger" @click="changeSelectStatus">清除已完成任务</button>
    </div></template>

<script>
    export default {
        name: "TodoFooter",
        data(){
          return{
              status:false
          }
        },
        props:{
            things:Array,
            finishedNum:Number,
            deleteFinished:Function,
            selectAll:Function,

        },
        methods:{
          selAll(){

              this.selectAll(this.status);


          },
            changeSelectStatus(){

                this.deleteFinished();
                this.status=false;

            }

        }

    }
</script>

<style scoped>

    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }

</style>