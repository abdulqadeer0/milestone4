var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable'=true\">".concat(name, "</spa></p>\n    <p><b>Email:</b><span contenteditable'=true\">").concat(email, "</spa></p>\n    <p><b>Phone:</b><span contenteditable'=true\">").concat(phone, "</spa></p>\n    \n     <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable'=true\">").concat(Experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable'=true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume diplay element is missing.');
    }
});
