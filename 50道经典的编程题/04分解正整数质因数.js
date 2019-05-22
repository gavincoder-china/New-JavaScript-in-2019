/**
 *
 * 将一个正整数分解质因数。例如:输入 90,打印出 90=2* 3 * 3 *5。
程序分析:对 n 进行分解质因数，应先找到一个最小的质数 k，然后按下述步骤完成:
(1)如果这个质数恰等于 n，则说明分解质因数的过程已经结束，打印出即可。
(2)如果 n <>k (不等于)，但 n 能被 k 整除，则应打印出 k 的值，
并用 n 除以 k 的商,作为新的正整数 n,重复执行第一步。
(3)如果 n 不能被 k 整除，则用 k+1 作为 k 的值,重复执行第一步。
 *
 *
 */



//  本方案不是最佳方案÷!!!!!
//判断是否为素数
let check = function (num) {

    for (let i = 2; i < Math.sqrt(num); i++) {

        if (num % i == 0) {
            return false;  //判断是否为素数

        }

    }
    return true; //判断是否为素数

}

//设置要求的数值,比如90
let N = 90;

let arr = [];

let choose = function (n) {

    if (check(n)) {

        arr.push(n);

    } else {
        for (let i = 2; i < n; i++) {

            if ((n % i) == 0) {

                arr.push(i);

                n = n / i;
                //这个递归,需要加return
                return  choose(n);
                

            }

        }


    }
return 0;
 
}


choose(N);



console.log(arr)