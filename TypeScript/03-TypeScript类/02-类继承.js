"use strict";
/**
 * Created by liujun on 2018/2/26.
 */
/**2.ts语法*/
/*1.定义一个Person2类*/
class Person02 {
    /*3.类的构造器*/
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /*4.定义方法*/
    getName() {
        console.log(this.name);
    }
}
/*2.定义Student类,并且继承Person2类*/
class Student01 extends Person02 {
    /*3.类的构造器*/
    constructor(name, age, job) {
        /*必须放在最前面,调用父亲的构造函数*/
        super(name, age);
        this.job = job;
    }
    /*4.定义方法*/
    getJob() {
        console.log(this.job);
    }
}
/*5.新建一个Student对象*/
var student = new Student01('lili', 5, 'play');
console.log(student);
student.getJob();
