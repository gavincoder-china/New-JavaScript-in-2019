// Array.isArray() 用于确定传递的值是否是一个 Array。
console.log("判断是否是数组" + Array.isArray([1, 2, 3]));

// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
// Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，
// 而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）。
console.log("Array.of()创建数组：" + Array.of(5));
console.log("Array.of()创建数组：" + Array.of(1, 2, 3));
console.log("Array()创建数组：" + Array(5));


//下面就是原型方法了！！！！！！！！！！！！！
// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
console.log("concat()方法连接的两个数组：" + arr1.concat(arr2));
//这货还可以连接多个数组
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = ['d', 'e', 'f'];
console.log("concat()方法连接多个数组：" + array1.concat(array2, array3));

// copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，会修改原值！！！！！。
var arrayCopy = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
// 参数解释：第一个是开始的索引，第二个是复制选取内容的起点（索引），第三个是终点，第三个减去第二个就是选取的个数，比如5-3=2，就是选两个
console.log("copyWithin() 方法浅复制数组:" + arrayCopy.copyWithin(0, 3, 5));
// expected output: Array ["d", "b", "c", "d", "e"]
console.log(arrayCopy);  //实践告诉我们，这个数组的值是变化的。
// copy to index 1 all elements from index 3 to the end
var arrayCopy2 = ['a', 'b', 'c', 'd', 'e'];
//这边要注意，因为没有第三个参数，则默认从取值索引点一直到最后
console.log(arrayCopy2.copyWithin(1, 3));
// expected output: Array ["a", "d", "e", "d", "e"]

let numbers = [1, 2, 3, 4, 5];
// 如果 start 为负，则其指定的索引位置等同于 length+start，length 为数组的长度。end 也是如此。

// 如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
numbers.copyWithin(-2);
//如果没有start的点，则从0开始算
// [1, 2, 3, 1, 2]

numbers.copyWithin(0, 3);
// [4, 5, 3, 4, 5]

numbers.copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]
let numbers1 = [1, 2, 3, 4, 5];
console.log("test" + numbers1.copyWithin(-2, -3, -2));
// [1, 2, 3, 3, 5]  把这个理解就懂了

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant: 
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
// entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
let array1Entries = [1, 2, 3, 4, 5];

var entries = array1Entries.entries();
console.log("entries() :" + entries);
// 有一个next方法，可用用于遍历迭代器取得原数组的[key,value]。
console.log(entries.next().value);
console.log(entries.next().value);
for (let e of entries) {
    console.log("遍历迭代器：")
    console.log(e);
}


//给二维数组排序

function sortArr(arr) {
    var goNext = true;
    var entries = arr.entries();
    console.dir(entries);
    while (goNext) {
        var result = entries.next();
        console.dir(result);
        if (result.done !== true) {
            console.dir()
            result.value[1].sort(function (a, b) {
                console.log(a, b);
                console.log(a - b);
                return a - b;
                //要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列
                // function compareNumbers(a, b) {
                //     return a - b;
                //   }
            }
            );
            goNext = true;
        } else {
            goNext = false;
        }
    }
    return arr;
}

var arrSort = [[1, 34], [456, 2, 3, 44, 234], [4567, 1, 4, 5, 6], [34, 78, 23, 1]];
console.dir(sortArr(arrSort));

