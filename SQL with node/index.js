const { faker } = require('@faker-js/faker');
const mysql= require("mysql2");

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

//Inserting user value in table
//let q="Show Tables";
let query=" Insert into user (id,username,email,password) values ? ";
users=[
  ["2","samarthan","samrath@ad.com","33000"],
  ["3","dolly","dipeti@gmail.com","40000"],
];

//inserting in bulk(using faker)

let data =[];
for( let i=1; i<=10; i++)
{
  data.push(getRandomUser());//getting 10 fake data
}

//console.log(data);

try{
  connection.query( query, [data] , function (err,result) {
    if (err) throw err;
    console.log(result);
   // console.log(result[0]);
   //console.log(result[1]);
  });
}
catch(err){
  console.log(err);
}

connection.end();



