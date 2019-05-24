"use strict";
/**
 * Created by liujun on 2018/2/27.
 */
/**1.js语法*/
function sum1(x, y) {
    return x + y;
}
var sum2 = function (x, y) {
    return x + y;
};
/**2.ts语法*/
function sum3(x, y) {
    return x + y;
}
console.log(sum3(12, 3)); //这个是正确的调用
// console.log( sum3(12) ); //这个是错误的调用
// console.log( sum3(12,3,23) );//这个是错误的调用
