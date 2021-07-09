// switching slides with icons
const allIcons = document.querySelectorAll("aside .icon");
const allSlides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");


let currentlySelected = 0;

for(let i = 0; i < allIcons.length; i++){
    allIcons[i].addEventListener("click", function() {
        for (let j = 0; j < allIcons.length; j++) {
            allIcons[j].classList.remove("active");
          }
    allIcons[i].classList.add("active")
        currentlySelected = i;

        if (currentlySelected < 0) {
            currentlySelected = 0;
          }
          if (currentlySelected >= allSlides.length - 1) {
            nextBtn.innerHTML = "Preview CV";
          }
          else {
            nextBtn.innerHTML = `Next<img src=${"../images/next arrow.png"} alt=""`
          }
          if (currentlySelected > 0) {
            prevBtn.style.display = "block";
          } else {
            prevBtn.style.display = "none";
          }

          
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


nextBtn.addEventListener("click", function() {
    currentlySelected++;
    for(let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
        allIcons[i].classList.remove("active");
    }

    if (currentlySelected < 0) {
        currentlySelected = 0;
      }
      if (currentlySelected >= allSlides.length - 1) {
        nextBtn.innerHTML = "Preview CV";
      }
      else {
        nextBtn.innerHTML = `Next<img src=${"../images/next arrow.png"} alt=""`
      }
      if (currentlySelected > 0) {
        prevBtn.style.display = "block";
      } else {
        prevBtn.style.display = "none";
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