const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const audio = document.querySelector("audio");
let toDos = [];

const TODOINPUT_KEY = "toDos";
// 화면에 TODO 그려주는 로직
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

// 버튼 클릭 시 로직
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
// 로컬스토리지에 저장하는 로직
function pushToLocStor() {
    localStorage.setItem(TODOINPUT_KEY, JSON.stringify(toDos));

    console.log("getItem: "+localStorage.getItem(TODOINPUT_KEY));
}
// TODO 삭제 로직
function deleteTodo(event) {
    const li = event.target.parentElement;

    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    // console.log("will delete: "+toDos);
    console.log(li.id);
    pushToLocStor();
    li.remove();
}
// TODO입력 리스너
toDoForm.addEventListener("submit", handleToDoSubmit);
// 로컬스토리지에서 TODO 데이터 받아오기
const savedTodos = localStorage.getItem(TODOINPUT_KEY);
// 받은 데이터 TODO 화면에 그려주기
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(element => {
        toDos = parsedTodos;
        paintTodo(element);
    });
}