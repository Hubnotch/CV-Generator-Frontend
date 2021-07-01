const nav = document.querySelector("header .nav");
const ul = document.querySelector("header .nav ul");
const navToggle = document.querySelector("header .nav-toggle");


navToggle.addEventListener("click", function() {
    navToggle.classList.toggle("open")
    nav.classList.toggle("open")
})



const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
  if (this.window.scrollY > 100) {
    header.classList.add("fixed");
    nav.style.backgroundColor = "transparent"
  } else {
    header.classList.remove("fixed");
    nav.style.backgroundColor = "rgba(225, 225, 225, 0.8)"
  }
});