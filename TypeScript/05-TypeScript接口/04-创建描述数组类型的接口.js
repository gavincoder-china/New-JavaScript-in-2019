"use strict";
/**2.定义一个访问网络的函数*/
function ajar(url, params, callback) {
    console.log(url, params);
}
/**3.调用一下ajar函数*/
var params = ['lose', '12345']; //实现接口
ajar('http://www.baidu.com', params, function (result, error) {
});
