const { faker } = require('@faker-js/faker');
const mysql= require("mysql2");
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:"bhartigupta31#",
});

let getRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];};

// //Inserting user value in table
// //let q="Show Tables";
// let query=" Insert into user (id,username,email,password) values ? ";
// users=[
//   ["2","samarthan","samrath@ad.com","33000"],
//   ["3","dolly","dipeti@gmail.com","40000"],
// ];

// //inserting in bulk(using faker)

// let data =[];
// for( let i=1; i<=10; i++)
// {
//   data.push(getRandomUser());//getting 10 fake data
// }

//console.log(data);
// try{
//   connection.query( query, [data] , function (err,result) {
//     if (err) throw err;
//     console.log(result);
//    // console.log(result[0]);
//    //console.log(result[1]);
//   });
// }
// catch(err){
//   console.log(err);
// }

// connection.end();

//home route
app.get("/",(req,res)=>{
  let q=`Select count(*) from user`;
  try{
    connection.query(q,(err,result) => {
      if(err) throw err;
      let count =result[0]["count(*)"];
      res.render("home.ejs",{count });
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  } 
})

//show user route
app.get("/user",(req,res)=>{
  let q=`Select * from user`;
  try{
    connection.query(q,(err,users) => {
      if(err) throw err;
      // console.log(result);
      res.render("show.ejs",{users});
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  } 
});

//edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`Select * from user where id = '${id}'`;
  try{
    connection.query(q,(err,result) => {
      if(err) throw err;
      let user=result[0];
      res.render("edit.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  } 
});

//update(edit form) route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formPassword ,username: newUsername} =req.body;
  let q=`Select * from user where id = '${id}'`;
  try{
    connection.query(q,(err,result) => {
      if(err) throw err;
      let user=result[0];
      if(formPassword!=user.password){
        res.send("Wrong password");
      }else{
        let q2=`Update user set username ='${newUsername}' where id ='${id}'`;
        connection.query(q2,(err,result)=>{
          if (err) throw err
          // res.send(result);
          res.redirect("/user");
        }
      )}
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  } 
});

//new user
app.get("/user/new",(req,res)=>{
  res.render("newUser.ejs");
});
//post newuser to database
app.post("/user",(req,res)=>{
  let { username ,email , password }=req.body;
  let id=faker.string.uuid();
  let q=`Insert into user (id,username,email,password) values (?,?,?,?)`;
  let newUser=[id,username,email,password];
  try{
    connection.query(q,newUser,(err,result) => {
      if(err) throw err;
      console.log(result);
      res.redirect("/user");
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  } 
});
//confirmation form to delete user
app.get("/user/:id/delete",(req,res)=>{
  let {id}=req.params;
  let q=`Select * from user where id = '${id}'`;
  try{
    connection.query(q,(err,result) => {
      if(err) throw err;
      let user=result[0];
      res.render("delete.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  } 
});

//delete user 
app.delete("/user/:id",(req,res)=>{
  let { id }=req.params;
  let {password,email} =req.body;
  let q=`Select * from user where id = '${id}'`;
  try{
    connection.query(q,(err,result) => {
      if(err) throw err;
      let user=result[0];
      if((password!=user.password)&&(email!=user.email)){
        res.send("Wrong credentials");
      }else{
        let q2=`delete from user where id ='${id}'`;
        connection.query(q2,(err,result)=>{
          if (err) throw err
          // res.send(result);
          res.redirect("/user");
        }
      )}
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  } 
});

app.listen("8080",()=> {
    console.log("app is listening on port 8080");
  });



