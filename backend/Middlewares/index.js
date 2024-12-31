const express=require("express");
const app=express();
const ExpressError= require("./ExpressError");

// app.use("/",(req,res,next)=>{
//     console.log("Hi,I am 1st Middleware");
//     next();
// });

// app.use("/",(req,res,next)=>{
//     console.log("Hi,I am 2nd Middleware");
//     next();
// });


//logger
app.use((req,res,next)=>{
    req.responseTime=Date.now();
    console.log(req.method,req.hostname,req.path,req.responseTime);
    next();
});

//access-token
app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if( token ==="accesstoken") {
        next();
    }
    //res.send("Access Denied");
    else {
        throw new ExpressError(401,"Access Denied");
    }
});

app.get("/",(req,res)=>{
    res.send("I am groot");
});

app.get("/api",(req,res)=>{
    res.send("data");
});

app.get("/random",(req,res)=>{
    res.send("Hi, I am random");
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access for admin is granted only");
});

app.get("/err",(req,res)=>{
    res.send(err);
})
//customised error handling middleware
app.use((err,req,res,next)=>{
    let {status=500,msg="Some Error Occured"}=err;
    res.status(status).send(msg);
});

//first error handling class
// app.use((err,req,res,next)=>{
//     console.log("-----Erorr----");
//     res.send(err);
// });

//second error handling class
// app.use((err,req,res,next)=>{
//     console.log("----2nd Error Middleware----");
//     next(err);
// })

//404
app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});

app.listen("8080",()=>{
    console.log("app is listening on port 8080");
});

