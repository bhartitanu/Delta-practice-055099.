let express =require("express");
let app=express();
let port = 8080;
let path =require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username:"teriin",
        Skills:"exploring",
        content :"Like to learn and explore"
    },
    {
        username:"teesha",
        Skills:"exploring,coding",
        content :"Like to eat sweets and read while travelling"
    },
    {
        username:"teriin",
        Skills:"exploring",
        content :"Like to learn and explore"
    },
    {
        username:"manu",
        Skills:"Developer",
        content :"Like to code and express POVs"
    },
    {
        username:"kaelinns",
        Skills:"Manufacturing",
        content :"Like to Marketing and gossiping"
    },
];

app.get("/posts",(req,res) => {
res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
    let {username,Skills,content}=req.body;
    posts.push({username,Skills,content});
    res.send("Post request Working");
});
app.listen(port,()=>{
    console.log(`App is listining on ${port}`);
});
