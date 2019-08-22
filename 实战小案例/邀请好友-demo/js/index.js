window.onload = function(){
    new Vue({
        el:'#my',
        data:{
            flag:'hide', 
            items:[{name:'张学友1',qq:'1243254',id:1},
                    {name:'张学友2',qq:'4554355',id:2},
                    {name:'张学友3',qq:'432256',id:3},
                    {name:'张学友4',qq:'35435',id:4},
                    {name:'张学友5',qq:'5436346',id:5},
                    {name:'张学友6',qq:'2643643',id:6},
                    {name:'张学友7',qq:'5435435',id:7},
                    {name:'张学友8',qq:'5345435',id:8},
                    {name:'张学友9',qq:'53624534',id:9},
                    {name:'张学友10',qq:'352264',id:10},
                    {name:'张学友11',qq:'2634646',id:11},
                    {name:'张学友12',qq:'5435435',id:12},
                    {name:'张学友13',qq:'5436632',id:13}],
            selectorItems:[]    //右侧选中的数据
        },
        methods:{
            addItem:function(item){   //item表示当前的元素
                //数据重复   id
                // for(var i = 0;i<this.selectorItems.length;i++){
                //     if(item.id == this.selectorItems[i].id) return;
                // };
                //filter()   返回是满足条件的数据，返回是数组
                var idRepeat = this.selectorItems.filter(function(v,i){
                    return v.id == item.id
                });
                if(idRepeat.length>0) return;
                this.selectorItems.push(item);
            },
            delItem:function(index){
                this.selectorItems.splice(index,1);
            }
        }
    })
}
// var arr = [1,2,4,7,8,9];   //大于4
// var a =arr.filter(function(v,i){    //v=1,2,4....
//     return v>4;    //条件
// });
// console.log(a)  //[7,8,9]
//a.length  ==3