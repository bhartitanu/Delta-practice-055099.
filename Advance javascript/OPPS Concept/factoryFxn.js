console.log("factoryFxn");
function personMaker(name,age){
    const Person={
        name:name,
        age:age,
        talk(){ console.log(`Hi,This is ${this.name}`); },
    };
    return Person;
}
let p1=personMaker("Adam",25);
let p2=personMaker("Teesha",30);
console.log(p1.name);
console.log(p1.age);
console.log(p1.talk());
console.log(p2.name);
console.log(p2.age);
console.log(p2.talk());
