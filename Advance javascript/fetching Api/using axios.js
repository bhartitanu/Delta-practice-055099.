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