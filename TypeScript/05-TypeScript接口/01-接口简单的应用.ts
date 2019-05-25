
/**1.定义一个访问网络的函数*/
function ajar0(url:string,params:{username:string,password:string},callback:(result:string,error:number)=>void) {
    console.log(url,params);
}

/**2.调用一下ajar函数*/
ajar0('http://www.baidu.com',{username:'jack',password:'12345'},function (result:string,error:number) {

});


