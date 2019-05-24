
/**ts语法：void声明的变量只能为它赋予undefined和null*/
//undefined
//1:未被定义的
//2:已被定义但是未赋值的
//3:函数没有返回值的

//null 空对象,用作占位

//var tesskhsbakc: void = null;

var bc: void = undefined;
// var c:void='sdf';
//console.log(a, b);

/**js语法*/
function show1() {
    return 'show1';
}
console.log(show1());

/**ts语法:声明函数的返回类型位string*/
function show2(): string {
    return 'show2'
}
console.log(show2());

/**ts语法:声明函数的返回类型位void*/
function show3(): void {
    console.log("halou");
    
}
show3();
