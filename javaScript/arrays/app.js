let num=["gupta",3,30,2.3];
console.log("num=",num);
console.log(num[3]);
let fruits=['apple','banana','papaya','pear']
console.log("fruits=",fruits);
console.log(fruits[2][0]);
num.push(2);
console.log("num.push(2):-",num);
num.pop();
console.log("After poping",num);
num.unshift(9);
console.log("After adding 9 in start",num);
fruits.shift();
console.log("after deleting from start",num);

console.log("Practice Question:");
let start=['january','july','march','august'];
console.log("Start=",start);
start.shift();
start.shift();
console.log(start);
start.unshift('july');
start.unshift('june');
console.log("after adding june",start);

let arr=["red","blue","green","yellow","orange"];
console.log(arr);
console.log("arr.indexOf('blue'):-",arr.indexOf("blue"));
console.log("arr.indexOf('black'):-",arr.indexOf('black'));
console.log("arr.includes('green')",arr.includes("green"));
let color=["black","gray"];
console.log("concatination",arr.concat(color));
console.log("reverse the array:-",arr.reverse());

let cars=["xuv","thar","bmw","mercedes"];
console.log("array of cars:-",cars);
console.log("copy:-",cars.slice());
console.log("cars.slice(1,3):-",cars.slice(1,3));
console.log("cars.slice(3):-",cars.slice(3));
console.log("cars.slice(-2):-",cars.slice(-1));

let days=["sun","mon","tue","thrus","wed","fri","sat"];
console.log("days=",days);
days.splice(3);
console.log("after splicing only 3",days);
days.splice(0,1);
console.log("days.splice(0,4):-",days);
days.splice(1,1,"thrus");
console.log("days.splice(1,1,'thrus'):-",days);
days.splice(3,0,"sat","sun");
console.log("days.splice(3,0,'sat','sun':-",days);

console.log("practice ques2");
let months=['january','july','march','august'];
console.log("months=",months);
months.splice(0,1);
months.splice(1,0,"june");
console.log("after splicing:-",months);

let lan=['c','c++','html','javascript','python','java','c#','sql'];
console.log("languages=",lan);
console.log("the inex of jaascript after reversing the array:-",lan.reverse().indexOf("javascript"));

let s=[3,4,5];
console.log("s=",s);
let str=[3,4,5];
console.log("str=",str);
console.log("s==str",s==str);

console.log("practice question3");
game=[['x',null,0],[null,'x',null],[0,null,'x']];
console.log("game=",game);
game[0][1]=0;
console.log("after adding 0:-",game);
