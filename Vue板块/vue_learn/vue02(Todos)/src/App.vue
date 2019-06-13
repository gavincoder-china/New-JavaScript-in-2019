<template>

    <div class="todo-container">
        <div class="todo-wrap">
            <!--//头部需要个 add 方法-->
            <TodoHeader :addTodo="addTodo"/>
            <!--            //list 部分需要个数组对象-->
            <TodoList :things="things" :deleteTodo="deleteTodo" :finishedNumCount="finishedNumCount"/>
            <!--            //底部需要个删除方法-->
            <TodoFooter :things="things" :finishedNum="finishedNum" :deleteFinished="deleteFinished" :selectAll="selectAll"/>


        </div>
    </div>

</template>
<script>
    import TodoHeader from "./components/TodoHeader";
    import TodoFooter from "./components/TodoFooter";
    import TodoList from "./components/TodoList";

    export default {
        components: {
            TodoHeader,
            TodoFooter,
            TodoList
        },
        data() {
            return {
                //计划内容的数组
                things: [{
                    content: "今天写好 vue 代码",
                    //这个判断是否被选择
                    IsDown: false
                }],
                finishedNum: 0,


            }
        },
        methods: {
            addTodo(thing) {
                //把新添的事情放在头部
                this.things.unshift(thing);
            },
            deleteTodo(index) {
                this.things.splice(index, 1);
            },

            finishedNumCount() {

                let count = 0;
                for (let i = 0, len = this.things.length; i < len; i++) {

                    if (this.things[i].IsDown) {
                        count++;
                    }

                }
                this.finishedNum = count;


            },
            deleteFinished() {
                //遍历数组es6 方法
                // for (let i = 0, len = this.things.length; i < len; i++) {
                //     if (this.things[i].IsDown) {
                //         console.log(`删除${this.things[i].content}`)
                //         //这边会导致一个问题,就是删除时数组长度变化了,原来下标处没东西了
                //         this.things.splice(i, 1)
                //
                //     }
                //
                // }

                //我们尝试下取出合规的内容,组成新的数组
                let arr = [];
                for (let i = 0, len = this.things.length; i < len; i++) {
                    if (!this.things[i].IsDown) {
                        arr.push(this.things[i]);
                    }

                }
                this.things = arr;
                this.finishedNumCount()
            },
            //全选或者全取消 status是选中状态
            //为了让删除后的状态栏解除勾选状态
            selectAll(status){
                if(status){
                    for (let i = 0, len = this.things.length; i < len; i++) {
                        this.things[i].IsDown=true

                    }
                }else{
                    for (let i = 0, len = this.things.length; i < len; i++) {
                        this.things[i].IsDown=false

                    }
                }
                this.finishedNumCount()
            }

        },


    }
</script>

<style>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>