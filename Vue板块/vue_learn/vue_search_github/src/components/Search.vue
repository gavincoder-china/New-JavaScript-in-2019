<template>
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" placeholder="enter the name you search" v-model="searchName"/>
               &nbsp; <el-button type="primary" @click="search">Search</el-button>
<!--                <button @click="search">Search</button>-->
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">

    import PubSub from 'pubsub-js'
    export default{
        data(){
            return {
                searchName:''
            }
        },
        methods:{
            search(){
                const searchName = this.searchName.trim()
                if(searchName){
                    // 发布搜索的消息
                    PubSub.publish('search',searchName)
                }
            }
        }

    };
</script>
<!--scoped的作用：在style标签上添加scoped属性，以表示它的样式作用于当下的模块。-->
<style type="stylus" rel="stylesheet/stylus" scoped>
input{
    width:200px;
    height:50px;
    margin-right :20 px;
    border-radius :25px;
    outline-style :none;
}
</style>