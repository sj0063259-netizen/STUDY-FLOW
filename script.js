function generatePlan(){

let topics = document.getElementById("topics").value
let examDate = document.getElementById("examDate").value
let suggestion = document.getElementById("suggestion")
let planList = document.getElementById("planList")

planList.innerHTML = ""

let today = new Date()
let exam = new Date(examDate)

let diffTime = exam - today
let days = Math.ceil(diffTime/(1000*60*60*24))

if(days <= 0){
alert("Please choose a future exam date")
return
}

let topicsPerDay = Math.ceil(topics/days)

suggestion.innerText =
"AI Suggestion: Study about " + topicsPerDay + " topics per day."

let topicNumber = 1

for(let i=1;i<=days;i++){

let li = document.createElement("li")

let topicsToday = []

for(let j=1;j<=topicsPerDay && topicNumber<=topics;j++){

topicsToday.push("Topic " + topicNumber)

topicNumber++

}

if(topicsToday.length>0){

li.innerText = "Day " + i + " → " + topicsToday.join(", ")

planList.appendChild(li)

}

}

}