const express=require("express");
const app= express();
const path= require("path");
const mongoose=require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride= require("method-override"); 
const ExpressError=require("./ExpressError.js");

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
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};

app.get("/",(req,res)=>{
    res.send("app is working");
})

//Index Route
app.get("/chats", asyncWrap(async(req,res)=>{
        let Chats = await Chat.find();
        // console.log(Chats);
        res.render("index.ejs",{ Chats });
    }
));

//new route
app.get("/chats/new",(req,res)=>{
    //throw new ExpressError(403,"Page Not Found");
    res.render("new.ejs");
});

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

//New-Show Route 
app.get("/chats/:id", asyncWrap(async (req,res,next)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    if(!chat){
      return  next(new ExpressError(500,"Chat not found"));
    };
    res.render("edit.ejs",{ chat });
}));

//create route
app.post("/chats", asyncWrap(async (req,res,next)=>{
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
}));

//edit route
app.get("/chats/:id/edit",asyncWrap( async (req,res)=>{
   try{
       let { id }= req.params;
       let chat = await Chat.findById(id);
       res.render("edit.ejs",{ chat });
   } catch (err){
    next(err);
   }
}));

//Update route
app.put("/chats/:id",asyncWrap(async (req,res)=>{
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
}));

//deleteroute
app.delete("/chats/:id",asyncWrap(async (req,res)=>{
    let {id}= req.params;
    let deletedChat= await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
}));

const handleValidationError = (err)=>{
    console.log("This was Validation Error .Please follow Rules of Chats");
    console.dir(err);
    return err;
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError"){
        err=handleValidationError(err);
    }
    next(err);
});

//error handling middleware
app.use((err,req,res,next)=>{
    let { status=500, msg= "Some Error Occured" }=err;
    res.status(status).send(message);
});

app.listen("8080",()=>{
    console.log("app is listening on port 8080");
});
