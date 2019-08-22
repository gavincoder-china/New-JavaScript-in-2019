window.onload = function () {
    init();
}
var gameGround;
// 存放蛇头蛇身的对象
var SquareType = {
    HEAD: { value: 0, url: './img/head1.png' },
    BODY: { value: 1, url: './img/body1.png' }
};
// 存放蛇元素的数组
var snake = [];
// 存放食物的数组
var props = [];
// 行列数
var groundWidth = 20;
var groundHeight = 20;

// 一个格子宽高
var squareWidth = 30;
// 设置运动定时器
var timer;
// 设置锁 每次只能一个方向改变
var block = true;

// 记录运动方向及蛇头旋转角度
var SnakeToward = {
    UP: { rotate: 270, x: 0, y: -squareWidth },
    RIGHT: { rotate: 0, x: squareWidth, y: 0 },
    DOWN: { rotate: 90, x: 0, y: squareWidth },
    LEFT: { rotate: 180, x: -squareWidth, y: 0 }
};
// 默认为右方向运动
var nowToward = SnakeToward.RIGHT;
// 最大的食物生成数
// var maxPropNum = 2;

// 记分
var score = 0;
var stepTime = 350;
// 生成食物对象存放的数组
var PropTypeSet = [
    // 苹果
    {
        name: "APPLE",
        value: 2,
        url: "./img/pingguo.png",
        maxNum: 2,
        action: function () {
            var temp = createSquare(this.row, this.col, SquareType.HEAD);
            snake.unshift(temp);
            renderSquare(snake[1], SquareType.BODY);
            gameGround.removeChild(this.el);
            props.splice(props.indexOf(this), 1);
            score += 10;
        },
        maxCtrl: function () {
            return this.maxNum;
        }
    },
    // 地雷 
    {
        name: "BOMB",
        value: 3,
        url: "./img/bomb.png",
        maxNum: 1,
        action: function () {
            clearTimeout(timer);
            timer = null;
            alert("游戏结束");
            return;
        },
        maxCtrl: function () {
            return Math.floor(score / 100) + 2;
        }
    },
    {
        name: "BOLUO",
        value: 4,
        url: "./img/boluo.png",
        maxNum: 2,
        action: function () {
            var temp = createSquare(this.row, this.col, SquareType.HEAD);
            snake.unshift(temp);
            renderSquare(snake[1], SquareType.BODY);
            gameGround.removeChild(this.el);
            props.splice(props.indexOf(this), 1);
            score += 15;
        },
        maxCtrl: function () {
            return this.maxNum;
        }
    },
];

// 构造函数
function Prop(row, col, type) {
    this.type = type;
    this.row = row;
    this.col = col;
    this.url = type.url;
    this.action = type.action;
    this.el = null;
    this.init = function () {
        this.el = createSquare(this.row, this.col, this.type);
    };
}

function existsProp(row, col) {
    for (var i = 0; i < props.length; i++) {
        if (props[i].row == row && props[i].col == col) {
            return true;
        }
    }
    return false;
}

function randGenerateProp() {
    for (var i = 0; i < PropTypeSet.length; i++) {
        var nowLen = props.filter(function (item) {
            if (item.type.value == PropTypeSet[i].value) {
                return item;
            }
        }).length;
        if (nowLen < PropTypeSet[i].maxNum) {
            var row, col;
            do {
                row = Math.floor(Math.random() * groundHeight);
                col = Math.floor(Math.random() * groundWidth);
            } while (existsProp(row, col));
            var prop = new Prop(row, col, PropTypeSet[i]);
            prop.init();
            props.push(prop);
        }
    }
}


// 初始化函数
function init() {
    gameGround = document.getElementById('gameGround');
    // 创建蛇
    createSnack();
    // 运动
    run();
    // 键盘按下事件
    document.onkeydown = function (e) {
        // console.log(e.keyCode)
        // changeToward(e.code);
        changeToward(e.keyCode);
    }
}
// 创建蛇
function createSnack() {
    // 创建蛇头 蛇身
    var head = createSquare(0, 3, SquareType.HEAD);
    var body1 = createSquare(0, 2, SquareType.BODY);
    var body2 = createSquare(0, 1, SquareType.BODY);
    var body3 = createSquare(0, 0, SquareType.BODY);
    // 将创建存放在snake数组中
    snake.push(head, body1, body2, body3);
}

// 具体根据传参创建每一部分
function createSquare(row, col, type) {
    var square = document.createElement('div');
    square.classList.add('square');
    // 确定当前小方块位置
    square.style.left = col * squareWidth + 'px';
    square.style.top = row * squareWidth + 'px';
    renderSquare(square, type);
    // 插入元素
    gameGround.appendChild(square);
    return square;
}

// 展示元素
function renderSquare(square, type) {
    square.typeValue = type.value;
    square.style.backgroundImage = "url(" + type.url + ")";
    // 根据键盘上下左右旋转蛇头  
    square.style.transform = "rotate(" + nowToward.rotate + "deg)";
}
// 运动并且根据返回值判断游戏是否结束
function run() {
    clearTimeout(timer);
    stepTime = 350 - Math.min(Math.floor(score / 100) * 50, 270);
    timer = setTimeout(function () {
        // 判断游戏是否结束
        var flag = checkCrash();
        // 游戏结束
        if (flag.result == -1) {
            clearTimeout(timer);
            timer = null;
            alert('游戏结束');
            return;
        } else if (flag.result == 1) {
            flag.target.action();
            block = true;
            document.getElementsByClassName('score')[0].innerHTML = score;
            // 继续向当前方向移动

        } else {
            move();
            randGenerateProp();
            block = true;
        }
        // PropTypeSet[1].maxNum = score % 100;
        for (var i = 0; i < PropTypeSet.length; i++) {
            PropTypeSet[i].maxNum = PropTypeSet[i].maxCtrl();
        };
        if (timer != null){
            run();
        }
    }, stepTime);
}

// 向前移动函数
function move() {
    // pop删除并返回数组最后一个 
    // unshift 在数组首位添加元素
    // 先将第一位变成蛇身
    renderSquare(snake[0], SquareType.BODY);
    var temp = snake.pop();
    // 最后一位放到第一位作为蛇头 根据当前运动方向确定位置
    temp.style.left = snake[0].offsetLeft + nowToward.x + 'px';
    temp.style.top = snake[0].offsetTop + nowToward.y + 'px';

    // 将最后一位放到最前面 并且将第一位的样式设置为蛇头
    snake.unshift(temp);
    renderSquare(snake[0], SquareType.HEAD);
}
// 根据鼠标按下按键改变蛇运动方向
function changeToward(code) {
    // console.log(code)
    if (!block) {
        return;
    }
    block = false;
    // &  位运算  按位与
    if (code == 40 && (SnakeToward.DOWN.x & nowToward.x) == 0 && (SnakeToward.DOWN.y & nowToward.y) == 0) {
        // 改变记录当前运动方向的值
        nowToward = SnakeToward.DOWN;
    } else if (code == 38 && (SnakeToward.UP.x & nowToward.x) == 0 && (SnakeToward.UP.y & nowToward.y) == 0) {
        nowToward = SnakeToward.UP;
    } else if (code == 37 && (SnakeToward.LEFT.x & nowToward.x) == 0 && (SnakeToward.LEFT.y & nowToward.y) == 0) {
        nowToward = SnakeToward.LEFT;
    } else if (code == 39 && (SnakeToward.RIGHT.x & nowToward.x) == 0 && (SnakeToward.RIGHT.y & nowToward.y) == 0) {
        nowToward = SnakeToward.RIGHT;
    }
}
// 判断游戏是否结束的函数
function checkCrash() {
    // 水平撞到边界
    // 右边
    if (snake[0].offsetLeft + nowToward.x + squareWidth > gameGround.clientWidth ||
        // 左边
        snake[0].offsetLeft + nowToward.x < 0) {
        return { result: -1, target: null };
        // 竖直撞到边界
        // 下
    } else if (snake[0].offsetTop + nowToward.y + squareWidth > gameGround.clientHeight ||
        // 上
        snake[0].offsetTop + nowToward.y < 0) {
        return { result: -1, target: null };
    } else {
        // 撞到自己身体
        for (var i = 3; i < snake.length - 1; i++) {
            if (snake[0].offsetLeft + nowToward.x == snake[i].offsetLeft &&
                snake[0].offsetTop + nowToward.y == snake[i].offsetTop) {
                return { result: -1, target: null };
            }
        }
        // 碰撞道具
        for (var i = 0; i < props.length; i++) {
            if (snake[0].offsetLeft + nowToward.x == props[i].el.offsetLeft &&
                snake[0].offsetTop + nowToward.y == props[i].el.offsetTop) {
                return { result: 1, target: props[i] };
            }
        }
    }
    return 0;
}