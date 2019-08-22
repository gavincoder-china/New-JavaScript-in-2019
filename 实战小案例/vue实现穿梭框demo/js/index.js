window.onload = function(){
    new Vue({
        el:'#my',
        data:{
            itemsL:[{name:'上海1',check:false},
                    {name:'上海2',check:false},
                    {name:'上海3',check:true},
                    {name:'上海4',check:false},
                    {name:'上海5',check:false},
                    {name:'上海6',check:false},
                    {name:'上海7',check:false},
                    {name:'上海8',check:true},
                    {name:'上海9',check:false}],
            itemsR:[]
        },
        methods:{
            addR:function(){
                //filter  过滤处理  返回数组
                var checkL = this.filterData(this.itemsL,true);
                this.itemsR = [...this.itemsR,...checkL]; //扩展运算符 
                this.itemsL = this.filterData(this.itemsL,false);
            },
             addL:function(){
                //filter  过滤处理  返回数组
                var checkR = this.filterData(this.itemsR,true);
                this.itemsL = [...this.itemsL,...checkR]; //扩展运算符 
                this.itemsR = this.filterData(this.itemsR,false);
            },
            //公共方法
            filterData:function(data,type){
                return data.filter(function(v){
                    return v.check == type;
                });
            }
        }
    })
}

