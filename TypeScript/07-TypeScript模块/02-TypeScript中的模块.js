"use strict";
/*
 * @Author: gavincoder
 * @Date: 2019-05-26 22:20:58
 * @Last Modified by:   gavincoder
 * @Last Modified time: 2019-05-26 22:20:58
 */
/**1.使用ts定义一个BMap模块*/
//namespace 命名空间
var BMap;
(function (BMap) {
    /**2.定义一个地图Map类*/
    class Map {
        constructor(el) {
            this.el = el;
        }
        /*添加地图的中心点*/
        addCenter(point) {
            console.log(point);
        }
    }
    BMap.Map = Map;
    /**3.定义一个点Point类*/
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    BMap.Point = Point;
})(BMap || (BMap = {}));
/**4.使用BMap这个模块Module*/
// var map=new BMap.Map('container');
// var point=new BMap.Point(116.123434,39.8334234);
// map.addCenter(point);
