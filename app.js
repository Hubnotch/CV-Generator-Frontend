// nav toggle
const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")
navToggle.addEventListener("click", function() {
    navToggle.classList.toggle("open")
    nav.classList.toggle("open")
})


// fixed header
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  if (this.window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});



// slides
const slides = document.querySelectorAll(".slide");
const btn = document.querySelector(".next")
    slides.forEach((slide, index)=> {
        slide.style.left = `${index * 49}%`;
    })

let counter = 0
function  carousel() {
    slides.forEach((slide) => {
        if (counter === slides.length) {
            counter = 0;
          
        }
        slide.style.transform = `translateX(-${counter * 100}%)`;
         
    })
    console.log("Hello")
}
btn.addEventListener("click", function() {
    counter++
    carousel();
})
