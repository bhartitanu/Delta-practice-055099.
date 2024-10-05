let u="https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res=await axios.get(u);
        let data=await res.data;
        console.log(data.fact);
    }
    catch(e){
        console.log(error);
    }
}
let url2=" https://icanhazdadjoke.com/"
async function getjoke(){
    try{
       const config={ header:{Accept:"application/json"} };
       let res= await axios.get(url,config);
       console.log(res.data[1].text);
    }
    catch(error){
        console.log(error);
    }
}