"use strict";
class CarFather {
    constructor(name, price, brand) {
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
    run() {
        console.log(`${this.name}会慢跑`);
    }
}
class CarSon extends CarFather {
    constructor(name, price, brand, color) {
        super(name, price, brand); //必写
        this.color = color;
    }
    drift() {
        console.log(`${this.name}会漂移`);
    }
    //overwrite 重写
    run() {
        console.log(`${this.name}会快跑`);
    }
}
let hlydbc = new CarSon("gtr", 100, "奔驰", "yellow");
hlydbc.run();
hlydbc.drift();
