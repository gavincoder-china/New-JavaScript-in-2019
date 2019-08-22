/// <reference path="_references.js" />
$(function () {
    var $bird = $("#bird");
    var pos = $bird.offset();
    var birdSize = { width: $bird.width(), height: $bird.height() };//小鸟图片的尺寸
    var speed = 10;
    var keyrecord = 39;
    $(document).keydown(function (event) {
        var key = event.keyCode;
        if (keyrecord != key) {
            $bird.removeClass().addClass('direction-' + key)
        }
        keyrecord = key;
        switch (key) {
            case 37://左
                pos.left -= speed;
                if (pos.left <= -birdSize.width) {
                    pos.left = $(window).width();
                }
                break;
            case 38://上
                pos.top -= speed;
                if (pos.top <= -birdSize.height) {
                    pos.top = $(window).height();
                }
                break;
            case 39://右
                pos.left += speed;
                if (pos.left >= $(window).width()) {
                    pos.left = -birdSize.width;
                }
                break;
            case 40://下
                pos.top += speed;
                if (pos.top >= $(window).height()) {
                    pos.top = -birdSize.height;
                }
                break;
        }
        $bird.offset(pos);
    });
});