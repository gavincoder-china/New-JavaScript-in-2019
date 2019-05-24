/*1.js中定义模块。闭包，及时函数*/
(function () {

})();


/*2.百度地图的模块*/
var BMap;
(function (BMap) {
    /**1.定义私有成员*/
    var point='我是一个点';

    /**2.暴露的公有方法*/
    BMap.getPoint=function () {
        return point;
    }

})(BMap || (BMap={}) );

console.log(BMap.getPoint());