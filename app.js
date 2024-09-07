// Select form and output div
var form = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Adding more fields for Education, Work Experience, and Skills
var addEducationBtn = document.getElementById('addEducation');
var educationContainer = document.getElementById('educationContainer');
var addWorkExperienceBtn = document.getElementById('addWorkExperience');
var workExperienceContainer = document.getElementById('workExperienceContainer');
var addSkillBtn = document.getElementById('addSkill');
var skillsContainer = document.getElementById('skillsContainer');
addEducationBtn.addEventListener('click', function () {
    var newField = document.createElement('input');
    newField.type = 'text';
    newField.name = 'education';
    newField.placeholder = 'Enter your education';
    educationContainer.appendChild(newField);
});
addWorkExperienceBtn.addEventListener('click', function () {
    var newField = document.createElement('input');
    newField.type = 'text';
    newField.name = 'workExperience';
    newField.placeholder = 'Enter your work experience';
    workExperienceContainer.appendChild(newField);
});
addSkillBtn.addEventListener('click', function () {
    var newField = document.createElement('input');
    newField.type = 'text';
    newField.name = 'skills';
    newField.placeholder = 'Enter a skill';
    skillsContainer.appendChild(newField);
});
// Form submit event to collect data and display resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
    // Collect multiple education, work experience, and skills
    var educations = Array.from(document.getElementsByName('education')).map(function (input) { return input.value; });
    var workExperiences = Array.from(document.getElementsByName('workExperience')).map(function (input) { return input.value; });
    var skills = Array.from(document.getElementsByName('skills')).map(function (input) { return input.value; });
    // Create resume HTML
    var resumeHTML = "\n    <h3>".concat(name, "</h3>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    <p><strong>Gender:</strong> ").concat(gender, "</p>\n\n    <h4>Education:</h4>\n    <ul>").concat(educations.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</ul>\n\n    <h4>Work Experience:</h4>\n    <ul>").concat(workExperiences.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "</ul>\n\n    <h4>Skills:</h4>\n    <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n  ");
    // Insert resume into output div
    resumeOutput.innerHTML = resumeHTML;
});
