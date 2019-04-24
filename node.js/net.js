var net = require("net");
var chatServer = net.createServer();
var clientList = []; //多客户端
chatServer.on('connection', function (client) {
    client.write("welcome to my chater");

    client.name = client.remoteAddress + ':' + client.remotePort; //这边给每个客户端起个名字，之后发送信息时过滤掉
    clientList.push(client);


    //事件监听器，调用的是 client.on()
    client.on("data", (data) => {
        //console.log(data)
        //把数据全发给所有客户端，但是这个有个问题就是，不管什么客户都发，自己也发，然后自己这就是两遍
        for (let i = 0; i < clientList.length; i++) {

            if (client != clientList[i]) {  //现在的程序  断开一个客户端会导致服务器出错
                //setTimeout("clientList[i].write(data)",2000);  这个不行
                clientList[i].write(data);  
            }
        }


    })
    // 我们是在
    // connection 回调函数的作用域中添加的这个事件监听器，这样就可以访问到连接
    // 事件所对应的 client 对象。新监听器关注的是 data 事件，每当 client 发送数据
    // 给服务器时，这一事件都会被触发。接着要删掉 client.end() 这一行。如果关闭
    // 了和客户端的连接，又如何获得新的数据呢？
    // client.end();
});
chatServer.listen(9000);

//现在我们可以使用  Telnet 127.0.0.1 9000 来测试 连接

// 我们运行服务器并用 Telnet 连上了它。服务器发送“Hi!”，然后
// 我们回应“Hello, yourself”。这个时候，Node 吐出了一堆你从来没有见过的看似
// 无用的数据。原来，因为 JavaScript 无法很好地处理二进制数据，所以 Node 特地
// 增加了一个 Buffer 库来帮助服务器。Node 并不知道 Telnet 发送的是什么类型的
// 数据，所以在我们告诉它该用什么编码前，Node 只能保存原始的二进制格式。打
// 印的字符信息实际是十六进制字节数据（详见 4.3.3 节）。每个字节对应着字符串
// “Hello, yourself”中的一个字母或字符。如果需要，可以调用 toString() 方法来
// 把 Buffer 数据翻译为可读的字符串格式；不需要的话，也可以保持二进制格式，
// 因为 TCP 和 Telnet 都能处理它。