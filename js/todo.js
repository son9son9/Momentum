const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOINPUT_KEY = "toDoInput";

function paintTodo(input) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = input;
    button.innerText = "✖"
    button.style = "margin-left: 4px; border: none;"
    button.addEventListener("click", deleteTodo);
    li.style = "list-style: none;"

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    localStorage.setItem(TODOINPUT_KEY, toDoInput.value);

    paintTodo(toDoInput.value);
    toDoInput.value = "";
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);