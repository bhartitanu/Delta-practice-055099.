let student={
    name:"Tanu",
    age: 23,
    gender:"Female"
};
console.log("Student as object",student);
console.log("student.age,student.gender,student.name:-",student.age,student.gender,student.name);
console.log("student['age],student['gender'],student['name']:-",student["age"],student["gender"],student["name"]);

let City={
    name:"baroda",
    temp: "30 deg C",
    streets:["lodhi","gt","achal","ramgat"]
};
console.log("city:-",City);
let Post={
    username:"@Bharti055099",
    content:"This is my first post",
    likes:290,
    repost:25,
    logs:["@mansi","@tirbha","@delta"]
};
City.temp="32 deg C";
console.log("After changing the temprature to City:-",City);
City.oldname="Vadodara";
console.log("After adding oldname in City:-",City);
const classInfo={
    aman:{
        grade:"A+",
        city:"Delhi"
    },
    rahul:{
        grade:"A",
        city:"Agra"
    },
    vibha:{
        grade:"O",
        city:"Mathura",
        branch:"Cse"
    }
};
console.log("classInfo=",classInfo);
console.log("asseccing students 1 of class:-",classInfo.aman);
console.log("asseccing students 2 of class:-",classInfo.rahul);
console.log("asseccing students 3 of class:-",classInfo.vibha);
console.log("Accessing rahul's city:-",classInfo.rahul.city);
console.log(Math);
let n=3.20;
console.log(Math.floor(n));
console.log(Math.ceil(n));
let random = Math.random();
 random = random*10;
 random=Math.floor(random);
 console.log("Random from 0-9 =",random);
 random= random+1;
 console.log("Random from 1-10 =",random);
let guess=Math.floor(Math.random()*100)+1;
console.log("Generate the random no b/w 1-100:-",guess);
guess=Math.floor(Math.random()*5)+1;
console.log("Generate the random no b/w 1-5:-",guess);