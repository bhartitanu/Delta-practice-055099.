console.log("For loop");
console.log("forward loop:-")
for(let i =1;i<=5 ;i++){
    console.log("i=",i);
}
console.log("backward loop:-")
for(let i =5;i>=1 ;i--){
    console.log("i=",i);
}
console.log("Print all odd number(1-15)");
for( let i=1;i<=15;i++)
{
    if(i%2!=0)
    console.log(i);
}
console.log("Print all even number(2-10)");
for( let i=0;i<11;i++)
{
    if(i%2==0)
    console.log(i);
}
// let n=prompt("enter a number");
// console.log(`The table of ${n}`);
// for( let i=1;i<=10;i++)
// {
//     console.log(`${n}*${i}=${n*i}`);
// }
console.log(" forward While loop");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
i=5;
console.log("Backward while loop");
while(i>=1)
{
    console.log(i);
    i--;
}
// console.log("practice question favourite movie:-");
// const str="Stree";
// userstr=prompt("Guess the movie name:-");
// if(str==userstr){
//     console.log("you got the right ans i.e",str);''
// }
// else{
//     while((str!=userstr)&&(userstr!='quit')){
//         console.log("wrong ans:-",userstr);
//         userstr=prompt("Guess again");
//         if(str==userstr){
//             console.log("you got the right ans i.e",str);''
//         }
//     }
// }
console.log("nested loop")
let cars=[["bmw",100],["xuv",200],["ferrari",300],["maruti",400]]
console.log(cars)
for(let i=0;i<cars.length;i++)
{
    console.log(`Info of car ${i+1}`);
    for(let j =0; j<cars[i].length;j++)
    {
        console.log(j,cars[i][j]);
    }
}
