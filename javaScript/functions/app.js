function hello() {
    console.log("hello world");
}
function isAdult() {
    let age = 12;
    if (age >= 18) {
        console.log("Eligible for vote");
    }
    else {
        console.log("Not Eligibile for Vote");
    }
}
hello();
isAdult();
console.log("Practice Q-1");
function PrintPoem() {
    console.log("Twinkle Twinkle little Star");
}
PrintPoem();
console.log("Practice Q-2");
function rollDie() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log("Roll a die, you got", random);
}
rollDie();
rollDie();
rollDie();
function personInfo(name, age, city) {
    console.log(`${name} is ${age} yrs old and live in ${city}`);
}
personInfo("karan", 29, "gurgoan");
personInfo("samita", 32, "delhi");
personInfo("raj", 26, "goa");
console.log("Practice Q-3");
function average(n1, n2, n3) {
    let avg = (n1 + n2 + n3) / 3;
    console.log(`the average of${n1},${n2} and ${n3} is ${avg}.`);
}
average(2, 3, 4);
average(3, 8, 8);
console.log("Practice Q-4");
let num = prompt("Enter the no you want:-");
function printTable(num) {
    console.log(`the table of ${num}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num}*${i}=${num * i}`);
    }
}
printTable(num);
function isodd(num) {
    if (num % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log("Function with return value:", isodd(num));
console.log("Practice Q-5");
let n = prompt("enter the no till you want the sum");
function calSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
let calculatedsum = calSum(n);
console.log("the sum of n nos:-", calculatedsum);
console.log("Practice Q-6");
let arr = ["tanu", "tanisha", "Bharti", "purna"];
console.log("Array =", arr);
let add = "";//Global Scope
function concat(arr) {
    for (let i = 0; i < arr.length; i++) {
        add = add + arr[i];// function Scope
    }
    return add;
}
console.log("The Concatination of strings of an array:", concat(arr));
console.log("The example of lexial scope");
function Outer(){
    let x=5,y=6;
    function Inner(x,y)
    {
        console.log(x+y);
    }
    console.log(x);
}
Outer();
console.log("Practice Q-7");
let greet = "hello";
function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreen() {
        console.log(greet);
    }
}
console.log(greet);
changeGreet();
console.log("High order Function");
function Printfunc(func,count){
    for(let i=0;i<count;i++)
    {
        func();
    }
}
function PrintArray(){
    a=[1,2,3,4,5];
    console.log(a);
}
Printfunc(PrintArray,3);
console.log("High order function(with return)");
function evenoddtest(request)
{
    if(request=="even")
    {
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else if(request=="odd"){
        let odd=function(n)
        {
            console.log(!(n%2==0));
        }
        return odd;
    }
    else{
        console.log("Wrong request");
    }
}
let request=prompt("even or odd");
console.log("your are requesting :",request+" function");
let fun=evenoddtest(request);
console.log(fun);
console.log("methods:-");
const calC={
    add:function(a,b){
        return a+b; },
    sub:function(a,b){
        return a-b;},
    mul: function(a,b){
        return a*b;
    }
};
console.log("calculator=",calC);
console.log("Addition of 2,5",calC.add(2,5));
console.log("multiplication of 4,7",calC.mul(4,7));
