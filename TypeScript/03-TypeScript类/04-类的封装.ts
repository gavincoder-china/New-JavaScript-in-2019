/**封装一个Person类*/
class Person04{
    /**private把_name属性隐藏起来，提供get set方法类访问_name属性*/
    private  _name:string;
    private _age:number;

    public get name(){
        return this._name;
    }

    public set name(name:string){
        this._name=name;
    }

    public get age(){
        return this._age;
    }
    /**这里可以进行容错处理*/
    public set age(age:number){
      
        try {
            if(age>100 || age<0){
                throw '年龄输入有误';
            }else{
                this._age=age;
            }
        } catch (error) {
            console.log(error)
        }
       

    }

    constructor(name:string,age:number){
        this._name=name;
        this._age=age;

    }
   
}

var person04=new Person04("gavin",18);
// person.name='jack';
person04.age=230; //如果年龄是不正确的，会报错
// console.log(person.name);
// console.log(person.age);



