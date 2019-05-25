"use strict";
/*
 * @Author: gavincoder
 * @Date: 2019-05-24 16:59:09
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-25 17:31:17
 */
class Car {
    constructor(name) {
        this.name = name;
    }
    ///约定俗成,$指的是私有变量;
    /**
     * Getter $name
     * @return {string}
     */
    get $name() {
        return this.name;
    }
    /**
     * Setter $name
     * @param {string} value
     */
    set $name(value) {
        this.name = value;
    }
}
let car_fz = new Car("gavin");
console.log(car_fz.$name);
car_fz.$name = "betty";
console.log(car_fz.$name);
