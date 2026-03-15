// ==========================
// MOBILE MENU TOGGLE
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

if(navLinks.style.display === "flex"){
navLinks.style.display = "none";
}else{
navLinks.style.display = "flex";
}

});


// ==========================
// ELEMENTS
// ==========================

const topicSelect = document.getElementById("topic");
const generateBtn = document.getElementById("generatePlan");
const planOutput = document.getElementById("planOutput");


// ==========================
// STUDY PLAN GENERATOR
// ==========================

generateBtn.addEventListener("click", generateStudyPlan);

function generateStudyPlan(){

const course = document.getElementById("course").value;
const subject = document.getElementById("subject").value;
const topic = topicSelect.value;

if(course === "Select Course" || subject === "Select Subject" || topic === "Select Topic"){

planOutput.innerText = "Please select course, subject and topic.";
return;

}

planOutput.innerText =
"Course: " + course +
"\nSubject: " + subject +
"\nTopic: " + topic +
"\n\nRecommended Study Plan:\n" +
"• Read theory (30 minutes)\n" +
"• Watch concept video (20 minutes)\n" +
"• Solve practice problems (40 minutes)\n" +
"• Revise notes (10 minutes)";

updateDashboard();

}


// ==========================
// TOPIC GUIDANCE
// ==========================

topicSelect.addEventListener("change", showTopicInfo);

function showTopicInfo(){

const topicName = topicSelect.value;

if(topicName === "Select Topic") return;

const data = topicDatabase[topicName];

if(!data) return;

document.getElementById("topicSummary").innerText = data.summary;
document.getElementById("topicDifficulty").innerText = data.difficulty;
document.getElementById("topicTime").innerText = data.time;
document.getElementById("topicBook").innerText = data.book;

}


// ==========================
// DASHBOARD UPDATE
// ==========================

function updateDashboard(){

const completedTopics = document.querySelectorAll(".topicCheck:checked").length;
document.getElementById("topicCount").innerText = completedTopics;

const notes = Object.keys(localStorage).filter(key => key.startsWith("notes_"));
document.getElementById("notesCount").innerText = notes.length;

const files = JSON.parse(localStorage.getItem("files")) || [];
document.getElementById("fileCount").innerText = files.length;

}

updateDashboard();