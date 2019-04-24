var net = require("net");
var chatserver = net.createServer(), clientList = [];
chatserver.on("connection", (client) => {
    //待会写个针对不同用户的欢迎语句
    client.name = client.remoteAddress + ':' + client.remotePort;
    client.write("hi:" + client.name + "!");
    clientList.push(client);
    client.on("data", (data) => {
        broadcast(data, client); //这边我们把write方法写到了外面
    });
    //判断是否断开连接，如果是，则将其从数组中剔除
    client.on('end', () => {
        clientList.splice(clientList.indexOf(client), 1);
    });
    //记录错误
    client.on('error', function (e) {
        console.log(e)
    })

})
function broadcast(message, client) {

    var cleanup = [];
    for (let i = 0; i < clientList.length; i++) {
        if (client != clientList[i]) {
            if (clientList[i].writable) {
                clientList[i].write( message)
            } else {
                cleanup.push(clientList[i]);
                clientList[i].destroy();
            }
        }
    }
    // 在写入循环中删除死节点，消除垃圾索引
    for (let i = 0; i < cleanup.length; i++) {
        clientList.splice(clientList.indexOf(cleanup[i]), 1);
    }


    //     调用 broadcast 函数的时候，检查一下 socket 是否可写，以确保不会因为任何
    // 一个不可写的 socket 导致异常。不仅如此，发现任何不可写的 socket 后，还要
    // 通过 Socket.destroy() 方法将其关闭并从 clientList 中移除。注意，遍历
    // clientList 的过程中并没有移除 socket，因为我们不想在遍历过程中出现任何未
    // 知的副作用。
}
chatserver.listen(9000);