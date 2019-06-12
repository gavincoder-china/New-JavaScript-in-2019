<template>
    <li class="list-group-item">
        <div class="handle">
            <a href="javascript:;" @click="deleteItem">删除</a>
        </div>
        <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
        <p class="centence">{{comment.comment}}</p>
    </li>
</template>

<script>
    export default {
        name: "Item",
        props:{
            //指定属性名以及属性类型
            comment:Object,
            deleteComment:Function,
            index:Number
        },
        methods:{
            //这边需要来自 App 的删除方法
            deleteItem(){
                const {comment,deleteComment,index}=this
                if (window.confirm(`确定要删除${comment.name}的评论吗?`)){
                    deleteComment(index)
                }

            }
        }


    }
</script>

<style scoped>
    li {
        transition: .5s;
        overflow: hidden;
    }

    .handle {
        width: 40px;
        border: 1px solid #ccc;
        background: #fff;
        position: absolute;
        right: 10px;
        top: 1px;
        text-align: center;
    }

    .handle a {
        display: block;
        text-decoration: none;
    }

    .list-group-item .centence {
        padding: 0px 50px;
    }

    .user {
        font-size: 22px;
    }
</style>