let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highscore=0;
let h2=document.querySelector("h2");
let btns=["red","green","yellow","blue"];
document.addEventListener("keypress",function()
{
    if(started == false){
        console.log("The Game is started");
        started=true;

        levelUp();
    }
});
function gameFlash(btn){
 btn.classList.add("gameFlash");
 setTimeout(function() {
    btn.classList.remove("gameFlash");
 }, 250);
};
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
       btn.classList.remove("userFlash");
    }, 250);
   };


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=(`Level ${level}`);
    //choose random class
    let RandIdx=Math.floor(Math.random()*3);
    let Randcolor=btns[RandIdx];
    let Randbtn=document.querySelector(`.${Randcolor}`);
    console.log("genrated color",Randbtn);
    gameSeq.push(Randcolor);
    console.log(gameSeq);
    gameFlash(Randbtn);

}
function checkAns(idx){
   // console.log("cuurent level:", level);
   if(userSeq[idx]===gameSeq[idx])
   {
    if(userSeq.length== gameSeq.length){
        console.log("Same sequence");
        setTimeout(levelUp,1000);
    }
   }
   else{
    let score=level*5;
    h2.innerHTML=`Game Over!Your score was <b>${score}</b></br> Press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    if(score>highscore) {
        highscore=score;
    }
    let h3=document.querySelector("h3");
    h3.innerText=`Your highscore is ${highscore}`;
    reset();
   }

}
 
function btnPress(){
    let btn=this;
    console.log(this);
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}