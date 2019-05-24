"use strict";
/**3.定义一个访问网络的函数*/
function ajar(url, params, callback) {
    callback('获取数据成功');
    console.log(url, params);
}
/**4.调用一下ajar函数*/
var params = { username: 'jack', password: '12345' }; //使用接口
ajar('http://www.baidu.com', params, function (result, error) {
    console.log(result);
});
