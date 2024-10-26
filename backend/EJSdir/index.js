const express=require("express");
let app=express();
const path= require("path");

let port =3000;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res)=>
{
    res.render("home");
})
app.listen(port,()=>{
    console.log(`App is listenin on ${port}`);
});