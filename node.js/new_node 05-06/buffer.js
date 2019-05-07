//buffer缓冲区   node核心对象
//结构与数组很香,操作方法也很相似
//扩展原数组的存储类型--->二进制文件
//例如 音乐 图片 视频等

//buffer中存储的都是二进制文件,,,但是二进制都会以十六进制显示,因为二进制太长了
//每一个元素的范围是00-ff   8bit==1byte byte是最小单位  一个汉字占用三个字节
var str = "hello node 你好";

//创建buffer
var buf = Buffer.from(str);//将字符串转换成buffer
console.log(buf);
console.log(buf.length);
console.log(buf.toString());
console.log("*****************");


//创建制定大小的buffer
//该方法已废弃,buffer的所有构造函数已经过期,不推荐
// var buf2=new Buffer(1024);  //这是一个kb大小

var buf2 = Buffer.alloc(10);
console.log(buf2.length);
//通过索引操作buffer中的元素
buf2[0] = 88;  //显示已十六进制展示
buf2[1] = 0xaa;
buf2[10] = 11;   //buffer的大小一旦确定,不能修改.buffer实际上是对底层内存的直接操作
console.log(buf2);
console.log(buf2.length);



