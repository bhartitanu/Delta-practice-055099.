console.log("Practice Q-1");
function maxNum(arr,n){
    let a=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>n){
            a.push(arr[i]);
        }
    }  
    return a;
}
let b=prompt("Enter array:-");
console.log("Array",b);
let n=prompt("Enter the number n");
console.log("the num=",n);
let mArray=maxNum(b,n);
console.log("Array elements that are larger than n",mArray);
console.log("Practice Q-2");
str="abcdeabcdefffgh";
function findUnique(str){
    
}