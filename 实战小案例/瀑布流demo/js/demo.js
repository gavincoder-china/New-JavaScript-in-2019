//$(function(){   //  $(document).ready(function(){})
$(window).on('load',function(){
    var allBox = $("#main .box");
    var boxWidth = allBox.outerWidth();   //一个盒子的宽度
    var screenWidth = $(window).width();   //可见区域的宽
    var cols = parseInt(screenWidth/boxWidth);  //列数
    var heightArr = [];//获取高度
    //遍历  for    forEach()
    $.each(allBox,function(index,item){
        var boxHeight = $(item).outerHeight();  //每张图片高度
        if(index < cols) {
            heightArr[index] = boxHeight;//var arr=[]; arr[0]=1;arr[1]=2;
        }else {
            //最小的高度  var arr = [100,120,200]    apply()
            var minBoxHeight = Math.min.apply(Math.min,heightArr);
            //最小高度的索引 $.inArray(value,arr)数组中查找指定值 并返回它的索引（没有找到会返回-1）
            var minHeightIndex = $.inArray(minBoxHeight,heightArr);
            $(item).css({
                position:'absolute',
                left:minHeightIndex*boxWidth+'px',
                top:minBoxHeight +'px'
            });
            //最小高度更新
            heightArr[minHeightIndex] += boxHeight;
        }
    })
})
//outerWidth() //不包含margin
//innerWidth()//不包含margin border
//width()   //不包含padding margin border