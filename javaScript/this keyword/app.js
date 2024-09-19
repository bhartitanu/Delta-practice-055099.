console.log("This keyword:-");
const student={
    name:"sneha",
    eng:30,
    math:34,
    hindi:39,
    getAvg(){
        let avg=(this.eng+this.hindi+this.math)/3;
        return avg;
    }
}
console.log(student.getAvg());
try{
    console.log(a);
}
catch{
    console.log("This is error");
}
const  sum =(a,b)=>{
    console.log(a+b);
}
console.log("arrow function sum(2,5):-");
console.log(sum(2,5));
const cube=(n)=>{
    console.log(n*n*n);
}
console.log("Arrow function cube(7)");
console.log(cube(7));
console.log("Implicit Return in Arrow function");
const mul=(x,y)=>{x*y};
setTimeout(()=>{
    console.log("Apna college");
},2000);
let id=setInterval(()=>{
    console.log("Apna ")
},1000);
let id2=setInterval(()=>{
    console.log("Apna ghar")
},3000);
const st={
    name:"Rahul",
    marks:34,
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=>{
        console.log(this);
        return this.marks;
    }
}
console.log(st.getName);
console.log(st.getMarks);
console.log("Practice Q-1");
const square=(num)=>{
    console.log(num*num);
};
square(5);
square(68);
square(39);
console.log("Practice Q-2");
let id3=setInterval(()=>{
    console.log("Hello world")
},2000);
setInterval(()=>{
    clearInterval(id3);
},10000);


