var formData = document.getElementById("form-element");
var generated_resume = document.getElementById("generatedResume");
formData.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect Element values
    var name = document.getElementById("info1").value;
    var email = document.getElementById("info2").value; // Missing .value
    var contact = document.getElementById("info3").value; // Missing .value
    var education = document.getElementById("edu").value;
    var experience = document.getElementById("exp").value; // Missing .value
    var skill = document.getElementById("skil").value; // Missing .value
    var resumeHtml = "\n    <h1 class=\"resume-title\"><b>Resume</b></h1>\n    <h2 class=\"display-personal\" >Personal Information</h2><br>\n    <p class=\"display-name\"><b>Name:</b> ".concat(name, "</p><br>\n    <p class=\"display-email\"><b>Email:</b> ").concat(email, "</p><br>\n    <p class=\"display-contact\"><b>Contact:</b> ").concat(contact, "</p><br>\n<br>\n    <h2 class=\"display-education\">Education</h2><br>\n    <p class=\"display-edu\"><b>Education:</b> ").concat(education, "</p><br>\n<br>\n    <h2 class=\"display-experience\">Experience</h2><br>\n    <p class=\"display-exp\"><b>Experience:</b> ").concat(experience, "</p><br>\n</br>\n    <h2 class=\"display-skill\">Skills</h2><br>\n    <p class=\"display-ski\"><b>Skills:</b> ").concat(skill, "</p><br>\n    ");
    if (generated_resume) {
        generated_resume.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
// Add logs to check if elements are being selected correctly
console.log(formData);
console.log(generated_resume);
