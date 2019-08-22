window.onload = function(){
    new Vue({
        el:"#my",
        data:{
            cur:2,
            cur2:0,
            title:['标题A','标题B','标题C'],
            content:['内容A','内容B','内容C'],
            lists:[{title:'首页',content:'秒杀信息'},
                {title:'新闻',content:'限时活动'},
                {title:'详情页',content:'详情页'},
                {title:'展示页',content:'展示页'}],
            tabLists:[]
        },
        methods:{   //方法
            action:function(n){
                this.cur = n;
            },
            getList:function(){
                var self = this;
                axios({
                    method:'get',  //get post put delete
                    url:'http://localhost:3333/get_tablist'
                }).then(function(res){
                    console.log(res);
                    if(res.data.code =='200'){
                        if(res.data.result && res.data.result.length>0){
                            console.log('ok');
                             self.tabLists = res.data.result;
                        }
                    }
                }).catch(function(error){
                    console.log(error);
                })
            }
        },
        mounted:function(){   //生命周期  钩子函数  挂载完成
            this.getList();
        }
    })
}
