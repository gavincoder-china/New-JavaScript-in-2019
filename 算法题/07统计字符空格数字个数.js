// 输入一行字符，分别统计出其中  英文字母、空格、数字和其它字符的个数。


//使用正则操作(非最佳)

let str="shsdc sahdkas  $sdk*kjas 12121343";


//^否定 
let eng=/[^a-zA-Z]/gi;

let num=/[^0-9]/gi;

let space=/[^\s]/gi;


var luan = new RegExp("[^`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]","gi")
let e=str.replace(eng,"");
let n=str.replace(num,"");
let s=str.replace(space,"");

var l=str.replace(luan,"");
console.log(e,e.length)
console.log(n,n.length)
console.log(s,s.length)
console.log(l,l.length)