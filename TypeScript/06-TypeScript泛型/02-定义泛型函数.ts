/**
 * Created by liujun on 2018/2/28.
 */

/**1.定义指定类型的函数*/
function show1(str:string){
    return str;
}
console.log( show2('lili') );

/**2.定义any类型的函数*/
function show2(str:any){
    return str;
}
console.log( show2(false) );

/**3.定义泛型函数：灵活性高,可以适用于不同的类型*/
function show3<T>(t:T):T{
    return t;
}
console.log( show3<string>('lose') );

/**4.定义泛型函数的类型：灵活性高,可以适用于不同的类型*/
var show4:(str:string)=>string=function (str:string):string {
    return str
}
var show5:<T> (t:T)=>T=function <T> (t:T):T {
    return t
}