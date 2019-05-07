var fs =require("fs");
var rs=fs.createReadStream("node.js/new_node 05-06/fs.js")
//监听流的开启与关闭
rs.once("open",function(){

console.log("流开启了")

})
rs.once("close",function(){
console.log("流关闭了")
//如果写可写流,在这加上关闭
//ws.end()

})

//如果要读取一个可读流中的数据,必须要为可读流绑定一个data事件,事件绑定完毕,它会自动开始读取数据
rs.on("data",function (data) {  //读取到的数据以data参数形式返回
    console.log(data)
    //如果要写的话,就需要先创建个可写流 var ws =fs.creatWriteStream("path",.....)
  })

  ///最佳案例,建立管道,直接传递
  //rs.pipe(ws)