/*
 * @Author: gavincoder 
 * @Date: 2019-05-26 21:24:50 
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-26 22:06:16
 */
// 接口就是规范
//创建个方法,里面的参数包含 数值 数组 对象 方法

function interfaceTest(name: string, mates: string[], account: { username: string, password: number }, speak: (slogan: string) => void) {
    console.log(name);
    console.log(mates);
    console.log(account);

}
function func(slogan: string): void {
    console.log(slogan)
}




//调用1
let call01 = interfaceTest("gavin", ["杨", "刘", "徐"], { username: "gavincoder", password: 123456 }, func)


//改数组对象类型接口
interface Mates {


    [index: number]: string;
}

var mates:Mates=["杨", "刘", "徐"]; //实现接口,下面可以直接调用mates数组对象

//改对象类型接口
interface Account {
    username: string;
    password: number
}
//改函数类型接口
interface Speak {
    (slogan: string): void;
}


//调用接口后的函数方法
function interfaceTestArray(name: string, mates: Mates, account: Account, speak: Speak) {
    console.log(name);
    console.log(mates);
    console.log(account);

}