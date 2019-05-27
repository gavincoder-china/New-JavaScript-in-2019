/*
 * @Author: gavincoder 
 * @Date: 2019-05-26 22:19:24 
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-27 20:22:48
 */

/**1.创建动物的接口 ( 约定 ) 只写声明,不赋值*/
interface Animal {
    name: string;
    age: number;
    eat(food: string): void;
}

/**2.创建Person类 去实现 动物的接口（规范）*/
class Person_Animal implements Animal {

    name: string;//必须要实现接口中的属性
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;      
    }

    //必须要实现接口中的函数
    eat(food: string): void {
        console.log('吃=>' + food);
    }

}

var gavin = new Person_Animal("gavin",18);

gavin.eat('米饭');





