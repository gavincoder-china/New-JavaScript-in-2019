<template>
    <li>
        <label>
<!--            //这边控制 checkbox 的属性来实现会否删除等-->

            <input type="checkbox" v-model="item.IsDown" @change="ff()" />



            &nbsp;&nbsp;  &nbsp; <span :class="{banned:item.IsDown}">   {{item.content}}</span>
        </label>
        <button class="btn btn-warning" @click="deleteThing">删除</button>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        data(){
            return{
              // status:this.item.IsDown
            }
        },
       props:{
           index:Number,
           item:Object,
           deleteTodo:Function,
           //这个bool 值 控制是否有删除线
           showDeleLine:Boolean,
           finishedNumCount:Function

       },
        methods:{
            deleteThing(){
               const {index,deleteTodo}=this;
                if(window.confirm("您确定要删除该计划吗?")){
                   deleteTodo(index)

                }


            },
            //@change 可以解决 click 事件在 v-model 未渲染前就触发的问题
            ff(){
                this.finishedNumCount()
            }

        }


    }
</script>

<style scoped>
.banned{
    text-decoration:line-through;
    color:red;
}
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        /*display: none;*/
        margin-top: 3px;
        color: #fff;
        background-color: #F5B240;
        border: 1px solid #F5B240;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

</style>