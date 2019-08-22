window.onload = function(){
    var vm = new Vue({
        el:'#my',
        data:{
            checkAll:{check:false,name:'全选123'},
            lists:[{check:true,name:'小米'},
                    {check:false,name:'华为1'},
                    {check:false,name:'华为2'},
                    {check:false,name:'华为3'},
                    {check:false,name:'华为4'},
                    {check:true,name:'华为5'},
                    {check:false,name:'华为6'}]
        },
        methods:{
            checkAllChange:function(){
                //第三种 局部提前定义this
                this.lists.forEach(item =>{  //item====this.lists[i]
                    item.check = this.checkAll.check
                });
            },
            curCheck:function(){
                //every()检测数组的元素是否符合 都符合返回true   反之
                this.checkAll.check = this.lists.every(function(item){
                    return item.check ;
                });
             }
        }
    })
}
