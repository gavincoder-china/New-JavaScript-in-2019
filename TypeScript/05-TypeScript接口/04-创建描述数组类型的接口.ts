
/**1.定义一个Params接口*/
interface Params{
    [index:number]:string,
}

/**2.定义一个访问网络的函数*/
function ajar(url:string,params:Params,callback:(result:string,error:number)=>void) {
    console.log(url,params);
}

/**3.调用一下ajar函数*/
var params:Params=['lose','12345']; //实现接口
ajar('http://www.baidu.com',params,function (result:string,error:number) {

});