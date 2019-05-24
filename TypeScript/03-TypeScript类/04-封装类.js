"use strict";
/*
 * @Author: gavincoder
 * @Date: 2019-05-24 16:59:09
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-24 17:03:49
 */
class Car {
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
    constructor(name) {
        this.name = name;
    }
}
