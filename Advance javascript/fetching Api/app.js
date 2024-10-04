let url=("https://cat-fact.herokuapp.com/facts");
// fetch(url)
// .then((res1)=>{
//     response1=res1.json();
//     return response1;
// })
// .then((data1)=>{
//     let facts=data1[0].text;
//     console.log(facts);
//     return fetch(url);
// })
// .then((res2)=>{
//     response2=res2.json();
//     return response2;
// })
// .then((data2)=>{
//     let facts=data2[1].text;
//     console.log(facts);
// })
// .catch((err)=>{
//     console.log(err);
// })
async function getFact() {
    try{
        let res=await fetch(url);
        let data=await res.json();
        for (i=0;i<data.length;i++){
           await  console.log(`The fact ${i+1} is ${data[i].text}.`)
       }
        let res2=await fetch(url);
        let data2=await res2.json();
        let fact2=data2[2].text;
        console.log("another fact :",fact2);
    }
    catch(err){
        console.err(err);
    }
}
console.log("facts:-");
console.log(getFact());