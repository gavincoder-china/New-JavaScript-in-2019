var express = require("express");
//
//安装好的express无法使用，是缺少了两个包，需要安装npm install -g express-generator   & npm install body-parser -g 
//express.createServer()目前已经被弃用，如果再使用就会报错，直接用express（）方法来创建服务器就可以了。也就是var app=express()就可以了。
var app = express();

app.listen(9000);

var tweets = [];
app.get('/', function (req, res) {

    res.send("welcome to my twitter");
});


//app.post('/send', express.bodyParser(), function(req, res) {  这段代码已经失效了，现在是下面一行
app.post('/send', require('body-parser').urlencoded({ extended: true }), function (req, res) {

    //xpress.bodyParser 为 req 对 象 添 加 了 新 的 属 性， 称 为 req.body 。 这 个 属
    // 性（如果它存在的话）包含了 POST 数据对应的对象。 express.bodyParser 中
    // 间件只能够处理 POST 方法的数据，而且要求 HTTP 头的 content-type 属性是
    // application/x-www-form-urlencoded 或 application/json 。这两种数据格
    // 式都能够很容易地解析成 key/value 值，并保存到 req.body 对象中。

    // 在 app.post() 处理函数中，我们第一步要先检查 express.bodyParser 是否找
    // 到了数据，只要检查一下 req.body 是否存在就可以了。如果存在，我们查找 req.
    // body.tweet 的这一属性，这是 tweet 的内容。如果找到了 tweet，就把它记录在一
    // 个叫做 tweets 的全局数组中，并且返回客户端一个 JSON 字符串表示已经成功。
    // 如果没有找到 req.body 或 req.body.tweet ，就返回表示失败的 JSON 字串给客
    // 户端。注意，我们并没有在调用 res.send() 时对数据进行序列化。如果传给 res.
    // send() 一个对象，它会自动把其序列化为 JSON 并添加对应的 HTTP 头。
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({ status: "ok", message: "tweet received" });
    } else {
        //没有tweet？
        res.send({ status: "nok", message: "tweet not received" });
    }
});
//把基础的 API 补充完整，添加了一个监听“/tweets”的 app.get() 路
// 由。这个路由只是简单地把 tweets 数组的内容以 JSON 的形式返回出去。
app.get('/tweets', function (req, res) {
    res.send(tweets);
})