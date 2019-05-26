"use strict";
/*
 * @Author: gavincoder
 * @Date: 2019-05-26 21:24:50
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-26 22:06:16
 */
// 接口就是规范
//创建个方法,里面的参数包含 数值 数组 对象 方法
function interfaceTest(name, mates, account, speak) {
    console.log(name);
    console.log(mates);
    console.log(account);
}
function func(slogan) {
    console.log(slogan);
}
//调用1
let call01 = interfaceTest("gavin", ["杨", "刘", "徐"], { username: "gavincoder", password: 123456 }, func);
var mates = ["杨", "刘", "徐"]; //实现接口,下面可以直接调用mates数组对象
//调用接口后的函数方法
function interfaceTestArray(name, mates, account, speak) {
    console.log(name);
    console.log(mates);
    console.log(account);
}
