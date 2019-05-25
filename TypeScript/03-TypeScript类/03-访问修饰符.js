"use strict";
/*
 * @Author: gavincoder
 * @Date: 2019-05-25 17:11:25
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-25 17:21:52
 */
/*
 * @Author: gavincoder
 * @Date: 2019-05-24 16:47:44
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-25 17:11:21
 */
/**
 * 修饰符：
 * public  公有，谁都可以访问
 * private 私有，只能自己访问
 *
 * protected 保护，子类可以访问
 * */
/*1.定义一个Person03类*/
class Student {
    /*3.类的构造器*/
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /*4.定义方法*/
    getName() {
        // console.log(this.name);
        return this.name;
    }
}
class Ll extends Student {
    constructor(name, age) {
        super(name, age);
    }
}
/*5.新建一个Student对象*/
// var student_gavin = new Student("gavin", 18);
// console.log(student_gavin.name);
// student_gavin.name = 'betty';
// console.log(student_gavin.name);
let ll = new Ll("liulin", 18);
console.log(ll.getName());
