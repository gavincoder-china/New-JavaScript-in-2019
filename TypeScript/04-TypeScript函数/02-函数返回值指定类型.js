"use strict";
/**1.返回值是基本类型*/
function sum1(x, y) {
    return x + y;
}
var result1 = sum1(1, 4);
console.log(result1);
/**2.返回值是联合类型*/
function sum2(x, y, type) {
    if (type == 0) {
        return x + y; //返回number
    }
    else if (type == 1) {
        return x + '' + y; //返回string
    }
    return 0;
}
var result2 = sum2(1, 4, 1);
console.log(result2);
