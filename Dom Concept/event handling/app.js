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

let form=document.querySelector("form");
form.addEventListener("submit",function()
{
    event.preventDefault();
    alert("form submitted");

});
    let user=document.querySelector("#username");
    let pass=document.querySelector("#password");
    // console.log("user=",user.value);
    // console.log("pass=",pass.value)
    console.log(form.elements[0].value);
    console.log(form.elements[1].value);
    user.addEventListener("input",function(){
        console.log("the value is ",this.value);
    })
    
    user.addEventListener("change",function(){
        console.log("the username is ",this.value);
    })
    pass.addEventListener("change",function(){
        console.log("the username is ",this.value);
    })
    let div=document.querySelector("#division");
    ul=document.querySelector("ul");
    lis=document.querySelectorAll("li");
    div.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("div is clicked");
    }); 
    ul.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("ul is clicked");
    });
    for(li of lis){
        li.addEventListener("click",function(){
            console.log("li is clicked");
        });
    }






