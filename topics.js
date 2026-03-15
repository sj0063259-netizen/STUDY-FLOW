// Topic Database

const topicDatabase = {

"AC Circuits": {
summary: "AC circuits use alternating current where the direction of current changes periodically. They are used in power systems and household electricity.",

difficulty: "Medium",

time: "2 Hours",

book: "Basic Electrical Engineering – VK Mehta",

pdf: "AC-CIRCUIT.pdf",

video: "https://youtu.be/eQNMh8h9wbA?si=e6cmGcI8NgOYuDUE"
},

"DC Circuits": {
summary: "DC circuits use direct current where current flows only in one direction. Common examples include batteries and electronic circuits.",

difficulty: "Easy",

time: "1.5 Hours",

book: "Electrical Technology – BL Theraja",

pdf: "DC-CIRCUIT.pdf",

video: "https://youtu.be/UtxZguC2OtE?si=8nrmlaMIFuD_sbc0"
},

"Kirchhoff Law": {
summary: "Kirchhoff's laws help analyse complex electrical circuits. KCL deals with current at nodes and KVL deals with voltage around loops.",

difficulty: "Medium",

time: "2 Hours",

book: "Engineering Circuit Analysis – Hayt",

pdf: "resources/kirchhoff_notes.pdf",

video: "https://www.youtube.com/watch?v=7m1rC9mNq3A"
},

"Ohm Law": {
summary: "Ohm's law states that current is directly proportional to voltage and inversely proportional to resistance.",

difficulty: "Easy",

time: "1 Hour",

book: "Basic Electrical Engineering – VK Mehta",

pdf: "resources/ohm_law_notes.pdf",

video: "https://www.youtube.com/watch?v=8c0KfHhLh6k"
}

};


// DOM Elements

const topicSelect = document.getElementById("topic");

const summary = document.getElementById("topicSummary");

const difficulty = document.getElementById("topicDifficulty");

const time = document.getElementById("topicTime");

const book = document.getElementById("topicBook");


// create PDF + Video containers

const resourceContainer = document.createElement("div");
resourceContainer.id = "topicResources";
document.querySelector("#planner").appendChild(resourceContainer);


// Generate topic guidance

document.getElementById("generatePlan").addEventListener("click", () => {

const selectedTopic = topicSelect.value;

if(!topicDatabase[selectedTopic]){
summary.innerText = "Please select a valid topic.";
difficulty.innerText = "";
time.innerText = "";
book.innerText = "";
resourceContainer.innerHTML = "";
return;
}

const data = topicDatabase[selectedTopic];


// show information

summary.innerText = data.summary;

difficulty.innerText = data.difficulty;

time.innerText = data.time;

book.innerText = data.book;


// show resources

resourceContainer.innerHTML = `

<h3>Topic Resources</h3>

<p>
📄 <a href="${data.pdf}" target="_blank">Download Notes PDF</a>
</p>

<p>
🎥 <a href="${data.video}" target="_blank">Watch Video Lecture</a>
</p>

`;

});