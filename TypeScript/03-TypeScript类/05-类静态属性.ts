/**封装一个Person类*/
class Person{
    /**定义了一个私有的属性。属于实例级别的属性*/
    private  _name:string;
    /**定义了个一个共有的静态的属性。属于类级别的属性*/
    public static eyeNumber:number=2;
    
    public get name(){
        return this._name;
    }

    public set name(name:string){
        this._name=name;
    }


}
var person:Person=new Person();
person.name='lose'; //访问了set方法
console.log(person.name);//访问了get方法
console.log(Person.eyeNumber);