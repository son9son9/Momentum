const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const audio = document.querySelector("audio");
let toDos = [];

const TODOINPUT_KEY = "toDos";

function paintTodo(toDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = toDo.id;
    span.innerText = toDo.text;
    button.innerText = "✖"
    // 삭제 버튼 리스너 생성
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const toDoJson = {
        id: Date.now(),
        text: toDoInput.value
    };

    // 입력한 input을 toDos 배열에 데이터 추가
    toDos.push(toDoJson);
    pushToLocStor();

    paintTodo(toDoJson);
    toDoInput.value = "";
}

function pushToLocStor() {
    localStorage.setItem(TODOINPUT_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;

    toDos = toDos.filter((element) => {
        // 내일 다시
    });
    pushToLocStor();
    li.remove();
    console.log(toDos);
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