let input=prompt("What would you like to do?");
const todos=["Revise HTML","Revise CSS","Revise Bootstrap","Revise Javascript","Revise Node.js","Revise Express.js","Revise MongoDB","Revise React.js"];
while(input!=="quit" && input !=='q'){
    if(input==="list"){
        console.log("**********");
        for(let i=0;i<=todos.length-1;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    }else if(input==="new"){
        const newTodo=prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }else if(input==="delete"){
        const index=parseInt(prompt("Ok, enter an index to delete:"));
        if(!Numnber.isNaN(index)){
            const deleted=todos.splice(index,1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }else{
            console.log("unknown index");
        }
    }
    input=prompt("What would you like to do?");
}
console.log("OK, quit the app!.");