// script for the password toggler
const password = document.querySelector("#password");
const passwordToggler = document.querySelector("#togglePassword");

let toggle = false;

passwordToggler.addEventListener("click", (e) => {
    const icon = document.querySelector(".far");
    icon.classList.toggle('fa-eye-slash')

  toggle = !toggle;
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});
