/**
 * Created by liujun on 2018/2/28.
 */
/**1.定义一个普通的GenericNumber1类*/
class GenericNumber1{

    value:number;

    constructor(value:number){
        this.value= value;
    }

    show(val:number){
        console.log(this.value+val);
    }

}
var genericNumber1=new GenericNumber1(1); //只能传递number类型
genericNumber1.show(2); //只能传递number类型

/**2.定义一个泛型的GenericNumber1类：通用性，可以适用于不同的类型*/
class GenericNumber2<T>{
    value:T;
    constructor(value:T){
        this.value= value;
    }
    show(val:T){
        console.log(this.value,val); //泛型的变量不能使用+操作符
    }
}

var genericNumber2=new GenericNumber2<string>('jack');
genericNumber2.show('lose');

var genericNumber3=new GenericNumber2<number>(100);
genericNumber3.show(200);


