// when user generates study plan
const reminderTopicSelect = document.getElementById("topic");
const reminderText = document.getElementById("studyReminder");

const topicOrder = [
"AC Circuits",
"DC Circuits",
"Kirchhoff Law",
"Ohm Law"
];

document.getElementById("generatePlan").addEventListener("click", () => {

let topic = reminderTopicSelect.value;

if(topic === "Select Topic") return;

localStorage.setItem("lastStudiedTopic", topic);

});

function loadReminder(){

const lastTopic = localStorage.getItem("lastStudiedTopic");

if(!lastTopic){
reminderText.innerText = "Start studying to receive smart recommendations.";
return;
}

const index = topicOrder.indexOf(lastTopic);

let nextTopic = topicOrder[index + 1];

if(!nextTopic){
nextTopic = topicOrder[0];
}

reminderText.innerText =
"You studied " + lastTopic + ". Recommended next topic: " + nextTopic;

}

loadReminder();