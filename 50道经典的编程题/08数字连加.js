// 求s=a+aa+aaa+aaaa+aa...a的值，其中a是一个数字。
// 例如2+22+222+2222+22222(此 时共有 5 个数相加)，
// 几个数相加有键盘控制。

let n=3;  //设置10个数相加
let x=2; //设置数值为2


//函数式编程

let test=function (n,x) { 

   let sum=0; //求和
   let s=0; //比如222=200+22  这边的是就是22,这个正好是前一个数
   let num=0;//每一次的数值
    for (let index = 1; index <=n; index++) {
        
        num=x*(10**(index-1))+s;//双**是 乘方

        s=num;
        sum=sum+num;
    
    
    }

return sum;


 }
 console.log(test(n,x))
