// console.log("setting up the code for promise in call back");
// function saveToDb(data,success,failure){
//  let networkSpeed=Math.floor(Math.random()*10)+1;
//  if(networkSpeed>4){
//     success();
//  }
//  else{
//   failure();
//  }
// };

// saveToDb("tanugupta",
//     ()=>{
//     console.log("Succes: your data  is saved");
//     saveToDb("Tanu",
//         ()=>{console.log("Succes2: your data2  is saved");
//             saveToDb("Bharti",
//                 ()=>{ console.log("Succes3: your data3  is saved"); },
//                 ()=>{ console.log("Failure3: Weak connection your data3 is not saved"); }
//             )
//         },
//         ()=>{console.log("Failure2: Weak connection your data2 is not saved");}
//     )
// },
//     ()=>{
//         console.log("Failure: Weak connection your data is not saved");}
// );

console.log("setting the same function using promise");
function saveToDb2(data){
    return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
       resolve();
    }
    else{
     reject();
    }

    });
};

saveToDb2("new Tanu gupta")
.then(
    ()=>{console.log("the promise is resolved");})
.catch(
    ()=>{console.log("the promise is rejected");}
)
console.log(" using promise chaining");

saveToDb2("Tanisha gupta")
.then((result) => {
    console.log("data1 is resolved :",result);
    return saveToDb2("Dev");
})
.then((result) => {
    console.log(" data2 is resolved ",result);
    return saveToDb2("Vani");
})
.then((result) => {
    console.log("data3 is resolved ",result);
})
.catch((error) => {
    console.log("the data is not saved");
    console.error(error);
});