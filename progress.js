// Select all topic checkboxes
const checkboxes = document.querySelectorAll(".topicCheck");

// Progress elements
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

checkboxes.forEach(box => {

box.addEventListener("change", updateProgress);

});

function updateProgress(){

const total = checkboxes.length;

let completed = 0;

checkboxes.forEach(box => {

if(box.checked){
completed++;
}

});

const percent = Math.round((completed / total) * 100);

progressBar.style.width = percent + "%";

progressText.innerText = percent + "% Completed";

saveProgress();

}



// ======================
// SAVE PROGRESS
// ======================

function saveProgress(){

let progressState = [];

checkboxes.forEach(box => {

progressState.push(box.checked);

});

localStorage.setItem("studyProgress", JSON.stringify(progressState));

}



// ======================
// LOAD PROGRESS
// ======================

function loadProgress(){

const saved = JSON.parse(localStorage.getItem("studyProgress"));

if(saved){

checkboxes.forEach((box,index)=>{

box.checked = saved[index];

});

updateProgress();

}

}

loadProgress();