"use strict";
/**2.创建Person类 去实现 动物的接口（规范）*/
class Person {
    //实现接口中的函数
    eat(food) {
        console.log('吃=>' + food);
    }
}
var person = new Person();
person.name = 'jack';
person.age = 12;
person.eat('米饭');
