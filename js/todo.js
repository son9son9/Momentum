const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const audio = document.querySelector("audio");
let toDos = [];

const TODOINPUT_KEY = "toDos";

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

    // 입력한 input을 toDos 배열에 데이터 추가
    toDos.push(toDoInput.value);
    saveTodos();

    paintTodo(toDoInput.value);
    toDoInput.value = "";
}

function saveTodos() {
    localStorage.setItem(TODOINPUT_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOINPUT_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(element => {
        toDos = parsedTodos;
        paintTodo(element);
    });
}