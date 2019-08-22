window.onload = function(){
    new Vue({
        el:'#my',  //挂载元素
        data:{    //数据
            items:[{
                name:'流行男鞋1',
                isSubShow:false,
                subItems:[
                    {name:'男鞋1-1'},
                    {name:'男鞋1-2'},
                    {name:'男鞋1-3'}
                    ]
                },
                    {
                name:'流行男鞋2',
                isSubShow:true,
                subItems:[
                    {name:'男鞋2-1'},
                    {name:'男鞋2-2'},
                    {name:'男鞋2-3'}
                    ]
                },
                    {
                name:'流行男鞋3',
                isSubShow:false,
                subItems:[
                    {name:'男鞋3-1'},
                    {name:'男鞋3-2'}
                    ]
                }]
        },
        methods:{   //方法
            curShow:function(item){
                // if(item.isSubShow){
                //     item.isSubShow = false;
                // }else {
                //     item.isSubShow = true;
                // };
                //三目运算
                //item.isSubShow ? item.isSubShow = false : item.isSubShow = true;
                //item.isSubShow = !item.isSubShow;
                // for(var i= 0;i<this.items.length;i++){
                //     this.items[i].isSubShow = false;
                // };
                this.items.forEach(function(v,i){
                    v.isSubShow = false;
                })
                item.isSubShow = true;
            }
        }
    })
}

