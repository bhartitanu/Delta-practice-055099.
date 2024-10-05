//Activity-1 get random cat fact
let btn=document.querySelector("#btn1");
let p=document.querySelector("#output");
btn.addEventListener("click",async ()=>{
    let fact= await getfact();
    console.log(fact);
    p.style.color="navy";
    p.innerText=fact;
});
let url="https://catfact.ninja/fact";
async function getfact(){
try{
    let res= await axios.get(url);
    let fact=res.data.fact;
   return fact;
}
catch(e){
    console.log(e);
}}
//activity-2
let btn2=document.querySelector("#btn2");
let img=document.querySelector("img");
btn2.addEventListener("click",async()=>
{
    let pic=await getpic();
    console.log("pic url=",pic);
    img.setAttribute("src",pic);
})
let url2="https://dog.ceo/api/breeds/image/random";
async function getpic() {
    try{
        let res=await axios.get(url2);
        let pic=res.data.message;
        return pic;
    }
    catch(e){
        console.log(e);
    }
}
