const mongoose=require("mongoose");
const Chat = require("./models/chat.js");

main()
.then((res)=>{
    console.log("connection is succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}

let allChats=[
    {
        from:"Diya",
        to:"Meena",
        msg:"You look preety in your profile picture",
        created_at:new Date(),
    },
    {
        from:"Mehul",
        to:"Prati",
        msg:"send me today notes",
        created_at:new Date(),
    },
    {
        from:"Prateek",
        to:"Bharti",
        msg:"Dont disturb me..I am live streaming .",
        created_at:new Date(),
    },
    {
        from:"Riya",
        to:"Kirti",
        msg:"Jenaal is not doing good with me .She kept ignoring me.",
        created_at:new Date(),
    },
    {
        from:"Kirti",
        to:"Diya ",
        msg:"coffee ? Tommorrow at my place.",
        created_at:new Date(), 
    },
    {
        from:"Danish",
        to:"Prati",
        msg:"Have you seen today's notice?",
        created_at:new Date(),
    },
    {
        from:"Raveena",
        to:"Kirti",
        msg:"Jeevan is not feeling good . You should call him ",
        created_at:new Date(),
    },
];

Chat.insertMany(allChats)
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

