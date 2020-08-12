// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EventListeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

//Functions
function addTodo(event) {
event.preventDefault();

const todoDiv = document.createElement("div"); 
todoDiv.classList.add("todo");

//create new LI 

const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item'); 
todoDiv.appendChild(newTodo);
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTM = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//check trash button
const trashdButton = document.createElement('button');
trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
trashdButton.classList.add("trash-btn");
todoDiv.appendChild(trashdButton);
//Apend to List
todoList.appendChild(todoDiv);
todoInput.value=""; 

}

