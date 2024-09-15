console.log("String Methods");
let str = "    Tanu Gupta   ";
console.log("str=", str);
console.log("After Trimming:-", str.trim());
console.log("after Uppercasing:-", str.toUpperCase());
console.log("after lowecasing", str.toLowerCase());
console.log("str.slice(6):-", str.slice(6));
console.log("str.slice(5,9):-", str.slice(5, 9));
console.log("str.slice(-5):-", str.slice(-5));
console.log("find index of n-", str.indexOf("n"));
console.log("find index of Tanu-", str.indexOf("Tanu"));
console.log("replace gupta with saxena:-", str.replace("Gupta", "Saxena"));
console.log("repeat the name 3 times", str.repeat(3));
console.log("performing method chaining eg-repeat the name 3 times :-", str.trim().repeat(3));

console.log("Practice question");
let msg="help!";
console.log("after triming the message and capitalizing it:--",msg.trim().toUpperCase());
let stringname ="ApnaCollege";
console.log("Stringname:-",stringname);
console.log("stringname.slice(4,9):-",stringname.slice(4,9));
console.log("stringname.indexOf('na'):-",stringname.indexOf('na'));
console.log("stringname.replace('Apna','Our'):-",stringname.replace('Apna','Our'));
console.log("stringname.slice(4).replace('ll','tt'):-",stringname.slice(4).replace('ll','tt'));

