"use strict";
/**封装一个Person类*/
class Person {
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
/**定义了个一个共有的静态的属性。属于类级别的属性*/
Person.eyeNumber = 2;
var person = new Person();
person.name = 'lose'; //访问了set方法
console.log(person.name); //访问了get方法
console.log(Person.eyeNumber);
