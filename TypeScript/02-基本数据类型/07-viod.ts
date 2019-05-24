/**
 * Created by liujun on 2018/2/26.
 */

/**ts语法：void声明的变量只能为它赋予undefined和null*/
var a:void=null;
var b:void=undefined;
// var c:void='sdf';
console.log(a,b);

/**js语法*/
function show1(){
    return 'show1';
}
console.log(show1());

/**ts语法:声明函数的返回类型位string*/
function show2():string{
    return 'show2'
}
console.log(show2());

/**ts语法:声明函数的返回类型位void*/
function show3():void{
}
console.log(show3());
