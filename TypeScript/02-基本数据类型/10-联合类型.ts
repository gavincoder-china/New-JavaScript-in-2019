/**
 * Created by liujun on 2018/2/26.
 */

var isTrue=false;
/*定义一个联合类型变量test*/
var test:number|string;

//test要么是number类型 , 要么是字符串类型
test=isTrue?100:'abc';
console.log(a);


/**参数str是联合类型*/
function show(str:number|string):void{
    console.log(str);
}
/*只能传递字符串或者是数字*/
show(10012);
show('show');