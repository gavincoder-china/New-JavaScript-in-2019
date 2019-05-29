function createBannerArea(areaDom, options) {
    if (!options || options.length === 0) {
        return;
    }
    //1. 定义变量
    var imgArea = document.createElement("div"); //装图片的div
    var numberArea = document.createElement("div"); //装角标的div
    var curIndex = 0; //当前显示的索引
    var duration = 500; //完成变化的总毫秒数
    var timer = null; //完成变化的计时器
    var fps = 60; //fps帧数
    var autoTimer = null; //自动变化计时器
    var autoRate = 3000; //自动变化间隔
    //2. 初始化：

    //2.1 初始化areaDom
    areaDom.innerHTML = "";
    areaDom.appendChild(imgArea);
    areaDom.appendChild(numberArea);
    //2.2 初始化图片区域
    createImgArea();
    //2.3 初始化角标区域
    createNumberArea();
    //2.4 设置显示状态
    show(0);

    //3. 自动变化
    autoChange();
    areaDom.addEventListener("mouseenter", function(){
        clearInterval(autoTimer);
        autoTimer = null;
    })

    areaDom.addEventListener("mouseleave", function(){
        autoChange();
    })

    //函数区

    //创建图片区域
    function createImgArea() {
        imgArea.style.width = "100%";
        imgArea.style.height = "100%";
        imgArea.style.display = "flex";
        imgArea.style.overflow = "hidden";
        for (let item of options) {
            var img = document.createElement("img");
            img.src = item.imgUrl;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.display = "block";
            img.style.marginLeft = "0%";
            img.style.cursor = "pointer";
            img.addEventListener("click", function(){
                if(item.link){
                    location.href = item.link;
                }
            })
            imgArea.appendChild(img);
        }
    }

    //创建数字区域
    function createNumberArea() {
        numberArea.style.textAlign = "center";
        numberArea.style.marginTop = "-30px";
        for (var i = 0; i < options.length; i++) {
            var span = document.createElement("span")
            span.style.display = "inline-block";
            span.style.width = "12px"
            span.style.height = "12px"
            span.style.background = "lightgray"
            span.style.cursor = "pointer";
            span.style.borderRadius = "50%";
            span.style.margin = "0 5px";
            (function (index) {
                span.addEventListener("click", function () {
                    show(index);
                })
            })(i)
            numberArea.appendChild(span);
        }
    }

    //根据指定的索引，设置显示状态
    function show(newIndex) {
        curIndex = newIndex;
        for (let i = 0; i < numberArea.children.length; i++) {
            const element = numberArea.children[i];
            if (i === curIndex) {
                element.style.background = "#be926f";
            }
            else {
                element.style.background = "lightgray";
            }
        }
        var targetMarginLeft = curIndex * -100;
        var curMarginLeft = parseInt(imgArea.children[0].style.marginLeft);
        var dec = targetMarginLeft - curMarginLeft;
        if (dec === 0) {
            return;
        }
        if (timer) {
            clearInterval(timer);
        }
        var heartRate = 1000 / fps;
        var distance = dec * heartRate / duration;
        timer = setInterval(function () {
            curMarginLeft += distance;
            imgArea.children[0].style.marginLeft = curMarginLeft + "%";
            if (Math.abs(targetMarginLeft - curMarginLeft) < 1) {
                clearInterval(timer)
                timer = null;
                imgArea.children[0].style.marginLeft = targetMarginLeft + "%";
            }
        }, heartRate);
    }

    function autoChange(){
        if(autoTimer){
            return;
        }
        autoTimer = setInterval(function () {
            if (curIndex === options.length - 1) {
                show(0);
            }
            else {
                show(curIndex + 1);
            }
        }, autoRate)
    }
}