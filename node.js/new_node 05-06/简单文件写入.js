var fs=require("fs");
fs.writeFile("node.js/new_node 05-06/hello_简单写入a.txt","简单写入",{flag:"a"},(err)=>{
    if(!err) {console.log("写入成功")}
})