var fs=require("fs")
fs.readFile('node.js/new_node 05-06/fs.js',(err,data)=>{
// fs.readdir('node.js/new_node 05-06',(err,data)=>{  目录读取

if(!err){
    console.log(data.toString())
}else{
    console.log("error")
}

})