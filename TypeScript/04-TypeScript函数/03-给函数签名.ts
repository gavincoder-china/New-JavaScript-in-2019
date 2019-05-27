/*
 * @Author: gavincoder 
 * @Date: 2019-05-27 18:48:37 
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-27 18:53:10
 */

 //一般情况下,函数的声明方式有如下两种
function kind1(){

}

var kind2=function(){

}


/**1.ts定义的拼接字符的匿名函数*/
var joinStr1 = function (x: string, y: number): string {
    return x + '=>' + y;
}

/**2.给这个joinStr1匿名函数签名*/
var joinStr: (name: string, age: number) => string 

=
    function (x: string, y: number): string {
        return x + '=>' + y;
    }

console.log(joinStr1('lose', 23));

/**3.给参数中的callback函数设计签名*/
function ajar1(url: string, params: { username: string, psd: string },
    callback: (result: string, error: number) => void) {

}

//调用ajar函数
ajar1('https://www.baidu.com', { username: 'lisi', psd: '123' }, function (result: string, error: number) {

})

