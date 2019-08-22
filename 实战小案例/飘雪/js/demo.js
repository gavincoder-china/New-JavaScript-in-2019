/// <reference path="_references.js" />
var minSize = 5;
var maxSize = 50;
var newOn = 400;
var flakeColor = "#fff";
var $flake = $("<div></div>").css("position", "absolute").html("❄");
//var $flake = $("<div></div>").css("position", "absolute").html('<img src="image/11.jpg">');
$(function () {
    var documentWidth = $(document).width();
    var documentHight = $(document).height();
    setInterval(function () {
        var startPositionLeft = Math.random() * documentWidth;//产生雪片一开始的随机的left
        var startOpacity = 0.7 + Math.random();//产生雪片一开始的透明度
        var endPositionLeft = Math.random() * documentWidth;//产生雪片下落后的随机的left
        var durationFall = documentHight * 10 + Math.random() * 3000;//产生一个雪片下落的随机的时间
        var sizeFlake = minSize + Math.random() * maxSize;//产生随机大小的雪片
       // $flake.find("img").css("width", 100 + Math.random() * 100);
        $flake.clone().appendTo("body").css({
            "left": startPositionLeft,
            "opacity": startOpacity,
            "font-size": sizeFlake,
            "color": flakeColor,
            "top":"-50px"
        }).animate({
            "top": documentHight,
            "left": endPositionLeft,
            "opacity": 0.5
        }, durationFall, function () {
            $(this).remove();
        });
    }, newOn);

    $(".ig").eq(0).siblings().hide();
    var i = 0;
    setInterval(function () {
        i++;
        if (i == 6)
        {
            i = 0;
        }
        $(".ig").eq(i).show();
        $(".ig").eq(i).siblings().hide();
    }, 3000);
});