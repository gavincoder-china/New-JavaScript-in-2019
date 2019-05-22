/*
判断 101-200 之间有多少个素数，并输出所有素数。 
程序分析:判断素数的方法:用一个数分别去除 2 到 sqrt(这个数)，
如果能被整除， 则表 明此数不是素数，反之是素数*/

let count = 0;//统计素数个数
let arr = [];  //数组,用来保存素数
for (let num = 101; num < 200; num += 2) {

    let check = false;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        //这边的j必须从2开始,不能从1或0开始
        if (num % j == 0) {
            check = false;
            break;
        } else {
            check = true;
        }
    }
    if (check == true) {
        count++;
        arr.push(num);
    }
}
console.log(`素数个数为${count}`);
console.log(`他们为${arr}`);
