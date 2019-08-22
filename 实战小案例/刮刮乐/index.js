window.onload = function(){
	var canvas = document.getElementById("canvas");   //绘图区域
    var ctx = canvas.getContext("2d");  //内建的html5对象，拥有各种绘图的方法
    //ctx.lineWidth = 5;  //线宽
    //ctx.strokeStyle='blue';  //颜色
    //ctx.moveTo(0,0);   //坐标点
    //ctx.lineTo(100,100); 
    //ctx.lineTo(200,100); 
    //执行画线
    //ctx.stroke();
    // canvas.onmousemove = function(e){    //event对象 
    //     ctx.lineTo(e.clientX,e.clientY);    //e.clientX 当前事件触发时，鼠标指针与X轴坐标
    //     ctx.stroke();
    // };
    //ctx.rect(x,y,w,h);
    ctx.rect(0,0,300,150);   //strokeRect()   空心  只有边框    fillRect()  实心
    ctx.fillStyle='#f60';
    ctx.fill();
    //按下事件
    canvas.onmousedown = function(){
        canvas.onmousemove = function(e){    //event对象 
            //清除
            ctx.clearRect(e.clientX,e.clientY,10,10);
        };
    };
    //松开
    canvas.onmouseup = function(){
        canvas.onmousemove = null;   //清除事件
    };
    //中奖信息
    var arr = ['一个亿','一等奖','二等奖','三等奖','四等奖','谢谢惠顾'];
    var prize = document.querySelector(".prize");
    //随机获取    Math.random() 0-1之间  但不包含0/1  0.0001-0.99999
    //0.9 *6 = 5.4   取整    5
    var i = parseInt(Math.random()*arr.length);
    console.log(i);
    if(i==0){
        i=5;
    };
    prize.innerText = arr[i];  //0-5
}