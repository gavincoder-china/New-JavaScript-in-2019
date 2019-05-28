/*
 * @Author: gavincoder 
 * @Date: 2019-05-26 22:20:46 
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-27 20:53:30
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
function show3<T>(str:T):T{
    return str;
}

console.log( show3<string>('lose') );

/**4.定义泛型函数的类型：灵活性高,可以适用于不同的类型*/
var show4:(str:string)=>string=function (str:string):string {
    return str
}

var show5:<T> (str:T)=>T=function <T> (str:T):T {
    return str
}