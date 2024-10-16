console.log("HII");
// console.log(process.cwd());
// let n=8;
// for(let i=0;i<n;i++){
//     console.log("hello",i+1);
// }
//console.log(process.argv);
let agrs= process.argv;
for (let i=2;i<agrs.length;i++){
  console.log("hello to",agrs[i]);
}
const read =require("./math.js");
console.log("reading",read.add(4,5));
console.log(read.pi);

const util=require('./util');
console.log(util);
