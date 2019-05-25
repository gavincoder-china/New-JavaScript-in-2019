class CarFather {
    name: string;
    price: number;
    brand: string;
    constructor(name: string, price: number, brand: string) {
        this.name = name;
        this.price = price;
        this.brand = brand;

    }
    run(): void {
        console.log(`${this.name}会慢跑`);

    }


}
class CarSon extends CarFather {

    color: string;

    constructor(name: string, price: number, brand: string, color: string) {

        super(name, price, brand);//必写

        this.color = color;
    }

    drift(): void {
        console.log(`${this.name}会漂移`);
    }
    //overwrite 重写
    run(): void {
        console.log(`${this.name}会快跑`);
    }

}
let hlydbc = new CarSon("gtr", 100, "奔驰", "yellow");

hlydbc.run();

hlydbc.drift();