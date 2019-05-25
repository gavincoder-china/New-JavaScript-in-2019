/*
 * @Author: gavincoder 
 * @Date: 2019-05-25 17:07:18 
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-25 17:44:07
 */

/**封装一个Person类*/
class Person000 {
    /**定义了一个私有的属性。属于实例级别的属性*/
    private _name: string;
    /**定义了个一个共有的静态的属性。属于类级别的属性*/
    public static eyeNumber: number = 2;
  
    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    constructor(name: string) {
        this._name = name;
    }
}

var person000: Person000 = new Person000("gavin");

console.log(Person000.eyeNumber);
//Person000.eyeNumber = "test"; //静态属性不能修改
console.log(Person000.eyeNumber);
