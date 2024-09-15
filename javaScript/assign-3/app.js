console.log("Question 1:-");
let arr=[1,2,3,4,5,6,2,1];
console.log(arr);
let del=prompt("Enter the no you want to delete");
for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==del)
            {
                arr.splice(i,1);
        }
        
}
console.log("array after deleting ",arr);

console.log("Question 2:-");
let number=28806;
console.log("number=",number);
let count=0;
let copy=number;
while(copy>0)
{
    count++;
    copy=Math.floor(copy/10);
}
console.log("No. of digits=",count);

console.log("Question 3:-");
let sum=0;
console.log("number=",number);
let rem;
while(number>0){
    rem=number%10;
    number=parseInt(number/10);
    sum=sum+rem;
}
console.log("sum of all digits",sum);

console.log("Question 4:-");
let fact=1;
let n=prompt("Enter the no for factorial");
if(n==0||n==1){
    fact=1;
}
else{
for( let i=1;i<=n;i++)
{
fact=i*fact;
}
}
console.log(`factorial of ${n} is ${fact}`);

console.log("question 5:-");
let a=[299,1992,123,188,727];
console.log("a=",a)
let largest=0;
for( let i=0;i<a.length;i++){
    if(a[i]>largest)
    {
        largest=a[i];
    }
}
console.log("largest item is",largest);







