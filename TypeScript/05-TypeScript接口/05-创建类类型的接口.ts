/**1.创建动物的接口 ( 约定 )*/
interface Animal{
    name:string;
    age:number;
    eat(food:string):void;
}

/**2.创建Person类 去实现 动物的接口（规范）*/
class Person implements Animal{

    name:string;//实现接口中的属性
    age:number;

    //实现接口中的函数
    eat(food:string):void{
        console.log('吃=>'+food);
    }
}

var person=new Person();
person.name='jack';
person.age=12;
person.eat('米饭');





