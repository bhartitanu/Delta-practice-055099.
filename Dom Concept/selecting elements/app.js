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


