const topics = [
"AC Circuits",
"DC Circuits",
"Kirchhoff Law",
"Ohm Law"
];

const scheduleBtn = document.getElementById("generateSchedule");
const scheduleOutput = document.getElementById("scheduleOutput");

scheduleBtn.addEventListener("click", generateSchedule);

function generateSchedule(){

const days = Number(document.getElementById("examDays").value);

scheduleOutput.innerHTML = "";

if(days <= 0){
alert("Enter valid days");
return;
}

for(let i=0;i<days;i++){

const li = document.createElement("li");

let topic;

if(i < topics.length){
topic = topics[i];
}
else if(i === days-1){
topic = "Final Revision";
}
else{
topic = "Practice Problems";
}

li.innerText = "Day " + (i+1) + " → " + topic;

scheduleOutput.appendChild(li);

}

}