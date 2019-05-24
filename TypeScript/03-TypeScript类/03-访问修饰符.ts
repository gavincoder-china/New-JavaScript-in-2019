/*
 * @Author: gavincoder 
 * @Date: 2019-05-24 16:47:44 
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-24 16:48:38
 */


/**
 * 修饰符：
 * public  公有，谁都可以访问
 * private 私有，只能自己访问
 * protected 保护，子类可以访问
 * */
/*1.定义一个Person03类*/
class Person03{
    /*2.添加属性,并声明属性的类型*/
    public name:string;
    public age:number;
    /*3.类的构造器*/
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    /*4.定义方法*/
    public getName():void{
        console.log(this.name);
    }
   

}


/*2.定义Student类,并且继承Person2类*/
class Student extends Person03{
    /*2.添加属性,并声明属性的类型*/
    public job:string;

    /*3.类的构造器*/
    constructor(name:string,age:number,job:string){
        /*必须放在最前面,调用父亲的构造函数*/
        super(name,age);
        this.job=job;
    }

    /*4.定义方法*/
    public getJob():void{
        console.log(this.job);
    }

}

/*5.新建一个Student对象*/
var student=new Student('lili',5,'play');
student.name='lose';
console.log(student);