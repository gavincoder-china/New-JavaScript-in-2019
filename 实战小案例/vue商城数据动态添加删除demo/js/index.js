window.onload = function(){
    new Vue({
        el:"#my",
        data:{
            name:'123',
            lists:[{name:'手机',state:0},
                    {name:'ABC',state:1},
                    {name:'XYZ',state:2}]   //未采购   已采购
        },
        methods:{
            add:function(){
                if(this.name=='') return;
                //push() 追加尾部   unshift头部
                this.lists.unshift({name:this.name,state:'未采购'});
                this.name='';
            },
            del:function(index){
                this.lists.splice(index,1)   //(位置,个数)
            },
            getList:function(){   //请求后端的数据
                axios({
                    method:'get',
                    url:'http://localhost:3333/list'
                }).then((res)=>{   //res后端返回的数据 es6箭头函数
                    console.log(res)
                    if(res.data.code=='200'){
                        if(res.data.result && res.data.result.length>0){
                            this.lists = res.data.result;
                        }
                    }
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        mounted:function(){
            //this.getList();
        },
        filters:{   //过滤器
            stateFilter:function(type){   //name 自定义名称  公共   私有   type 过滤内容
                // if(type==0){
                //     return '未采购'
                // }else if(type==1) {
                //     return '已采购'
                // }
                switch(type){
                    case 0 :
                        return '未采购';
                    case 1 :
                        return '已采购';
                    case 2 :
                        return '采购中';  
                    default:
                         return '未采购';  
                }
            }
        }
    })
}
