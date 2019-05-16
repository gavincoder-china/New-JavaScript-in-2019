/** 
 * 文件系统  
 * 通过node来操作系统中的文件
 * 需要引入fs模块
 * 
*/
const fs=require("fs");
//文件写入
//同步  两个参数 一个是路径 一个是权限 r w(覆盖) a(不覆盖)
const fd=fs.openSync("./hello.txt","a");
console.log(fd);
//向文件中写入数据 参数一是打开的文件   参数二是写入的内容
fs.writeSync(fd,"hello world")

//保存文件
fs.closeSync(fd);
 
