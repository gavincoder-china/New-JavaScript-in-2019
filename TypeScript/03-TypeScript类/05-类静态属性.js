"use strict";
/*
 * @Author: gavincoder
 * @Date: 2019-05-25 17:07:18
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-25 17:44:07
 */
/**封装一个Person类*/
class Person000 {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
/**定义了个一个共有的静态的属性。属于类级别的属性*/
Person000.eyeNumber = 2;
var person000 = new Person000("gavin");
console.log(Person000.eyeNumber);
//Person000.eyeNumber = "test"; //静态属性不能修改
console.log(Person000.eyeNumber);
