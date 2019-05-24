"use strict";
/**
 * Created by liujun on 2018/2/26.
 */
/**js语法:没有枚举这个概念，可以间接实现*/
var College1 = {
    IOS: 0,
    Android: 1,
    HTML5: 2,
    UI: 3
};
console.log(College1.Android);
/**ts语法*/
var College2;
(function (College2) {
    College2[College2["IOS"] = 0] = "IOS";
    College2[College2["Android"] = 1] = "Android";
    College2[College2["HTML5"] = 2] = "HTML5";
    College2[College2["UI"] = 3] = "UI";
})(College2 || (College2 = {}));
// 返回的类型是College2枚举类型
var index = College2.HTML5; //获取索引
// 返回的类型是string类型
var College2Name = College2[2]; //获取枚举名
console.log(index); //获取索引
console.log(College2Name); //获取枚举名
console.log(College2); // 打印枚举对象
