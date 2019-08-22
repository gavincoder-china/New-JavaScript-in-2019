function init() {
    bindEvent();
}
init();
function bindEvent() {
    var oBox = document.getElementsByClassName('box')[0];
    var move = document.getElementsByClassName('move')[0];
    var mul = 2;
    var w = parseInt(window.getComputedStyle(move).width);
    var h = parseInt(window.getComputedStyle(move).height);
    var boxW = oBox.offsetWidth;
    var boxH = oBox.offsetHeight;

    oBox.onmouseenter = function (e) {
        var l = e.clientX - oBox.offsetLeft - w / 2;
        var t = e.clientY - oBox.offsetTop - h / 2;
        move.style.display = 'block';
        move.style.left = l + 'px';
        move.style.top = t + 'px';

        oBox.onmousemove = function (e) {
            var l = e.clientX - oBox.offsetLeft;
            var t = e.clientY - oBox.offsetTop;
            move.style.display = 'block';
            move.style.left = l - w / 2 + 'px';
            move.style.top = t - h / 2 + 'px';
            move.style.backgroundSize = boxW * 2 + 'px' + ' ' + boxH * 2 + 'px';
            move.style.backgroundPositionX = - (l * mul - w / 2) + 'px';
            move.style.backgroundPositionY = - (t * mul - h / 2) + 'px';
            // 超出边界显示消失
            if (t < 0 || l < 0 || l > 400 || t > 300) {
                move.style.display = 'none';
            }
        }
    };
}