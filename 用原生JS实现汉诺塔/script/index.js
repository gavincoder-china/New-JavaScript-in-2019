
var minWidth = 50; //最小汉诺塔宽度
var step = 30; //递增宽度
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var isOver = false;
//当前汉诺塔的摆放
var curColumns = {
    c1: [3, 2, 1],
    c2: [],
    c3: []
}

// init();
function show() {
    showColumn(c1, curColumns.c1);
    showColumn(c2, curColumns.c2);
    showColumn(c3, curColumns.c3);
    function showColumn(columnDom, nums) {
        columnDom.innerHTML = "";
        for (const n of nums) {
            var div = document.createElement("div");
            div.style.width = minWidth + (n - 1) * step + "px";
            columnDom.appendChild(div);
        }
    }
}

function eventForBtns() {
    var btns = document.querySelector(".buttons").querySelectorAll("button")
    for (const btn of btns) {
        eventForBtn(btn);
    }
}

function eventForBtn(btn) {
    var fromArr = curColumns[btn.dataset.from];
    var toArr = curColumns[btn.dataset.to];
    btn.onclick = function () {
        if (fromArr.length === 0 || isOver) {
            return;
        }
        if (toArr.length === 0) {
            change(fromArr, toArr);
        }
        else {
            var fromLast = fromArr[fromArr.length - 1];
            var toLast = toArr[toArr.length - 1];
            if (fromLast < toLast) {
                change(fromArr, toArr);
            }
        }
    }
}

function change(fromArr, toArr) {
    toArr.push(fromArr.pop());
    show();
    if (curColumns.c1.length === 0 && curColumns.c2.length === 0) {
        document.querySelector(".gameover").style.display="block";
        isOver = true;
    }
}

show();
eventForBtns();
