
window.onload = function () {

// //切换google、baidu 
// var chooseBaidu=document.getElementById("chooseBaidu");
// console.log(chooseBaidu);
// chooseBaidu.onclick=function(){
// // 如果选中了百度，就把所有属性改成百度的
// document.getElementById("formSearch").action="https://www.baidu.com/s";
// document.getElementById("searchInput"),name="wd";
// console.log("切换成百度");
// };









    // 切换内容标签页
    var bt1 = document.getElementById("control-item1");
    var bt2 = document.getElementById("control-item2");
    var bt3 = document.getElementById("control-item3");
    var bt4 = document.getElementById("control-item4");
    var bt5 = document.getElementById("control-item5");
    var c1 = document.getElementById("content-icon-1");
    var c2 = document.getElementById("content-icon-2");
    var c3 = document.getElementById("content-icon-3")
    var c4 = document.getElementById("content-icon-4");
    var c5 = document.getElementById("content-icon-5");
    bt1.onclick = function () {
        c1.style.display = "block";
        c2.style.display = "none";
        c3.style.display = "none";
        c4.style.display = "none";
        c5.style.display = "none";
        console.log("test");

    };
    bt2.onclick = function () {
        c2.style.display = "block";
        c1.style.display = "none";
        c3.style.display = "none";
        c4.style.display = "none";
        c5.style.display = "none";
        console.log("test");

    }; bt3.onclick = function () {
        c3.style.display = "block";
        c2.style.display = "none";
        c1.style.display = "none";
        c4.style.display = "none";
        c5.style.display = "none";
        console.log("test");

    }; bt4.onclick = function () {
        c4.style.display = "block";
        c2.style.display = "none";
        c3.style.display = "none";
        c1.style.display = "none";
        c5.style.display = "none";
        console.log("test");

    }; bt5.onclick = function () {
        c5.style.display = "block";
        c2.style.display = "none";
        c3.style.display = "none";
        c4.style.display = "none";
        c1.style.display = "none";
        console.log("test");

    };
  

    // var search=document.getElementById("searchInput");


}