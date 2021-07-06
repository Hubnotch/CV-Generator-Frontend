// switching slides with icons
const allIcons = document.querySelectorAll("aside div");
const allSlides = document.querySelectorAll(".slide");

let currentlySelected = 0;

for(let i = 0; i < allIcons.length; i++){
    allIcons[i].addEventListener("click", function() {
        for (let j = 0; j < allIcons.length; j++) {
            allIcons[j].classList.remove("active");
          }
    allIcons[i].classList.add("active")
        currentlySelected = i;
        console.log(currentlySelected)
    const target = this.getAttribute("data-id");
        for(let j=0; j < allSlides.length; j++) {
            allSlides[j].style.display = "none";
            if (allSlides[j].getAttribute("data-target") === target) {
                allSlides[j].style.display = "block";
              }
        }
    })
}



// switching slides with navigation buttons

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev")

nextBtn.addEventListener("click", function() {
    currentlySelected++;
    for(let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
        allIcons[i].classList.remove("active");
    }
    allSlides[currentlySelected].style.display = "block";
    allIcons[currentlySelected].classList.add("active")
    console.log(currentlySelected)
})


prevBtn.addEventListener("click", function() {
    currentlySelected--;
    for(let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
        allIcons[i].classList.remove("active");
    }
    allSlides[currentlySelected].style.display = "block";
    allIcons[currentlySelected].classList.add("active")
    console.log(currentlySelected)
})