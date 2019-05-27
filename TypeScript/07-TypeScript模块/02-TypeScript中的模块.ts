/*
 * @Author: gavincoder 
 * @Date: 2019-05-26 22:20:58 
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-26 23:26:37
 */

/**1.使用ts定义一个BMap模块*/
//namespace 命名空间
namespace BMap{

    /**2.定义一个地图Map类*/
    export class Map{
        public el:any;

        constructor(el:any){
            this.el=el;
        }

        /*添加地图的中心点*/
        addCenter(point:Point){
            console.log(point);
        }
        
    }

    /**3.定义一个点Point类*/
    export class Point{
        public x:number;
        public y:number;

        constructor(x:number,y:number){
            this.x=x;
            this.y=y;
        }
    }
}

/**4.使用BMap这个模块Module*/
// var map=new BMap.Map('container');
// var point=new BMap.Point(116.123434,39.8334234);
// map.addCenter(point);


