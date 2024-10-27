const exp = require("constants");
const express=require("express");
let app=express();
const path= require("path");

let port =3000;
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res)=>
{
    res.render("home");
});

app.get("/hello",(req,res)=>{
    res.send("Hellow!!");
});

app.get("/rolldie",(req,res)=>
{
    let num=Math.floor(Math.random()*10)+1;
    res.render("rolldie.ejs",{rolldie:num});
});

app.get("/ig/:username",(req,res)=>{
    const followers=["ishita","deepa","soniya","anjali","teena"];
    let {username}=req.params;
    res.render("instagram.ejs",{username,followers});
});

app.get("/pl/:username",(req,res)=>{
    let {username}=req.params;
    const pldata=require("./data.json");
    console.log(pldata);
    if(pldata[username]){
        res.render("plike.ejs",{data:pldata[username]});
    }else{
        res.render("error.ejs");
    }
});

app.listen(port,()=>{
    console.log(`App is listenin on ${port}`);
});
