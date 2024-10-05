let inp=document.querySelector("#input");
let btn=document.querySelector("#btn");
btn.addEventListener("click",async ()=>{
    let country=inp.value;
    console.log(country);
    let colleges=await getName(country);
    console.log(colleges);
     show(colleges);
});
 function show(colleges){
    let list=document.querySelector("#list");
    list.innerHTML="";
     for(i of colleges){
         console.log(i.name);
         let li=document.createElement('li');
         li.innerHTML=i.name;
         list.appendChild(li);
     }
 }

url="http://universities.hipolabs.com/search?country=";
async function getName(country){
    try{
        let res=await axios.get(url+country);
        console.log(res);
        return res.data;
    }
    catch(e){
        console.log("error",e);
        return [];
    }
}
url2='http://universities.hipolabs.com/search?country=India&state-province=';
let inp2=document.querySelector("#input2");
let btn2=document.querySelector("#btn-2");
btn2.addEventListener("click",async ()=>{
    let st=inp.value;
    console.log(st);
    let colleges=await getName2(st);
    console.log(colleges);
     showname(colleges);
});
 function showname(colleges){
    let list=document.querySelector("#list");
    list.innerHTML="";
     for(i of colleges){
         console.log(i.name);
         let li=document.createElement('li');
         li.innerHTML=i.name;
         list.appendChild(li);
     }
}
async function getName2(st){
    try{
        let res=await axios.get(url2+st);
        console.log(res);
        return res.data;
    }
    catch(e){
        console.log("error",e);
        return [];
    }
}