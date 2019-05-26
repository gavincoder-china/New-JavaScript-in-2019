"use strict";
/*
 * @Author: gavincoder
 * @Date: 2019-05-26 22:19:24
 * @Last Modified by:   gavincoder
 * @Last Modified time: 2019-05-26 22:19:24
 */
/**2.创建Person类 去实现 动物的接口（规范）*/
class Person_Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //实现接口中的函数
    eat(food) {
        console.log('吃=>' + food);
    }
}
var gavin = new Person_Animal("gavin", 18);
gavin.eat('米饭');
