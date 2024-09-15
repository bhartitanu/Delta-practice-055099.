let todo=[];
let req = prompt("Enter your request in Todo App:-");
while(true){
    if(req=="quit")
    {
        console.log("You are quitting App");
        break;
    }
    if(req=="add"){
        item=prompt("Enter  the item you want to add in list ");
        todo.push(item);
        console.log("Item added");
      }
    else if(req=="show"){
          console.log("---------------------");
          for(let i=0;i<todo.length;i++){
              console.log(i,todo[i]);
          }
          console.log("---------------------");
    }
    else if(req=="delete")
    {
        let index=prompt("Enter the index of item you want to delete:");
        todo.splice(index,1);
        console.log("Item deleted");
      }
    else{
        console.log("wrong choice!!");
      }
    req= prompt("Enter your request in Todo App:-");
}

