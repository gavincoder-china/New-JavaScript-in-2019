var fs = require("fs")
var rs = fs.createReadStream("node.js/new_node 05-06/学生就业意向调查表.xlsx");
var ws = fs.createWriteStream("node.js/new_node 05-06/学生就业.xlsx");
rs.pipe(ws);
//监控
rs.once("open", () => {
    console.log("du kai")
})
rs.once("close", () => {
    console.log("du guan")
})
ws.once("open", () => {
    console.log("xie kai")
})
ws.once("close", () => {
    console.log("xie guan")
})