// variable declaration
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const h1FirstChild = document.querySelector("body h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

// function define
function onSubmit(event) {
   event.preventDefault();

   const username = loginInput.value;

   localStorage.setItem(USERNAME_KEY, username);

   loginForm.classList.add(HIDDEN_CLASSNAME);
   //greeting.innerText = "Hello, " + username;
   //greeting.classList.remove(HIDDEN_CLASSNAME);
   h1FirstChild.innerHTML = `Nice to meet you, ${username.toUpperCase()}`;
}

// function handleLinkClick(event) {
//    event.preventDefault();
//    console.log(event);
// }

// link.addEventListener("click", handleLinkClick);

if (savedUsername === null) {
   loginForm.addEventListener("submit", onSubmit);
} else {
   loginForm.classList.add(HIDDEN_CLASSNAME);
   //greeting.innerText = "Hello, " + savedUsername;
   //greeting.classList.remove(HIDDEN_CLASSNAME);
   h1FirstChild.innerHTML = savedUsername.toUpperCase();
}
