const express=require("express");
const app= express();
const path= require("path");
const mongoose=require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride= require("method-override"); 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then((res)=>{
    console.log("connection is succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
};

app.get("/",(req,res)=>{
    res.send("app is working");
})

//Index Route
app.get("/chats", async (req,res)=>{
    let Chats = await Chat.find();
    // console.log(Chats);
    res.render("index.ejs",{ Chats });
});
//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
});

//create route
app.post("/chats",(req,res)=>{
 let { from ,msg ,to}=req.body;
 let newChat =new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
 });

 newChat.save().then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.log(err);
 });
 res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit", async (req,res)=>{
    let { id }= req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{ chat });
});

//Update route
app.put("/chats/:id",async (req,res)=>{
  let { id }= req.params;
  let { msg:newMsg }=req.body;
  console.log(newMsg)
  let updatedChat= await Chat.findByIdAndUpdate(
    id,
    {msg:newMsg},
    {runValidators:true},
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//deleteroute
app.delete("/chats/:id",async (req,res)=>{
    let {id}= req.params;
    let deletedChat= await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.listen("8080",()=>{
    console.log("app is listening on port 8080");
});
