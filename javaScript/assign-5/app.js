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
str="abcdeabcdefffghjkseeef";
console.log("str=",str);
function findUnique(str){
let s="";
  for(let i=0;i<str.length;i++){
    let curr=str[i];
    if(s.indexOf(curr)==-1)
    {
        s=s+str[i];
    }
  }
  return s;
}
console.log("The uniques letter are :",findUnique(str));
console.log("Practice Q-3");
function longCounName()
{
    let countryNames=prompt("Enter the country name:- ");
    let country=[];
    while(countryNames!="quit"){
        countryNames=prompt("enter another country and quit to stop");
        country.push(countryNames);
    }
    country.pop();
    let index=0;
    console.log("The country list:-",country);
    for(let i=0;i<country.length;i++){
        let length= country[index].length;
        let currlength=country[i].length;
        if(currlength>length)
        {
            index=i;
        }
    }
    return country[index];
}
console.log("enter quit to stop input Country name");
let long=longCounName();
console.log("Longest country name:-",long);

console.log("Practice Q-4");
function countVowel(string){
    let count=0;
    for(let i=0;i<string.length;i++)
    {
      if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u')
      {
        count++;
      }
    }
    console.log("Th no of vowels in string are",count);
}
let string=prompt("Enter a string");
countVowel(string);

console.log("Practice Q-5");
function random(start,end){
    let diff=end-start;
    let ran=Math.floor(Math.random()*diff)+start;
    return ran;
}
console.log("");
let start=parseInt(prompt("Enter the starting of random no"));
let end=parseInt(prompt("Enter the ending of random no"));
let gen=random(start,end);
console.log(`generate the random b/w ${start} and ${end}:-${gen}`);