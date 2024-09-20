let arr=[1,2,3,4,5];
function print(el){
    console.log(el);
}
console.log("using forEach method for printing elemnets:-");
arr.forEach(print);
console.log("using map method for printing double of elemnets:-");
arr.map(function(el){
   console.log(el*2);
})
console.log("using filter method for printing even elemnets:-");
let=arr.filter(function(el){
    if(el%2==0){
        console.log(el);
    }  
});
console.log("using every method for printing true/false for  even elemnets:-",arr.every((el)=>{el%2==0}));
console.log("using some method for printing true/false for  even elemnets:-",arr.some((el)=>{el%2==0}));
let student=[
{
    name:"aman", age:23,marks:30,
},
{
    name:"struti", age:22,marks:23,
},
{
    name:"aman", age:25,marks:25,
}
];

student.forEach((el)=>{
    console.log("name=",el.name);
    console.log("marks=",el.marks);
    console.log("age=",el.age);
});
student.map(
    function(el){
        let r=(el.marks/10)*3;
        console.log("gpa of students:-",r);
    }
);
console.log("using reduce method for printing sum of array:-");
let res=[1,2,3,4].reduce((res,el)=>(res+el));
console.log("sum of array=",res);
let num=[2,3,4,1,3];
console.log("array=",num);
let result=num.reduce(
    (max,el)=>{
        if(el>max){
            return el;
        }
        else{
            return max;
        }
    }
);
let mini=num.reduce(
    (min,el)=>{
        if(el<min){
            return el;
        }
        else{ return min};
    }
);
console.log("finding maximum using reduce:-",result);
console.log("finding manimum using reduce:-",mini);
console.log("deafault parameters");
let sum=(a,b=8)=>{ return a+b;};
console.log("sum(3)=",sum(3));
console.log("sum(9)=",sum(9));
console.log("spread-",..."Apnaghar");
let a=[2,3,4,6];
let b=[1,3,5,7,9];
let newArr=[...a,...b];
console.log("combining 2 arrays using spread:-",newArr);
let data={
    email:"tanu@gmail",
    pass:"abc",
};
let datacopy={...data,id:123};
console.log("accesing object using ",datacopy);
console.log(datacopy.email);
console.log(datacopy.id);
console.log(datacopy.pass);
console.log("The function using the rest:-");
function mul(...agrs){
    return agrs.reduce((m,el)=>m*el);
}
console.log("mul(2,3,4,5,1)-",mul(2,3,4,5,1));
console.log("mul(2,4,3)-",mul(2,4,3));
let names=["tanu","vani","dev","bhavya"];
let [elder,younger,...youngers]=names;
console.log("elder,younger,youngers:-",elder,younger,youngers);
const emp={
    name:"jatin",
    comp:"Infosys",
    username:"jatin23@902",
    pass:"absp"
};
let { username:user,city="mumbai"}=emp;
console.log("emp",emp);
console.log(user);
console.log("Using destructuring on object:-",emp.name,city,user);
