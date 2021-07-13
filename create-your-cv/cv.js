// switching slides with icons
const allIcons = document.querySelectorAll("aside .icon");
const allSlides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");



const overlay = document.querySelector(".overlay")
const previewBtn = document.querySelector(".preview-cv");

const title = document.querySelector("#title");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const address = document.querySelector("#address");
const dob = document.querySelector("#dob");
const profession = document.querySelector("#profession");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#number");
const position = document.querySelector("#position");
const acheivement = document.querySelector("#acheivement");
const year1 = document.querySelector("#year1");
const year2 = document.querySelector("#year2");
const skills = document.querySelector("#skills")


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


// adding new Skills

const newSkillBtn = document.querySelector(".add-new-skill");
const skillSlide = document.querySelector(".skills-slide");

newSkillBtn.addEventListener("click", function() {
  const newSkill = document.createElement("div");
  newSkill.classList.add("row");
  newSkill.innerHTML = `<div class="form-field col-1">
  <label for="">Skills, description (e.g Editing skills - excellent)</label>
  <input type="text" id="skills">`
  skillSlide.insertBefore(newSkill, newSkillBtn)

})



// get selectbox
var selectBox1 = document.getElementById('year1');
// loop through years
for (let i = 2050; i >= 1900; i--) {
    // create option element
    var option = document.createElement('option');
    // add value and text name
    option.value = i;
    option.innerHTML = i;
    // add the option element to the selectbox
    selectBox1.appendChild(option);
}

// get selectbox
var selectBox2 = document.getElementById('year2');
// loop through years
for (let i = 2050; i >= 1900; i--) {
    // create option element
    var option = document.createElement('option');
    // add value and text name
    option.value = i;
    option.innerHTML = i;
    // add the option element to the selectbox
    selectBox2.appendChild(option);
}




// preview page
previewBtn.addEventListener("click", function() {
  const allSkills = document.querySelectorAll(".skills-slide .row input");
  let skillArr = [...allSkills].map(skill => {
    return `<div class="skill-list">
    <p>${skill.value}</p>
    </div>`
  })
  console.log(allSkills)
  skillArr = skillArr.join("")
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
      <div class="col-33">${year1.value} — ${year2.value}</div>
    <div class="col-66">
      <p><b>${position.value}</b></p>
      <p>${acheivement.value}</p>
    </div>
    </div> 
  </div>

    <!-- skills -->
    <div class="skills">
      <div class="skills-row">
        <div class="col-33"><b>Skills</b></div>
      <div class="col-66">
        </p>${skillArr}</p>
      </div>
      </div> 
    </div>

    <div class="bottom-buttons">
      <button type="button" class="download-preview"><img src="../images//cloud-download-alt (1).png" alt="">Downlaod</button>
      <button type="button" class="close-preview-white">Close Preview</button>
    </div>
  </div>`


  // close preview Button
  const closeBtn = document.querySelector(".close-preview");
  const closeBtn2 = document.querySelector(".close-preview-white")
  closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
  })
  closeBtn2.addEventListener("click", function() {
    overlay.style.display = "none";
  })


console.log(allSkills)


})