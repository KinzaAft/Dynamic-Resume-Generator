   
const formData = document.getElementById("form-element") as HTMLFormElement;
const generated_resume = document.getElementById("generatedResume") as HTMLDivElement;

formData.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // collect Element values
    const name = (document.getElementById("info1") as HTMLInputElement).value;
    const email = (document.getElementById("info2") as HTMLInputElement).value; // Missing .value
    const contact = (document.getElementById("info3") as HTMLInputElement).value; // Missing .value
    const image1 = (document.getElementById("image1")as HTMLInputElement).value
    const education = (document.getElementById("edu") as HTMLInputElement).value;
    const experience = (document.getElementById("exp") as HTMLInputElement).value; // Missing .value
    const skill = (document.getElementById("skil") as HTMLInputElement).value; // Missing .value
  
    const resumeHtml = `
    <h1 class="resume-title"><b>Resume</b></h1>
    <h2 class="display-personal" >Personal Information</h2><br>
    <div id=image></div>
    <p class="display-name"><b>Name:</b> ${name}</p><br>
    <p class="display-email"><b>Email:</b> ${email}</p><br>
    <p class="display-contact"><b>Contact:</b> ${contact}</p><br>
<br>
    <h2 class="display-education">Education</h2><br>
    <p class="display-edu"><b>Education:</b> ${education}</p><br>
<br>
    <h2 class="display-experience">Experience</h2><br>
    <p class="display-exp"><b>Experience:</b> ${experience}</p><br>
</br>
    <h2 class="display-skill">Skills</h2><br>
    <p class="display-ski"><b>Skills:</b> ${skill}</p><br>
    `;

    if (generated_resume) {
        generated_resume.innerHTML = resumeHtml;
    } else {
        console.error("The resume display element is missing.");
    }
});

// Add logs to check if elements are being selected correctly
console.log(formData);
console.log(generated_resume);
