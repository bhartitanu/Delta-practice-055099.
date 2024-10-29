let arr=[2,3,4,4];
console.log("arr.push(2):=",arr.push(2));
let arr2=[3,4,5,7];
arr.sayHello=()=>{
    console.log("Hello");
};
//It will change the defination of actual push function
arr.__proto__.push=(n)=>
{
    console.log("Pushing Numer",n);
}
console.log("arr.push(3)",arr.push(3));