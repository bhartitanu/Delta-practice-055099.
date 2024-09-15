//lerning literals
console.log("Learning concepts");
let firstName="tanu";
let lastName="gupta";
let fullName= firstName+" "+lastName;
console.log(fullName);
//operators
let a=7;
let b=2;
console.log(`a=${a} and b=${b}`);
//airthmatic operators
console.log(`a+b is ${a+b}.`);
console.log(`a-b is ${a-b}.`);
console.log(`a*b is ${a*b}.`);
console.log(`a/b is ${a/b}.`);
console.log(`a%b is ${a%b}.`);
console.log(`a**b is ${a**b}.`);
//unary operators
console.log(`The incremment of a is ${++a}`);
console.log(`The decrement of b is ${--b}`);
//assignment operator 
let c;
console.log(`Assigning the value of a to c is ${c=a}`);
console.log(`adding the value of a to c again will give ${c+=a}`);
console.log(`while subtracting  the value of a to c will give ${c-=a}`);
//comparison operator
console.log(`is a greater than b ? = ${a>b}`);
console.log(`is a equal to c ? = ${a==c}`,c);
//strict comparison operator
let str='1';
console.log(`is str == b i.e ${str}==${b}? ${str==b}`);
console.log(`lets check now, is str === b i.e. ${str}===${b}? ${str===b}`);
console.log("this means that === operator is strict comparison operator ");
//comparing non-number 
console.log(`is a>p? ${'a'>'p'}`);
console.log(`is #==^? ${'#'=='^'}`);
