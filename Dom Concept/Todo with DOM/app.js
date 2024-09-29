inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
let li=document.createElement("li");
li.innerText="";
li.innerText=inp.value;
let delbtn=document.createElement("button");
delbtn.innerText="Delete";
li.appendChild(delbtn);
ul.append(li);
inp.value="";
delbtn.classList.add("del");
})

ul.addEventListener("click",function(event)
{
   if(event.target.nodeName=="BUTTON")
   {
    let par=event.target.parentElement;
    par.remove();
   }   
});
