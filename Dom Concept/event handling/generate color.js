let h1=document.querySelector("h1");
let colorBtn=document.querySelector("#color-btn");
let colorBox=document.querySelector("#color-box");

colorBtn.addEventListener("click",function(){
    let randomColor=getRandomColor();
    h1.innerText=randomColor;
    console.log("the color is updated");
    colorBox.style.backgroundColor=randomColor;
    colorBox.addEventListener("mouseenter",function(){
        console.log("you have entered in color box");
    });
});
function getRandomColor(){
    let blue=Math.floor(Math.random()*255);
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}

let input=document.querySelector("#character ");
input.addEventListener("keydown" ,function(event)
    {
    console.log("Character direction");
    if(event.code =="KeyU"){ 
        console.log("Character moved Upward");
    } else if(event.code =="KeyB"){
        console.log("Character moved Backward");
    } else if(event.code =="KeyL"){
        console.log("Character moved to Left");
    } else if(event.code =="KeyR"){
        console.log("Character moved to Right");
    } else{
        console.log("you have wrong choice");
    }
});
