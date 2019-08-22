$(function(){
    $(window).scroll(function(){
        //滚动条与顶部距离 
        var scrollTop = Math.ceil($(this).scrollTop());   //299.1432  向上取整
        //页面可视的高度
        var h = $(this).height();
        //当前页面的总高度
        var _h = $(document).height();
        if(scrollTop + h >= _h ){   //触 底
            console.log('ok')
            getImg();
        };
    });
    getImg();
});
function getImg(){
    //发送请求，加载数据
    $.ajax({
        type:'get',   //请求类型     get   post put   delete
        url:'http://127.0.0.1:3333/home',    //接口文档
        dataType:'json', //返回值 类型
        success:function(res){   //res 获取数据
            console.log(res);
            //请求10条
            var data = res.slice(0,10);  
            $.each(data,function(index,item){
                // $(".index-main ul").append('<li class="lists">'+
                //    ' <img src="'+item.product_img_url+'" width="150" height="150">'+
                //     '<label>'+
                //         '<b class="discount">'+item.product_uprice+'</b>'+
                //         '<span class="price-text">'+item.product_price+'</span> '+
                //     '</label>   '+        
                // '</li>')
                // ES6 模板字符串
                 $(".index-main ul").append(`<li class="lists">
                    <img data-original="${item.product_img_url}" src="img/loading.gif" width="150" height="150">
                    <label>
                        <b class="discount">${item.product_uprice}</b>
                        <span class="price-text">${item.product_price}</span> 
                    </label>            
                </li>`);
            });
            //懒加载
            $(".index-main ul img").lazyload({
                effect:'fadeIn'    //淡入淡出
            });
        },
        error:function(error){
            console.log(error)
        }
    });
}