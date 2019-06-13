<template>


    <div>
        <!-- //头部-->
        <header class="site-header jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>请发表对Vue的评论</h1>
                    </div>
                </div>
            </div>
        </header>
        <!-- //add 框-->
        <div class="container">
            <!-- //add-->
            <Add :addComment="addComment"/>
            <!--  //list-->
            <List :comments="comments" :deleteComment="deleteComment"/>


        </div>
    </div>

</template>
<script>
    import Add from './components/Add';
    import List from './components/List';

    export default {
        components: {
            Add,
            List
        },
        data() {
            return {
              //数据在哪里,就在那里写方法(这边指的是 add 内容,该数据在这,所以就在这写方法)
                comments: [
                    {
                        name: "gavin",
                        comment: "vue 不错"
                    },
                    {
                        name: "betty",
                        comment: "vue 很棒"
                    }, {
                        name: "mary"
                        , comment: "vue 是未来的主流"
                    }
                ]
            }
        },
      methods:{
          //方法写好后要传给 Add 组件
          addComment(content){
            this.comments.unshift(content)
          },
        //这个是删除方法
        deleteComment(index){
            this.comments.splice(index,1)
        }
      }

    }
</script>

<style>

</style>