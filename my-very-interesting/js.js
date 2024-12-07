function showHooray() {
  alert("Hooray!");
}

let form = document.querySelector("#special-buttton");
addEventListener("click", showHooray);

function showPassword(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(`😸 Your secret password is ${passwordInput.value}`);
}

let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", showPassword);

function showSignUpValue(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let usernameInput = document.querySelector("#usernameInput");
  alert(`Your email is ${emailInput.value}`);
  alert(`Your username is ${usernameInput.value}`);
}

let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", showSignUpValue);
