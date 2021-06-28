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
function move() {
    slides.forEach((slide, index)=> {
        if(window.innerWidth < 767) {
            slide.style.left = `${index * 100}%`;
        }
        else {
        slide.style.left = `${index * 50}%`;
        }
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

}
setInterval(move, 1000);
 
btn.addEventListener("click", function() {
    counter++
    carousel();
})
