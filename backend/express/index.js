const express=require("express"); 
const app= express();
//console.dir(app);
let port=8080;
app.listen(port, ()=>{
    console.log("your request is listened on ",port);
});
//app.use((req,res) => {
    console.log("Request recieved");
    //res.send("hi there");
    //res.send(
    //     {
    //         name:"apnacollege",
    //         mentor:"Shardhha Khapra",
    //     }
    //)
    //res.send([3,,7,9,0]); 
    //let code="<ul><li>list1</li><li>list2</li><li>list3</li></ul>";
    //res.send(code);
//});
app.get("/",(req,res)=>{
    res.send("You visited root path");
});
app.get("/apple",(req,res)=>{
    res.send("You visited apple path");
});
app.get("/mango",(req,res)=>{
    res.send("You visited mango path");
});
app.get("*",(req,res)=>{
    res.send("You entered something else !!");
});
app.post("/",(req,res)=>
{
    res.send("you posted a responsed to root .");
});
app.post("/pineapple",(req,res)=>
{
    res.send("no pineapples are sweet .");
});


