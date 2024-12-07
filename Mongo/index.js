const mongoose = require('mongoose');

main()
.then((res)=>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

//to insert one user
// const User1=new User({
//   name:"Tanu",
//   email:"Tanu@gmail.com",
//   age:21,
// });
//to insert another one user

// const User2=new User({
//   name:"Teesa",
//   email:"Tessa@gmail.com",
//   age:22,
// });

// User1.save();
// User2.save();

//to insert multiple user in once 

// User.insertMany([
//   {name:"Adam",email:"adam@yahoo.com",age:78},
//   {name:"Eela",email:"Eela@yahoo.com",age:78},
//   {name:"Duke",email:"duke@yahoo.com",age:78},
//   {name:"Mea",email:"mea445@yahoo.com",age:78},
// ])
// .then((res)=>{
//   console.log("Data updated",res);})
// .catch((err)=>{console.error(err);
// });

//find 
//User.find().then((data)=>{
//  console.log(data);
//});
// User.find({name:"Duke"}).then((data)=>{
//   console.log(data);
// });
// User.findOne({age:22}).then((data)=>{
//   console.log(data);
// })
// User.findById('674f2cbce1fbea1726abe45c').then((data)=>{
//   console.log(data);
// });

//Update
// User.updateOne({name:"Adam"},{age:45}).then((res)=>{
//   console.log(res);
// });
// User.updateMany({name:"Duke"},{age:35}).then((res)=>{
//   console.log(res);
// });

//Delete
// User.deleteOne({name:"Adam"}).then((data)=>{
//   console.log(data);
// });
// User.deleteMany({name:"Eela"}).then((data)=>{
//   console.log(data);
// });


//find and update
// User.findOneAndUpdate({name:"Mea"},{age:23},{new:true}).then((res)=>{
//   console.log(res);
// });

// User.findByIdAndDelete(('674f2fe987dc051e6403c31e'),{age:78},{includeResultMetaData:true}).
// then((res)=>{ console.log(res); });
