console.log("hello world");
console.log("If statement practice question ");
console.log("Traffic light system");
let color='green';
if(color==='red')
{
    console.log("Stop");
}
if(color==='yellow')
    {
        console.log("Wait");
    }
if(color==='green')
    {
        console.log("Go");
    }
//if-else question 
console.log("if else practice question");
console.log("Th popcorn Price");
console.log("Choose the size -{XL,L,M,S}");
let size='M';
let price;
if(size==='S')
{   price=50;
    console.log(`You have choosen 'S',then the price is`,price);
}
else if(size==='M')
    {   price=100;
        console.log(`You have choosen 'M',then the price is`,price);
    }
else if(size==='L')
    {   price=200;
        console.log(`You have choosen 'L',then the price is`,price);
    }
else if(size==='XL')
    {   price=250;
        console.log(`You have choosen 'XL',then the price is`,price);
    }
else{
    console.log("you dont have chosen anyting");
}
//nested if-else
console.log("nested if-else practice question");
console.log("printing grade according to marks");
let marks=98;
console.log("marks=",marks);
if(marks>=33)
{
    console.log("student is passed");
    if(marks<=80){
        console.log("he got grade A");
    }
    else if(marks>=90){
        console.log("he got grade O");
    }
}
else{
    console.log("student is Failed");
}
//switch statement
console.log("Practice question-Printing Day")
let num=5;
switch(num){
    case 0:console.log("Sunday"); break;
    case 1:console.log("Monday"); break;
    case 2:console.log("Tuesay"); break;
    case 3:console.log("Wednesday"); break;
    case 4:console.log("Thrusday"); break;
    case 5:console.log("Friday"); break;
    case 6:console.log("Saturday"); break;
    default: console.log("you have't choose b/w (0-6)");
}


