console.log("Prcatice Q-1");
function getAvg(array){
let square=array.map((el)=>el*el);
let sum=square.reduce((res,el)=>{
    return res+el;
});
let n=array.length;
console.log("Average=",sum/n);
}
getAvg([4,5,6,0]);

console.log("Practice Q-2");
arr=[3,4,5,6];
let newarray=arr.map((el)=>el+5);
console.log("the new array=",newarray);

console.log("Practice Q-3");
let string=prompt("enter a string");
console.log("string=",string.toUpperCase());
    console.log("......or.....")
let newstring=string.toUpperCase();
console.log(newstring);

console.log("Practice Q-4");
const doubleandArguments=(arr,...args)=>[...arr,...args.map((el)=>el*2)];
let a=[3,4,5];
console.log("(a,4,5,8):-",doubleandArguments(a,4,5,8));
console.log("(a,4,5,8,99,56,89):-",doubleandArguments(a,4,5,8,99,56,89));
let obj1={
    username:"tanu",
    age:90,
};
let obj2={
    user:"bharti",
   city:"pune",
};
let merge={...obj1,...obj2};
console.log("merged object:-",merge);
