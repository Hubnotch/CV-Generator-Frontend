// switching slides with icons
const allIcons = document.querySelectorAll("aside .icon");
const allSlides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");



const overlay = document.querySelector(".overlay")
const previewBtn = document.querySelector(".preview-cv");


const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const address = document.querySelector("#address");
const dob = document.querySelector("#dob");
const profession = document.querySelector("#profession");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#number");


let currentlySelected = 0;

for(let i = 0; i < allIcons.length; i++){
    allIcons[i].addEventListener("click", function() {
        for (let j = 0; j < allIcons.length; j++) {
            allIcons[j].classList.remove("active");
          }
    allIcons[i].classList.add("active")
        currentlySelected = i;

          if (currentlySelected >= allSlides.length - 1) {
            nextBtn.style.display = "none";
            previewBtn.style.display = "block"
          }
          else {
            nextBtn.style.display = "inline-flex";
            previewBtn.style.display = "none"

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

   
      if (currentlySelected >= allSlides.length - 1) {
        nextBtn.style.display = "none";
        previewBtn.style.display = "block"
      }
      else {
        nextBtn.style.display = "inline-flex";
        previewBtn.style.display = "none"
      }
      if (currentlySelected > 0) {
        prevBtn.style.display = "block";
      } else {
        prevBtn.style.display = "none";
      }

      
    allSlides[currentlySelected].style.display = "block";
    allIcons[currentlySelected].classList.add("active")
})


prevBtn.addEventListener("click", function() {
    currentlySelected--;
    for(let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
        allIcons[i].classList.remove("active");
    }
    if (currentlySelected <= 0) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "inline-flex";
      previewBtn.style.display = "none";
    }
    else {
      // prevBtn.style.display = "inline-flex"
    }
    if (currentlySelected <= allSlides.length - 1) {
      nextBtn.style.display = "inline-flex";
      previewBtn.style.display = "none"
    }
    allSlides[currentlySelected].style.display = "block";
    allIcons[currentlySelected].classList.add("active")
})



previewBtn.addEventListener("click", function() {
  overlay.style.display = "flex";
  overlay.innerHTML = `   <div class="fixed-cv-header">
  <button class="close-preview">Close Preview</button>
</div>
<div class="cv-page">
  <div class="cv-header">
    <div class="inner-rect">
      <h1>${(firstName.value.toUpperCase())} ${(lastName.value).toUpperCase()}</h1>
      <p>${(profession.value.toUpperCase())}</p>
      <img src="../images/samantha.png" alt="">
    </div>
  </div>

  <!-- cv body -->

  <!-- profile -->
  <div class="profile">
      <div class="col-33">
        <h3>Profile</h3>
      </div>
      <div class="col-33">
       <p> <b>Date of Birth: </b>${dob.value}</p>
       <p><b> Phone: ${phoneNumber.value} </b></p>

      </div>
      <div class="col-33">
       <p><b> Mail: </b>${email.value}</p>
       <p><b>Address: </b> ${address.value} </p>

      </div>
  </div>


  <!-- education -->
  <div class="education">
    <h3>Education</h3>
    <div class="education-row">
      <div class="col-33">Nov 2005 — Sep 2010</div>
    <div class="col-66">
      <p><b>Los Angelis University</b></p>
      <p>Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0</p>
    </div>
    <div class="col-33">Nov 2005 — Sep 2010</div>
    <div class="col-66">
      <p><b>Los Angelis University</b></p>
      <p>Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0</p>
    </div>
    </div>
  </div>


  
  <!-- employement -->
  <div class="employement">
    <h3>Employement</h3>
    <div class="employement-row">
      <div class="col-33">Nov 2005 — Sep 2010</div>
    <div class="col-66">
      <p><b>Los Angelis University</b></p>
      <p>Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0</p>
    </div>
    </div> 
  </div>

    <!-- skills -->
    <div class="skills">
      <div class="skills-row">
        <div class="col-33">Nov 2005 — Sep 2010</div>
      <div class="col-66">
        <p><b>Los Angelis University</b></p>
        <p>Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0</p>
      </div>
      </div> 
    </div>

    <div class="bottom-buttons">
      <button type="button" class="download-preview"><img src="../images//cloud-download-alt (1).png" alt="">Downlaod</button>
      <button type="button" class="close-preview-white">Close Preview</button>
    </div>
  </div>`
  console.log(lastName, firstName);

  const closeBtn = document.querySelector(".close-preview");
const closeBtn2 = document.querySelector(".close-preview-white")
closeBtn.addEventListener("click", function() {
  overlay.style.display = "none";
})
closeBtn2.addEventListener("click", function() {
  overlay.style.display = "none";
})
})


// close preview button
