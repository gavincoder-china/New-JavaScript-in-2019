/*打印出1000内所有的 "水仙花数 "，所谓 "水仙花数 "是指一个三位数，
其各位数字立方和 等于该数本身。例如:153 是一个 "水仙花数 "，
因为 153=1 的三次方+5 的三次方+3 的三 次方。*/

let arr = [];
let a, b, c; //分别对应个十百位
for (let num = 100; num < 1000; num++) {
    a = num % 10;

    b = Math.floor((num % 100) / 10);


    c = Math.floor(num / 100);

    if((a**3+b**3+c**3)==num){

    arr.push(num);

    }



}
console.log(arr)