// Select form and output div
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// Adding more fields for Education, Work Experience, and Skills
const addEducationBtn = document.getElementById('addEducation') as HTMLButtonElement;
const educationContainer = document.getElementById('educationContainer') as HTMLDivElement;

const addWorkExperienceBtn = document.getElementById('addWorkExperience') as HTMLButtonElement;
const workExperienceContainer = document.getElementById('workExperienceContainer') as HTMLDivElement;

const addSkillBtn = document.getElementById('addSkill') as HTMLButtonElement;
const skillsContainer = document.getElementById('skillsContainer') as HTMLDivElement;

addEducationBtn.addEventListener('click', () => {
  const newField = document.createElement('input');
  newField.type = 'text';
  newField.name = 'education';
  newField.placeholder = 'Enter your education';
  educationContainer.appendChild(newField);
});

addWorkExperienceBtn.addEventListener('click', () => {
  const newField = document.createElement('input');
  newField.type = 'text';
  newField.name = 'workExperience';
  newField.placeholder = 'Enter your work experience';
  workExperienceContainer.appendChild(newField);
});

addSkillBtn.addEventListener('click', () => {
  const newField = document.createElement('input');
  newField.type = 'text';
  newField.name = 'skills';
  newField.placeholder = 'Enter a skill';
  skillsContainer.appendChild(newField);
});

// Form submit event to collect data and display resume
form.addEventListener('submit', function(event: Event) {
  event.preventDefault();

  // Collect form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLInputElement).value;
  const gender = (document.getElementById('gender') as HTMLSelectElement).value;

  // Collect multiple education, work experience, and skills
  const educations = Array.from(document.getElementsByName('education')).map(input => (input as HTMLInputElement).value);
  const workExperiences = Array.from(document.getElementsByName('workExperience')).map(input => (input as HTMLInputElement).value);
  const skills = Array.from(document.getElementsByName('skills')).map(input => (input as HTMLInputElement).value);

  // Create resume HTML
  const resumeHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Gender:</strong> ${gender}</p>

    <h4>Education:</h4>
    <ul>${educations.map(edu => `<li>${edu}</li>`).join('')}</ul>

    <h4>Work Experience:</h4>
    <ul>${workExperiences.map(exp => `<li>${exp}</li>`).join('')}</ul>

    <h4>Skills:</h4>
    <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
  `;

  // Insert resume into output div
  resumeOutput.innerHTML = resumeHTML;
});

