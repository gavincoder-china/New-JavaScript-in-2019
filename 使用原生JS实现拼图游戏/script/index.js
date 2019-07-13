/**
 * 配置
 */
var config = {
    width: 500,
    height: 500,
    img: "./img/lol.png",
    gameDom: document.getElementById("game"),
    row: 3, //3行
    col: 3  //3列
}

//经过计算的一些数据
var computed = {
    num: config.col * config.row, //方块数量
    w: config.width / config.col, //每个小方块的宽度
    h: config.height / config.row //每个小方块的高度
}
//方块对象的数组，每个对象中记录了方块的正确坐标、当前坐标、dom元素、以及一些实用方法
var blocks;

/**
 * 为全局变量blocks赋值
 */
function setBlocks() {
    blocks = [];
    var points = getPointsArray(); //该数组用于设置每个方块的正确坐标
    var shuffledPoints = [...points]; //复制后的数组用于在洗牌后设置方块的当前坐标
    shuffle(shuffledPoints);//洗牌
    for (var i = 0; i < points.length; i++) {
        const point = points[i];
        //创建方块对象
        var b = {
            left: point.left,
            top: point.top,
            curLeft: shuffledPoints[i].left,
            curTop: shuffledPoints[i].top,
            dom: document.createElement("div"),
            update() {
                this.dom.style.transition = "all .5s";
                this.dom.style.left = this.curLeft + "px";
                this.dom.style.top = this.curTop + "px";
            },
            isCorrect() {
                return this.curTop === this.top && this.curLeft === this.left;
            },
            isEmpty: i === points.length - 1 //是否应该是空白方块
        }
        b.dom.style.width = computed.w + "px";
        b.dom.style.height = computed.h + "px";
        b.dom.style.position = "absolute";
        b.dom.style.border = "1px solid #fff";
        b.dom.style.boxSizing = "border-box";
        b.dom.style.background = `url("${config.img}")`;
        b.dom.style.cursor = "pointer";
        b.dom.style.backgroundPosition = `-${b.left}px -${b.top}px`;
        b.dom.block = b;
        b.dom.onclick = function () {
            switchBlock(this.block);
        }
        b.update();
        blocks.push(b);
    }
}

/**
 * 生成游戏
 */
function generateGame() {
    config.gameDom.style.width = config.width + "px";
    config.gameDom.style.height = config.height + "px";
    config.gameDom.style.border = "2px solid #8c8c8c";
    config.gameDom.innerHTML = ""; //清空区域
    for (const item of blocks) {
        if (!item.isEmpty) {
            config.gameDom.appendChild(item.dom);
        }
    }
}

/**
 * 获得所有方块的可取到的坐标数组
 */
function getPointsArray() {
    var arr = [];
    for (var i = 0; i < computed.num; i++) {
        arr.push({
            left: (i % config.col) * computed.w,
            top: parseInt(i / config.col) * computed.h
        });
    }
    return arr;
}



/**
 * 将某个block对象的坐标，与空坐标交换
 * @param {*} block 
 */
function switchBlock(block) {
    //找到空坐标
    var emptyBlock = blocks.find(b=>b.isEmpty);
    //判断是否相邻
    if(Math.abs(block.curLeft - emptyBlock.curLeft) + 
    Math.abs(block.curTop - emptyBlock.curTop) !== computed.w){
        return;
    }
    //交换
    var bLeft = block.curLeft;
    var bTop = block.curTop;
    block.curLeft = emptyBlock.curLeft;
    block.curTop = emptyBlock.curTop;
    emptyBlock.curLeft = bLeft;
    emptyBlock.curTop = bTop;
    block.update();
    emptyBlock.update();
    if(isWin()){
        setTimeout(() => {
            alert("游戏胜利")
        }, 500);
    }
}

/**
 * 数组洗牌
 * @param {*} arr 
 */
function shuffle(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var targetIndex = getRandom(0, arr.length - 1);
        var temp = arr[i];
        arr[i] = arr[targetIndex];
        arr[targetIndex] = temp;
    }
}

function getRandom(min, max) {
    var dec = max - min;
    return Math.floor(Math.random() * dec + min);
}

/**
 * 游戏是否胜利
 */
function isWin() {
    for (const b of blocks) {
        if (!b.isCorrect()) {
            return false;
        }
    }
    return true;
}

setBlocks();
generateGame();