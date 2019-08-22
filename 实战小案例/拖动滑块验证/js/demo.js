window.onload = function(){
    //选择器封装
    function $(name){
        return document.querySelector(name);
    };  //函数申明
    //验证成功
    //验证失败
    //触发事件  onmousedown  onmousemove  onmouseup
    var btn = $(".btn");   //滑块   $(".btn");
    var box = $(".box"); 
    var text = $(".text"); //文字
    var bg = $(".bg"); //背景
    var flag = false; //默认值验证未成功
    btn.onmousedown = function(event){
        var downX = event.clientX;   //按下的X轴
        btn.onmousemove = function(event){
            //event.clientX
            var moveX = event.clientX -downX;   //移动的X轴 -按下的X轴
            //最小的移动范围
            if(moveX >0){
                this.style.left = moveX +'px';
                bg.style.width = moveX +'px';   //设置背景的宽度
                //最大的移动范围
                if(moveX >= box.offsetWidth - this.offsetWidth) {
                    //验证成功
                    flag = true;
                    //文字提醒
                    text.innerText = '通过验证';
                    text.style.color = '#fff';
                    //事件清除
                    this.onmousemove = null;
                    this.onmousedown = null;
                }
            }
        }
    };
    //松开
    btn.onmouseup = function(event){
        //事件清除
        this.onmousemove = null;
        //判断验证是否成功
        if(flag) return;
        this.style.left = 0;
        bg.style.width = 0;   //设置背景的宽度
    }
}