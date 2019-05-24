"use strict";
/**封装一个Person类*/
class Person04 {
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    /**这里可以进行容错处理*/
    set age(age) {
        if (age > 200 || age < 0) {
            throw '年龄输入有误';
        }
        else {
            this._age = age;
        }
    }
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
var person04 = new Person04("gavin", 18);
// person.name='jack';
person04.age = 230; //如果年龄是不正确的，会报错
// console.log(person.name);
// console.log(person.age);
