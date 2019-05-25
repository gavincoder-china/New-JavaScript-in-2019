"use strict";
/**2.定义一个访问网络的函数*/
function ajar00(url, params, callback) {
    console.log(url, params);
}
/**3.调用一下ajar函数*/
var params = { username: 'jack', password: '12345' }; //使用接口
ajar00('http://www.baidu.com', params, function (result, error) {
});
