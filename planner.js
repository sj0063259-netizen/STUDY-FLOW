// STUDY PLAN GENERATOR

function generateStudyPlan(){

const totalTopics = parseInt(document.getElementById("topics").value)
const examDate = document.getElementById("examDate").value

const suggestion = document.getElementById("suggestion")
const planList = document.getElementById("planList")

planList.innerHTML = ""

if(!totalTopics || !examDate){
alert("Please enter topics and exam date")
return
}


// calculate days remaining

const today = new Date()
today.setHours(0,0,0,0)

const exam = new Date(examDate)

const diff = exam - today

const days = Math.ceil(diff / (1000*60*60*24))

if(days <= 0){
alert("Exam date must be in future")
return
}


// topics per day

const topicsPerDay = Math.ceil(totalTopics / days)

suggestion.innerText =
"Recommended: Study about " + topicsPerDay + " topics per day."


let topicNumber = 1


for(let day = 1; day <= days && topicNumber <= totalTopics; day++){

let li = document.createElement("li")

let checkbox = document.createElement("input")
checkbox.type = "checkbox"
checkbox.addEventListener("change", updateProgress)

li.appendChild(checkbox)


let topicsToday = []


for(let j = 0; j < topicsPerDay && topicNumber <= totalTopics; j++){

topicsToday.push("Topic " + topicNumber)

topicNumber++

}


let text = document.createElement("span")

text.innerText = " Day " + day + " → " + topicsToday.join(", ")

li.appendChild(text)

planList.appendChild(li)

}


updateProgress()

}



// PROGRESS TRACKER

function updateProgress(){

const tasks = document.querySelectorAll("#planList input")

let completed = 0

tasks.forEach(task => {

if(task.checked){
completed++
}

})


const percent = tasks.length
? Math.round((completed / tasks.length) * 100)
: 0


document.getElementById("progressText").innerText =
"Progress: " + percent + "%"


// update progress bar

document.getElementById("progressFill").style.width =
percent + "%"

}