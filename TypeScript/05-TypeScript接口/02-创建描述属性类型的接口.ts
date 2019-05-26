
/**1.定义一个Params接口*/
interface Params{
    username:string,
    password:string,
    id?:number, //这个是可选属性
}

// function ajar0(url:string,params:{username:string,password:string},callback:(result:string,error:number)=>void) {
//     console.log(url,params);
// }
/**2.定义一个访问网络的函数*/
function ajar00(url:string,params:Params,callback:(result:string,error:number)=>void) {
    console.log(url,params);
}

/**3.调用一下ajar函数*/
var params:Params={username:'jack',password:'12345'}; //使用接口
ajar00('http://www.baidu.com',params,function (result:string,error:number) {

});