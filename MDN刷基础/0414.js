// 创建数组
var fruits = ['apple', 'banana'];
console.log("打印数组长度" + fruits.length);

// 通过索引访问数组元素
var first = fruits[0]; //apple
var last = fruits[fruits.length - 1];//banana
// 遍历数组
fruits.forEach(function (item, index, array) {
    console.log("遍历数组" + index + "  " + item);

});
// 添加元素到数组的末尾
var newLength = fruits.push("Orange");
console.log("打印新添加元素的数组" + fruits);
//删除数组尾部元素
var lastDelete = fruits.pop();  //这个是弹出最后个元素
// 删除数组头部元素
var firstDelete = fruits.shift();
console.log("删除头部元素" + firstDelete);
// 添加元素到数组头部
var firstAdd = fruits.unshift("firstAdd");
console.log("头部添加的元素" + fruits[0]);
// 找出某个元素在数组中的索引
var pos = fruits.indexOf("banana");
console.log("找到元素的索引" + pos);
// 通过索引删除某个元素
var removeItemByIndex = fruits.splice(pos, 1);

// 从一个索引处删除多个元素
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
var removeItemsByIndex = vegetables.splice(1, 2);
console.log("删除多个元素后的数组" + vegetables);
// 复制一个数组
var copyFruits = fruits.slice();
console.log("复制前的数组" + fruits);
fruits.push("chichichi");
console.log("复制前的数组,再修改后" + fruits);//说明了该数组复制是真复制，不是简单的地址复制
console.log("复制后的新数组" + copyFruits);
//Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
console.log("打印从字符串中获取到的数组" + Array.from('foo')); //f,o,o
console.log("获取到的数组" + Array.from([1, 2, 3], x => x + x));//获取到的数组2,4,6
//tips:箭头函数   就是用来定义函数的
/*var add = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b
    } else {
        return 0
    }
}*/

//array from a set
let s = new Set(['foo', "window"]);
var arr1 = Array.from(s);
console.log("array from a set" + arr1);
//array from a map
let m = new Map([[1, 2], [3, 4], [5, 6]]);
var arr2 = Array.from(m);
console.log("array from a map" + arr2);
//Array from an Array-like object (arguments)
function f() {

    return Array.from(arguments);

}
console.log("Array from an Array-like object (arguments)" + f(1, 2, 3));
//在Array.from中使用箭头函数
Array.from([1, 2, 3], x => x + x);
// x => x + x代表这是一个函数，只是省略了其他的定义，这是一种Lambda表达式的写法
// 箭头的意思表示从当前数组中取出一个值，然后自加，并将返回的结果添加到新数组中
console.log(Array.from({ length: 5 }, (v, w) => w));
// 下面是解释
var arr1 = Array.from({
    length: 5 // Create 5 indexes with undefined values
},
    function (v, k) { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to 4]
        return k; // Return k(ey) as value for this index
    }
);
console.log(arr1);
function ff() {
    Array.from(arguments, function (a, b) {
        //arguments: { 0: 123, 1: 2334, length: 2 }
        // a  是值，b是index
        console.log(a, b);
        return b;

    })

}
ff(123, 2334);
//数组去重合并
function combine() {
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
    return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2, 3, 3];
console.log(combine(m, n));                     // [1, 2, 3]
// nice