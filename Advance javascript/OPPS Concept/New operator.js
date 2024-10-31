console.log("New Operator.js");
//Constructor - doesn't return anything 
function Person(name,age){
    this.name=name,
    this.age=age
};
Person.prototype.talk=function(){
    console.log(`${this.name} is talking.`);
};
//to create object instance we use New operator
let P1= new Person("Puna",24);
let P2= new Person("Meena",28);
console.log("person1:=",P1.name,P1.age);
console.log("person2:=",P2.name,P2.age);
console.log(p1.talk()===p2.talk());
