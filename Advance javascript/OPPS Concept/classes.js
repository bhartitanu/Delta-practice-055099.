console.log("Classes.js");
class Emp{
    constructor(name,age){
        this.name=name,
        this.age=age
    }

    talk(){
        console.log(`${this.name} is talking`);
    }
};
let adam= new Emp("Adam",25);
let teena= new Emp("Teena",28);
console.log("employee1:-",adam);
console.log(adam.name);
console.log(adam.age);
console.log(adam.talk());
console.log("employee2",teena);
console.log(teena.name);
console.log(adam.age);
console.log("adam.talk()===teena.talk()",adam.talk===teena.talk);
