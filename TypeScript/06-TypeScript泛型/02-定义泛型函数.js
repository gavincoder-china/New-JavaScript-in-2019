"use strict";
/**
 * Created by liujun on 2018/2/28.
 */
/**1.定义指定类型的函数*/
function show1(str) {
    return str;
}
console.log(show2('lili'));
/**2.定义any类型的函数*/
function show2(str) {
    return str;
}
console.log(show2(false));
/**3.定义泛型函数：灵活性高,可以适用于不同的类型*/
function show3(t) {
    return t;
}
console.log(show3('lose'));
/**4.定义泛型函数的类型：灵活性高,可以适用于不同的类型*/
var show4 = function (str) {
    return str;
};
var show5 = function (t) {
    return t;
};
