console.log("printing on click")
let btns=document.querySelectorAll("button");
// for(btn of btns)
// onclick=function(){
// console.log(`hello button is clicked `);
// }
// btns.onclick;
for(btn of btns)
    {
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",sayhello);
    btn.addEventListener("mouseenter",function(){
        console.log("you enter on btn");
    });
}
function sayName(){
    console.log("Bharti");
};
function sayhello(){
   console.log("hello");
};
console.log("the Event Listener for elements");
let p=document.querySelector('p');
p.addEventListener("dblclick",function(){
    console.log("you have double cicked");
});
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event)
{
    console.dir(event);
console.log("code=",event.code);
console.log("key=",event.key);
});

inp.addEventListener("keyup",function(event)
{
    console.log("key is relesed");
    console.dir(event);
console.log("code=",event.code,event.key);

});






