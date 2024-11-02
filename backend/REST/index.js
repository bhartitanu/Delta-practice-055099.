let express =require("express");
let app=express();
let port = 8080;
let path =require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.set(express.static(path.join(__dirname,"public")));

let post=[
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
]

app.get("/post",(req,res)=>{
res.render("index.ejs");
});

app.listen(port,()=>{
    console.log(`App is listining on ${port}`);
});