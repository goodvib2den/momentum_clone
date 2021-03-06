// DON variable
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// strings variable
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "usename";

// login fn
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
}

// paint greeting fn
function paintGreeting(userName) {
  greeting.innerText = `안녕하세요. ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// save user name
const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreeting(saveUserName);
}
