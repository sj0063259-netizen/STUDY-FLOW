// ---------------------
// Course -> Subjects
// ---------------------
const subjects = {
  ee: ["Basic Electrical Engineering", "Circuit Theory", "Electrical Machines"],
  cs: ["Data Structures", "Operating Systems"]
};

// ---------------------
// Topic Suggestions
// ---------------------
const topicSuggestions = {
  "Circuit Theory": ["Ohm Law", "Kirchhoff Voltage Law", "Nodal Analysis", "Mesh Analysis"],
  "Basic Electrical Engineering": ["Ohm Law", "Kirchhoff Law", "AC Basics"],
  "Electrical Machines": ["Transformer", "DC Motor", "Induction Motor"],
  "Data Structures": ["Arrays", "Linked List", "Stacks & Queues", "Trees", "Graphs"],
  "Operating Systems": ["Process Scheduling", "Deadlocks", "Memory Management", "File Systems"]
};

// ---------------------
// Topic Notes (details)
// ---------------------
const topicDetails = {
  "Ohm Law": "Defines the relationship between voltage, current, and resistance (V=IR).",
  "Kirchhoff Voltage Law": "Sum of voltages around a closed loop equals zero.",
  "Nodal Analysis": "Method to determine voltages at nodes using KCL equations.",
  "Mesh Analysis": "Method to calculate currents in loops using KVL equations.",
  "Transformer": "Transfers electrical energy between circuits using electromagnetic induction.",
  "DC Motor": "Converts electrical energy into mechanical rotation using direct current.",
  "Induction Motor": "Widely used AC motor where current is induced in the rotor.",
  "Arrays": "Collection of elements stored in contiguous memory locations.",
  "Linked List": "Data structure with nodes connected via pointers.",
  "Stacks & Queues": "Stack follows LIFO, Queue follows FIFO principle.",
  "Trees": "Hierarchical data structure with nodes and edges.",
  "Graphs": "Non-linear data structure with vertices and edges.",
  "Process Scheduling": "Decides the order in which processes run on CPU.",
  "Deadlocks": "Condition where processes wait indefinitely for resources.",
  "Memory Management": "Efficient allocation and deallocation of memory.",
  "File Systems": "Organizes and manages files on storage devices."
};

// ---------------------
// Book Recommendations
// ---------------------
const books = {
  "Circuit Theory": ["Engineering Circuit Analysis – Hayt", "Electric Circuits – Nilsson"],
  "Basic Electrical Engineering": ["Basic Electrical Engineering – V.K Mehta", "Electrical Technology – B.L Theraja"],
  "Electrical Machines": ["Electrical Machines – P.S Bimbhra", "Electric Machinery – Fitzgerald"],
  "Data Structures": ["Data Structures – Seymour Lipschutz", "Algorithms – Cormen"],
  "Operating Systems": ["Operating System Concepts – Silberschatz", "Modern Operating Systems – Tanenbaum"]
};

// ---------------------
// Load Subjects
// ---------------------
function loadSubjects() {
  let course = document.getElementById("course").value;
  let subjectSelect = document.getElementById("subject");
  subjectSelect.innerHTML = '<option value="">Select Subject</option>';
  if (!subjects[course]) return;
  subjects[course].forEach(sub => {
    let option = document.createElement("option");
    option.value = sub;
    option.text = sub;
    subjectSelect.appendChild(option);
  });
}

// ---------------------
// Show Topic Suggestions
// ---------------------
function showSuggestions() {
  let subject = document.getElementById("subject").value;
  let list = document.getElementById("topicSuggestion");
  list.innerHTML = "";
  if (topicSuggestions[subject]) {
    topicSuggestions[subject].forEach(topic => {
      let li = document.createElement("li");
      li.innerText = topic;
      list.appendChild(li);
    });
  }
}

// ---------------------
// Show Book Recommendations
// ---------------------
function showBooks() {
  let subject = document.getElementById("subject").value;
  let list = document.getElementById("bookList");
  list.innerHTML = "";
  if (books[subject]) {
    books[subject].forEach(book => {
      let li = document.createElement("li");
      li.innerText = book;
      list.appendChild(li);
    });
  }
}

// ---------------------
// Generate Study Plan
// ---------------------
function generatePlan() {
  let subject = document.getElementById("subject").value;
  let topics = document.getElementById("topics").value;
  let examDate = document.getElementById("examDate").value;

  let planList = document.getElementById("planList");
  let suggestion = document.getElementById("suggestion");
  let topicSelect = document.getElementById("topicSelect");

  planList.innerHTML = "";
  topicSelect.innerHTML = '<option value="">Select Topic</option>';

  if (subject === "") {
    alert("Please select subject first");
    return;
  }
  if (topics === "" || examDate === "") {
    alert("Enter topics and exam date");
    return;
  }

  let today = new Date();
  today.setHours(0,0,0,0);
  let exam = new Date(examDate);
  let diffTime = exam - today;
  let days = Math.ceil(diffTime / (1000*60*60*24));

  if (days <= 0) {
    alert("Choose a future exam date");
    return;
  }

  let topicsPerDay = Math.ceil(topics / days);
  suggestion.innerText = "Smart Suggestion: Study about " + topicsPerDay + " topics per day.";

  let topicNumber = 1;
  let day = 1;

  while (topicNumber <= topics) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", updateProgress);
    li.appendChild(checkbox);

    let topicsToday = [];
    for (let j=1; j<=topicsPerDay && topicNumber<=topics; j++) {
      let topic = "Topic " + topicNumber;
      topicsToday.push(topic);

      // add topic to note dropdown
      let option = document.createElement("option");
      option.value = topic;
      option.text = topic;
      topicSelect.appendChild(option);

      topicNumber++;
    }

    let text = document.createElement("span");
    text.innerText = " Day " + day + " → " + topicsToday.join(", ");
    li.appendChild(text);
    planList.appendChild(li);
    day++;
  }
}

// ---------------------
// Progress Tracker with Bar
// ---------------------
function updateProgress() {
  let tasks = document.querySelectorAll("#planList input[type='checkbox']");
  let completed = 0;

  tasks.forEach(task => {
    if (task.checked) completed++;
  });

  let percent = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;

  // Update text
  document.getElementById("progressText").innerText = `Progress: ${percent}%`;

  // Update progress bar
  let bar = document.getElementById("progressBar");
  if (bar) {
    bar.style.width = percent + "%";
    bar.innerText = percent > 0 ? percent + "%" : ""; // show % inside bar
  }
}

// ---------------------
// Save Topic Notes
// ---------------------
function saveTopicNote() {
  let topic = document.getElementById("topicSelect").value;
  let note = document.getElementById("topicNoteInput").value;
  if (topic === "" || note === "") {
    alert("Select topic and write note");
    return;
  }
  localStorage.setItem("note_" + topic, note);
  document.getElementById("topicNotesDisplay").innerText = note;
}

// ---------------------
// Load Topic Notes
// ---------------------
document.getElementById("topicSelect").addEventListener("change", function() {
  let topic = this.value;
  let saved = localStorage.getItem("note_" + topic);
  let detail = topicDetails[topic] || "";
  document.getElementById("topicNotesDisplay").innerText = saved || detail || "No notes saved";
});

// ---------------------
// Delete Topic Notes
// ---------------------
function deleteTopicNote() {
  let topic = document.getElementById("topicSelect").value;
  localStorage.removeItem("note_" + topic);
  document.getElementById("topicNotesDisplay").innerText = "";
  document.getElementById("topicNoteInput").value = "";
}
