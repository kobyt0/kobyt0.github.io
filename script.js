const skillsList = document.getElementById("skills-list");
const skillInput = document.getElementById("skill-input");
const addSkillBtn = document.getElementById("add-skill");

const jobsList = document.getElementById("jobs-list");
const jobStart = document.getElementById("job-start");
const jobEnd = document.getElementById("job-end");
const jobRole = document.getElementById("job-role");
const addJobBtn = document.getElementById("add-job");

const eduList = document.getElementById("edu-list");
const eduStart = document.getElementById("edu-start");
const eduEnd = document.getElementById("edu-end");
const eduPlace = document.getElementById("edu-place");
const eduTitle = document.getElementById("edu-title");
const addEduBtn = document.getElementById("add-edu");


function addRemoveFunctionality() {
  const removeButtons = document.querySelectorAll(".remove");

  removeButtons.forEach(btn => {
    btn.onclick = () => {
      btn.parentElement.remove();
    };
  });
}


addSkillBtn.addEventListener("click", () => {
  const text = skillInput.value.trim();
  if (text === "") return;

  const skill = document.createElement("div");
  skill.classList.add("skill");
  skill.innerHTML = `${text} <span class="remove">✕</span>`;

  skillsList.appendChild(skill);
  skillInput.value = "";

  addRemoveFunctionality();
});


addJobBtn.addEventListener("click", () => {
  const start = jobStart.value.trim();
  const end = jobEnd.value.trim();
  const role = jobRole.value.trim();

  if (start === "" || end === "" || role === "") return;

  const job = document.createElement("div");
  job.classList.add("job");
  job.innerHTML = `
    <span>${start} - ${end} | ${role}</span>
    <span class="remove">✕</span>
  `;

  jobsList.appendChild(job);

  jobStart.value = "";
  jobEnd.value = "";
  jobRole.value = "";

  addRemoveFunctionality();
});


addEduBtn.addEventListener("click", () => {
  const start = eduStart.value.trim();
  const end = eduEnd.value.trim();
  const place = eduPlace.value.trim();
  const title = eduTitle.value.trim();

  if (start === "" || end === "" || place === "" || title === "") return;

  const eduItem = document.createElement("div");
  eduItem.classList.add("edu-item");
  eduItem.innerHTML = `
    <span>${start} - ${end}</span>
    <div>
      <h4>${place}</h4>
      <p>${title}</p>
    </div>
    <span class="remove">✕</span>
  `;

  eduList.appendChild(eduItem);

  eduStart.value = "";
  eduEnd.value = "";
  eduPlace.value = "";
  eduTitle.value = "";

  addRemoveFunctionality();
});



addRemoveFunctionality();

