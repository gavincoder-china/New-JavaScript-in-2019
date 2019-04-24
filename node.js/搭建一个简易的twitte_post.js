var http = require('http'),
    assert = require('assert');
var opt = {
    host: 'localhost',
    port: 9000,
    path: "/send",
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
};
var req = http.request(opt, function (res) {
    res.setEncoding('utf-8');
    var data = '';
    res.on('data', function (d) {
        data += d;
    });
    res.on("end", function () {

        //         assert 是 Node 的一个核心模块，它能帮助我们用多种方式来对返回值进行测试。
        // 当一个值与预期的条件不符时，将抛出异常。通过测试脚本来检查程序运行时应该
        // 有的表现，可以确保它的功能正确。
        assert.strictEqual(data, '{"status":"ok","message":"Tweet eceived"}');
    })

})
req.write('tweet=test');
req.end();