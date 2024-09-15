console.log("Logical Operators");
console.log("Checking Logical And");
console.log("8>9 && 8<0-",8>9 && 8<0);
console.log("3>4 && 9>0-",3>4 && 9>0);
console.log("9>2 && 4<9-",9>2 && 4<9);
console.log("Checking Logical Or");
console.log("8>9 || 8<0-",8>9 || 8<0);
console.log("3>4 || 9>0-",3>4 || 9>0);
console.log("9>2 || 4<9-",9>2 || 4<9);
console.log("Checking Logical Not");
console.log("!(19>9)-",!(19>9));
console.log("!(false)-",!(false));
console.log("Evaluating Expression:-");
res=((5>0)&&(8<28)||(!true));
console.log("((5>0)&&(8<28)||(!true))-",res);
console.log("practice question 1");
let str="apna";
if((str[0]==='a')&&(str.length>=3)){
    console.log(str,"-Good String");
}
else{
    console.log(str,"-bad string");
}
console.log("Practice question 2 ");
let num=12;
if((num % 3===0)&&((num+1==15)||(num-1==11))){
    console.log("(num % 3===0)&&((num+1==15)||(num-1==11))-safe");
}
else{
        console.log("unsafe");
}
