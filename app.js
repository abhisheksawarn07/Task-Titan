let todo = [];

while(true){
    let  req = prompt("Press 0 to quit\nPress 1 to add a task\nPress 2 to delete a task\nPress 3 to see the task");
    if(req==0){
        console.log("Quitted");
        break;
    }

    if(req==3){
        console.log(".................");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log(".................");
        
    } else if(req==1){
        let task = prompt("Enter your task");
        todo.push(task);
        console.log("Task added successfully");
    } else if(req==2){
        let idx = prompt("Enter the index of task");
        todo.splice(idx,1);
        console.log("Task delted");
    }
    else{
        alert("Something went wrong\nTry with valid argument");
    }

}