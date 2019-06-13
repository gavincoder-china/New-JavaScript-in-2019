<template>
    <ul class="todo-main" >
       <TodoItem  v-for="(item,index) in things" :key="index"  :item="item"  :deleteTodo="deleteTodo"
                  :index="index" :finishedNumCount="finishedNumCount" />
    </ul>

</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        components:{
            TodoItem
        },
        props:["things","deleteTodo","finishedNum","finishedNumCount"],

    }
</script>

<style scoped>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>