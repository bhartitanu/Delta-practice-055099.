let btn=document.querySelector("button");
let inp=document.querySelector("input");
btn.addEventListener("mouseout",function()
{
    console.log("you are outside a button");
});
    
inp.addEventListener("keypress",function(event){
    console.log("you have press",event.key);
});
let para=document.querySelector('p');
console.log(document.scrollingElement);
document.addEventListener("scroll",function(){
    document.scrollingElement=""
});
window.onload=alert("page is loaded");
btn.addEventListener("click",function(){
btn.style.backgroundColor="green";
});
let head=document.querySelector("h2");
inp.addEventListener("keypress",function(event){
    let key=event.code;
    if((key >=65 && key<=90)||(key>=97 && key<=122)||key===32){
        head.innerText=input.value+event.key;
    }else{
        event.preventDefault();
    }
});

