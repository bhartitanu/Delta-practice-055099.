console.log("getElemnetById");
console.log(document.getElementById("description"));
let mainimg=document.getElementById("mainImg");
console.log(mainimg);
console.dir(mainimg);
console.log("getElementByClassName");
let smallImg=document.getElementsByClassName("oldImg");
console.log(smallImg);
console.log("Changing the  image");
for(let i=0;i<smallImg.length;i++){
    console.dir("smallImg",smallImg[i]);
    smallImg[i].src="img/spiderman_img.png";
    console.log(`the ${i} image is changed`);
}
console.log("getElementByTagName");
let tag=document.getElementsByTagName("p");
console.log(tag);
console.log("Query selector");
let select=document.querySelector("p");
console.log("p tag=",select);
let sec=document.querySelector("#description");
console.log("selection by id name=",sec);
let sel=document.querySelector(".box");
console.log("selection by class name=",sel);
console.log("selectig all same elements");
let all=document.querySelectorAll("p");
console.log(all);
let allindiv=document.querySelector("div img");
console.log("all image in divs",allindiv);
let selector=document.querySelector(".images");
console.log(selector);
console.log(sec.innerHTML);
console.log(sec.textContent);
console.log(sel.innerText);
console.log(sel.innerHTML);
console.log("getAttribute,setAttribute");
console.log(sel.getAttribute('class'));
sel.setAttribute(sel.getAttribute('class'),'newbox');
console.log(sel);
let heading=document.querySelector('h1');
heading.style.color="red";
console.log("color of heading changed");
heading.style.fontSize="2.3rem";
console.log("font size of heading changed");
console.log("let change the color of all the itmes in list")
let items=document.querySelectorAll(".box a");
console.log(items);
for(let i=0;i<items.length;i++){
    items[i].style.color="coral";
}
console.log("color of list items is changed");
console.log(heading.classList);
heading.classList.add("underline-wavy");
heading.classList.add("newfont");
console.log(heading.classList);
sec.classList.add("newfont");
heading.classList.remove("newfont");
console.log(heading.classList.contains("newfont"));
console.log(sel.classList   );
console.log(sel.classList.toggle("newfont"));
let ul=sel.children[1];
console.log(ul.children);
console.log(ul.childElementCount);
console.log(ul.children[1]);
console.log(ul.previousElementSibling);
console.log(ul.children[1].nextElementSibling);
console.log(heading.nextElementSibling);
let newpara=document.createElement('p');
let body=document.querySelector("body");
newpara.append("hi there ");
body.appendChild(newpara);
newpara.classList.add("newfont");
let box=document.querySelector('.box');
box.prepend(newpara);
let btn=document.createElement('button');
btn.append("click me");
box.insertAdjacentElement('afterend',btn);
box.append("inserting a button");
box.insertAdjacentElement('beforeend',btn);
box.append("click the button");
box.removeChild(btn);
smallImg[2].remove();



