"use strict";

/**1.定义一个普通的GenericNumber1类*/
class GenericNumber1 {
    constructor(value) {
        this.value = value;
    }
    show(val) {
        console.log(this.value + val);
    }
}
var genericNumber1 = new GenericNumber1(1); //只能传递number类型
genericNumber1.show(2); //只能传递number类型
/**2.定义一个泛型的GenericNumber1类：通用性，可以适用于不同的类型*/
class GenericNumber2 {
    constructor(value) {
        this.value = value;
    }
    show(val) {
        console.log(this.value, val); //泛型的变量不能使用+操作符
    }
}
var genericNumber2 = new GenericNumber2('jack');
genericNumber2.show('lose');
var genericNumber3 = new GenericNumber2(100);
genericNumber3.show(200);
