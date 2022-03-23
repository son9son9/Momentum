const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOINPUT_KEY = "toDoInput";

function handleToDoSubmit(event) {
    event.preventDefault();

    localStorage.setItem(TODOINPUT_KEY, toDoInput.value);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);