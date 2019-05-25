"use strict";
/**1.定义一个访问网络的函数*/
function ajar0(url, params, callback) {
    console.log(url, params);
}
/**2.调用一下ajar函数*/
ajar0('http://www.baidu.com', { username: 'jack', password: '12345' }, function (result, error) {
});
