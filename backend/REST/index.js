let express =require("express");
let app=express();
let port = 8080;
let path =require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {   id:uuidv4(),
        username:"teriin",
        Skills:"exploring",
        content :"Like to learn and explore"
    },
    {    id:uuidv4(),
        username:"teesha",
        Skills:"exploring,coding",
        content :"Like to eat sweets and read while travelling"
    },
    {    id:uuidv4(),
        username:"manu",
        Skills:"Developer",
        content :"Like to code and express POVs"
    },
    {     id:uuidv4(),
        username:"kaelinns",
        Skills:"Manufacturing",
        content :"Like to Marketing and gossiping"
    },
];
//index route:-show all post
app.get("/posts",(req,res) => {
res.render("index.ejs",{posts});
});
//create route:-send a form
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
//adding form data to backend
app.post("/posts",(req,res)=>{
    let {username,Skills,content}=req.body;
    let id= uuidv4();
    console.log(id);
    posts.push({id,username,Skills,content});
    res.redirect("/posts");
});
//show route:-showing post in detail
app.get("/posts/:id",(req,res)=>{
    let { id }=req.params;
    let post =posts.find((p)=> id === p.id);
    //console.log(post);
    res.render("show.ejs",{ post });
    //res.send("request working");
});
//to update the data of post using id
app.patch("/posts/:id",(req,res)=>{
    let { id }=req.params;
    let post =posts.find((p)=> id === p.id);
    let newcontent=req.body.content;
    console.log(newcontent);
    post.content=newcontent;
    console.log(id);
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res)=>{
    let { id }=req.params;
    let post =posts.find((p)=> id === p.id);
    res.render("edit.ejs",{ post });
});
//deleting post 
app.delete("/posts/:id",(req,res)=>{
    let { id }=req.params;
    posts =posts.filter((p)=> id !== p.id);
    res.redirect(" /posts ");
});
app.listen(port,()=>{
    console.log(`App is listining on ${port}`);
});
