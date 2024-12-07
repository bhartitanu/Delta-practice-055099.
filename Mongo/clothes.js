const mongoose= require("mongoose");

main()
.then((res)=>{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const clothSchema=new mongoose.Schema({
    company:{
        type:String,
    },
    fabric:{
        type:String,
        required:true,
    },
    type:{
        type:String,
    },
    price:{type:Number,
        min:[1,"Too loo price"]
    }
});

const cloth= new mongoose.model("cloth",clothSchema);

//new cloth
// const cloth1=new cloth({
//     company:"Puma",
//     fabric:"Woolan",
//     type:"Sporty"
// });
// const cloth2=new cloth({
//     company:"Allen Solly",
//     fabric:"silk",
//     type:"Ethenic",
//     price:1900,
// });

// cloth1.save().then((res)=>{
//     console.log("Data inserted",res);
// }).catch((err)=>{
//     console.log(err);
// });

// cloth2.save().then((res)=>{
//     console.log("Data inserted",res);
// }).catch((err)=>{
//     console.log(err);
// });

cloth.findByIdAndUpdate("6751aa1d50bd3c437991161c",{price:-12},{runValidators:true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});
