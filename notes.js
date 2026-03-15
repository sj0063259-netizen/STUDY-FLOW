// elements
const notesInput = document.getElementById("notesInput");
const saveNotesBtn = document.getElementById("saveNotes");
const viewNotesBtn = document.getElementById("viewNotes");
const savedNotes = document.getElementById("savedNotes");
const topicSelect = document.getElementById("topic");


// =====================
// SAVE NOTES
// =====================

saveNotesBtn.addEventListener("click", () => {

const topic = topicSelect.value;

if(topic === "Select Topic"){
alert("Please select a topic first");
return;
}

const notes = notesInput.value;

localStorage.setItem("notes_" + topic, notes);

alert("Notes saved!");

});



// =====================
// VIEW NOTES
// =====================

viewNotesBtn.addEventListener("click", () => {

const topic = topicSelect.value;

if(topic === "Select Topic"){
alert("Please select a topic first");
return;
}

const saved = localStorage.getItem("notes_" + topic);

if(saved){
savedNotes.innerText = saved;
}else{
savedNotes.innerText = "No notes saved for this topic.";
}

});



// =====================
// AUTO LOAD NOTES
// =====================

topicSelect.addEventListener("change", () => {

const topic = topicSelect.value;

const saved = localStorage.getItem("notes_" + topic);

if(saved){
notesInput.value = saved;
}else{
notesInput.value = "";
}

});

// DELETE NOTE

function deleteTopicNote(){

const topic = topicSelectNotes.value

if(topic === ""){
alert("Select topic first")
return
}

localStorage.removeItem("note_" + topic)

noteDisplay.innerText = "Note deleted."

}