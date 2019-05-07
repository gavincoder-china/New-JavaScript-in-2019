/** 
 * 文件系统  
 * 通过node来操作系统中的文件
 * 需要引入fs模块
 * 
*/
var fs=require("fs");
//文件写入
//同步
var fd=fs.openSync("node.js/new_node 05-06/hello.txt","w");
console.log(fd);
//向文件中写入数据
fs.writeSync(fd,"hello world")

//保存文件
fs.closeSync(fd);
 
