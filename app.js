const nav = document.querySelector("header .nav");
const ul = document.querySelector("header .nav ul");
const navToggle = document.querySelector("header .nav-toggle");


navToggle.addEventListener("click", function() {
    navToggle.classList.toggle("open")
    nav.classList.toggle("open")
})


// remove loader page when page loads
const loader = document.querySelector(".loader");

window.addEventListener("load", function() {
  loader.classList.add("loaded");
});


