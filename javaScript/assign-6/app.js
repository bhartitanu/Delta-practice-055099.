console.log("Practice Q-1");
let arrayAverage=(arr)=>{
    let avg,sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    avg=sum/arr.length;
    console.log("the average of array:-",avg);
}
a=[3,5,7,9];
console.log("Array",a);
console.log(arrayAverage(a));

console.log("Practice Q-2");
let isEven=(n)=>{
    if(n%2==0){
        console.log("the no is even");
    }
    else{
        console.log("the no is odd");
    }
}
let n=43;
console.log("n=",n);
console.log(isEven(n));

console.log("Practice Q-3");
console.log("find the o/p of given code");
const object={
    message:'Hello,World!',
    logMessage()
    {
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);
 
console.log("Practice Q-4");
console.log("find the o/p of given code");
let length = 4; 
function callback(){
    console.log(this.length);
}
const obj={
    length:5,
    method(callback){
        callback();
    },
};
obj.method(callback,1,2);
