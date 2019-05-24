
/**1.返回值是基本类型*/
function sum1(x:number,y:number) :number{
    return x+y;
}
var result1:number=sum1(1,4);
console.log(result1);

/**2.返回值是联合类型*/
function sum2(x:number,y:number,type:number):number|string{
    if(type==0){
        return x+y; //返回number
    }else if(type==1){
        return x+''+y; //返回string
    }
    return 0;
}

var result2:number|string = sum2(1,4,1);

console.log(result2);
