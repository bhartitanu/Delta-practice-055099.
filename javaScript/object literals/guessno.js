console.log("-----------------------------Guessing game-----------------------------");
const max=prompt("Enter the max no for range:-");
num=Math.floor(Math.random()*max)+1;
let no=prompt("Guess the generated random no:-");
while(true){
 if(no=='quit')
 {
    console.log("you are quitting");
    break;
 }
 if(no == num){
    console.log("Wow You have Guessed correctly!! i.e",num);
    break;
 }
 else if(no< num){
  no=prompt("you guess too small!! guess again")
 }
 else{
    console.log("Wrong Guessed");
    no=prompt("you guess too big !!Guess again.");
 }
}
