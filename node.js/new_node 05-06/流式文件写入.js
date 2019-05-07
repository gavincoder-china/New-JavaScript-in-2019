//同步 异步 简单文件的写入都不适合大文件的写入,性能较差,容易内存溢出
var fs=require("fs");
var ws=fs.createWriteStream("node.js/new_node 05-06/hello_流式文件写入.txt",{flags:"a"}
)
ws.once("open",()=>{
    console.log("open")
})

ws.write("hello stream")
ws.write("hello stream")
ws.write("hello stream")

//关闭流,不要用close
ws.end();


