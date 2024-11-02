class Animal{
    constructor(name,type,food){
        this.name=name;
        this.type=type;
        this.food=food;
    }
    eat(){
        console.log(`${this.name} is eating ${this.food}`);
    }
}
let a1=new Animal("runo","Dog","Roti");
let a2=new Animal("Zina","cat","Papad");
console.log("animal1",a1);
//Mammal class inherits Animal Class
class Mammal extends Animal{
    constructor(name,food,home){
        super(name,food);
        this.home=home;
    }
    fact(){ console.log("All mammals reproduce"); }
};
let m1= new Mammal("Geeta","Grass","Shed");
console.log(m1);
console.log(m1.fact());
console.log(m1.eat);

