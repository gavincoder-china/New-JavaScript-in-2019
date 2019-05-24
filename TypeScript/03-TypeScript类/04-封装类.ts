/*
 * @Author: gavincoder 
 * @Date: 2019-05-24 16:59:09 
 * @Last Modified by: gavincoder
 * @Last Modified time: 2019-05-24 17:03:49
 */

class Car {
    private name: string ;

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }


	constructor(name:string) {
    this.name=name;
    }
	
   
}