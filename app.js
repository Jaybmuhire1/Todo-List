// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//EventListeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
event.preventDefault();

const todoDiv = document.createElement("div"); 
todoDiv.classList.add("todo");

//create new LI 

const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item"); 
todoDiv.appendChild(newTodo);
//Add TODO TO 

// saveLocalTodos(todoInput.value);
//check mark button
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//check trash button
const trashdButton = document.createElement("button");
trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
trashdButton.classList.add("trash-btn");
todoDiv.appendChild(trashdButton);
//Apend to List
todoList.appendChild(todoDiv);
//clear the input
todoInput.value=""; 

}

function deleteCheck(e) {
    event.preventDefault();
   const item = e.target;
    //Delete TODO 
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");                         
        todo.addEventListener("transitionend", function() {
        todo.remove();
        });
    }

    //check mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.dispslay = "flex";
                } else {
                    todo.style.dispaly = "none";
                }
                break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")) {
                        todo.style.dispslay = "flex";
                    } else {
                        todo.style.dispaly = "none";
                    }
                break;
        }
    });
}
// function saveLocalTodos(todos){
//     check --HEY Do you already have thing in there?
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos =[];
//     }else{
//         todos =JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }