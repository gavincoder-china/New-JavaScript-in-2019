"use strict";
/**1.ts定义的拼接字符的匿名函数*/
var joinStr1 = function (x, y) {
    return x + '=>' + y;
};
/**2.给这个joinStr1匿名函数签名*/
var joinStr1 = function (x, y) {
    return x + '=>' + y;
};
console.log(joinStr1('lose', 23));
/**3.给参数中的callback函数设计签名*/
function ajar(url, params, callback) {
}
//调用ajar函数
ajar('https://www.baidu.com', { username: 'lisi', psd: '123' }, function (result, error) {
});
