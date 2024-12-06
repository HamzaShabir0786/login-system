var getPassword = document.querySelector("#password");
var getEmail = document.querySelector("#email");
var btn = document.querySelector("#submit");
var showIncorrectpasword = document.querySelector(".spany");
var unhideIcon = document.querySelector(".unhide-btn");
var password = 123;
var email = "hamzii2205@gmail.com";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (getPassword.value == password && getEmail.value == email) {
    window.location.href = "loader.html";
  } else {
    showIncorrectpasword.innerHTML = "Incorrect Email or Password.";
    showIncorrectpasword.style.color = "darkred";
    getEmail.value = "";
    getPassword.value = "";
  }
});

unhideIcon.addEventListener("click", () => {
  if (getPassword.type === "password") {
    getPassword.type = "text"; // Show password
    // unhideIcon.classList.remove("fa-solid", "fa-eye-slash");
    unhideIcon.classList.add("fa-solid", "fa-eye");
  } else {
    getPassword.type = "password"; // Hide password
    unhideIcon.classList.remove("fa-solid", "fa-eye");
    unhideIcon.classList.add("fa-solid", "fa-eye-slash");
  }
});

getPassword.addEventListener("input", () => {
  if (getPassword.value.length > 0) {
    unhideIcon.style.visibility = "visible";
  } else {
    unhideIcon.style.visibility = "hidden";
  }
});
