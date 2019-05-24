"use strict";
/**ts语法：*/
// var a=12; // 在使用typescript编译器编译时它推测的类型为number
// a='abc'; // 这样赋值在ts语法中会报错。
// var arr=[1,2,3,4] // 编译器自动推测其类型为number
// arr[4]='addf';
var arr = [3, 'asd', false, 3]; // 编译器自动推测其类型为any
arr[4] = 'sdf';
console.log(arr);
