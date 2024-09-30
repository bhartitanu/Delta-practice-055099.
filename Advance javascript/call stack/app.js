
function hello(){
    console.log("you are inside hello");
    console.log("hello");
}
function demo(){
    console.log("you are inside demo");
    console.log("calling hello fxn");
    hello();
}
console.log("calling demo");
demo();
console.log("after demo");
console.log("visualizing call satck");
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans=two()+one();
    return ans;
}
let result=three();
console.log("result=",result);
console.log("The js is single-threaded.Eg-");
console.log("start");
setTimeout(()=>{
    console.log("this was be handled by browser for 2s");
},2000);
console.log("end");
console.log("lets see callback hell now");
h1=document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        console.log("color changed");
        if(nextColorChange)
            nextColorChange();
    },delay);
}
changeColor("red",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("pink",1000);
            });
        });
    });
});
