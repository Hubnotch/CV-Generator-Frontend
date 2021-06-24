
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
