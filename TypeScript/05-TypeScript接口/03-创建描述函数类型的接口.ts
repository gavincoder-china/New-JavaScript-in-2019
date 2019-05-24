
/**1.定义一个Params接口*/
interface Params{
    username:string,
    password:string,
    id?:number, //这个是可选属性
}

/**2.定义一个CallBack接口*/
interface CallBack{
    (result:string,error?:number):void;
}

/**3.定义一个访问网络的函数*/
function ajar(url:string,params:Params,callback:CallBack) {
    callback('获取数据成功');
    console.log(url,params);
}

/**4.调用一下ajar函数*/
var params:Params={username:'jack',password:'12345'}; //使用接口
ajar('http://www.baidu.com',params,function (result:string,error:number) {
    console.log(result);
});