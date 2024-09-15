n=prompt("Enter any number");
let array=[3,5,4,32,2];
console.log(array);
console.log("first n numbers:-",array.slice(0,n));
console.log("last n numbers",array.slice(array.length-n));

let str='';
console.log(str);
if(str.length==0){
    console.log("string is blank");
}
else{
    console.log("string is not empty");
}

let index=2;
let str2 ="TanuGupta";
console.log(str2);
if(str2[index] == str2[index].toLowerCase())
{
    console.log("the letter is in lowecase i.e",str2[index]);
}
else{
    console.log("the letter is not in lower case i.e.",str2[index]);
}

let string= prompt("enter a string with spaces");
console.log(`the original string is ${string}`);
console.log(`the string after triming is ${string.trim()}`);
 
let arr=[];
console.log("arr=",arr);
if(arr.length === 0){
    console.log("the array is empty");
}
else{
    console.log("array is not empty",arr);
}

