console.log("using Async function");
async function greet(){
    // throw "some error" will only reject the promise
    return "hello"; //eill only resolve(fulfilled) the promise
}
greet()
.then((resolved)=>{
    console.log("the error is resolved");
})
.catch((rejected)=>
{
    console.log("the error is rejected");
});
console.log(greet());
let h3=document.querySelector("h3");
function getNum(){
    return new Promise((resolve,reject)=>
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            h3.innerText=`Num=${num}`;
            console.log("num=",num);
            resolve();
        },1000)
);}
async function printNum(){
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
console.log(printNum());

console.log("Using await keyword");
let h1=document.querySelector("h1");
function colorChange(color,delay){
 return new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        h1.style.color=color;
        console.log(`color changed to this ${color}`);
        resolve("color changed!");
    },delay);
});
}

async function show(){
    await colorChange("red",1000);
    await colorChange("green",1000);
    await colorChange("yellow",1000);
    await colorChange("pink",1000);
    await colorChange("blue",1000);

    return "done";
}
console.log(show());
console.log("Error handling with await ");
let h2=document.querySelector("h2");
function newNum(){
    return new Promise((resolve,reject)=>
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num<4){
                h2.innerText=`N=${num}`;
                console.log("N=",num);
                resolve();
            }
            reject();
    },1000));  
}
async function demo()
{
    try{
        await newNum();
        await newNum();
        await newNum();
    }
    catch(err){
        console.log("Error Caught");
        console.error(err);
    }

    let a=3;
    console.log(a);
}
console.log(demo());