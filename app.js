//Selectors
const todoInput = document.querySelector(".todo-input");
const todoAddBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const filterSelect = document.querySelector(".filter-todo");
const sortBtn = document.querySelector(".time-sort-btn");

//EventListeners

todoAddBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', removeTodo);
filterSelect.addEventListener('change', filterTodos);
sortBtn.addEventListener('click', sortTodos);





//Functions

function addTodo(event) {
    event.preventDefault();

    if (todoInput.value.trim().length != 0) {

        const todoTaskDiv = document.createElement('div');
        todoTaskDiv.classList.add("todo");

        const completedBtn = document.createElement("input");
        completedBtn.type = "checkbox";
        completedBtn.classList.add("completed-checkbox");
        todoTaskDiv.appendChild(completedBtn);

        const newTodo = document.createElement('li');
        newTodo.classList.add("todo-item");
        newTodo.innerText = todoInput.value;
        todoTaskDiv.appendChild(newTodo);

        const RemoveBtn = document.createElement("button");
        RemoveBtn.classList.add("remove-btn");
        RemoveBtn.innerText = 'x';
        todoTaskDiv.appendChild(RemoveBtn);

        todoList.appendChild(todoTaskDiv);

        todoInput.value = '';
    }

}

function removeTodo(event) {
    const item = event.target;

    if (item.classList[0] === "remove-btn") {
        const removeItem = item.parentElement;
        removeItem.remove();
    }
    if (item.classList[0] === "completed-checkbox") {
        const todoItem = item.parentElement;
        todoItem.classList.toggle("task-completed");
    }
}

function filterTodos(event) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        if (todo.classList) {
            switch (event.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    todo.style.display = todo.classList.contains("task-completed") ? "flex" : "none";
                    break;
                case "uncompleted":
                    todo.style.display = !todo.classList.contains("task-completed") ? "flex" : "none";
                    break;
            }
        }
    })
}

function sortTodos(event){ 
    event.preventDefault();
    if(todoList.classList){
        todoList.classList.toggle("sort-by-time");
    }
}
