


/**ts语法*/
/*1.定义一个Person2类*/
class Person01{
    /*2.添加属性,并声明属性的类型*/
    name:string;
    age:number;
    /*3.类的构造器*/
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    /*4.定义方法*/
    getName():void{
        console.log(this.name);
    }
}
/*5.新建一个Person对象*/
var person=new Person01('lili',20);
console.log(person);
person.getName()

